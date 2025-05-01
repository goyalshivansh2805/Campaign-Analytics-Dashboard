from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
from database import SessionLocal, engine
from models import Base, Campaign
from pydantic import BaseModel
from typing import List

Base.metadata.create_all(bind=engine)

app = FastAPI()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

class CampaignBase(BaseModel):
    id: int
    name: str
    status: str
    clicks: int
    cost: float
    impressions: int

    class Config:
        orm_mode = True

@app.get("/campaigns", response_model=List[CampaignBase])
def read_campaigns(db: Session = Depends(get_db)):
    try:
        campaigns = db.query(Campaign).all()
        if not campaigns:
            raise HTTPException(status_code=404, detail="No campaigns found")
        return campaigns
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Database error: {str(e)}")

@app.get("/campaigns/{campaign_id}", response_model=CampaignBase)
def read_campaign(campaign_id: int, db: Session = Depends(get_db)):
    try:
        campaign = db.query(Campaign).filter(Campaign.id == campaign_id).first()
        if not campaign:
            raise HTTPException(status_code=404, detail="Campaign not found")
        return campaign
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error fetching campaign: {str(e)}")
