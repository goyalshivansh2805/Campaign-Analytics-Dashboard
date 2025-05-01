from sqlalchemy.orm import Session
from database import engine, SessionLocal
from models import Base, Campaign

Base.metadata.create_all(bind=engine)

db: Session = SessionLocal()

campaigns = [
    Campaign(name="Summer Sale", status="Active", clicks=150, cost=45.99, impressions=1000),
    Campaign(name="Black Friday", status="Paused", clicks=320, cost=89.50, impressions=2500),
    Campaign(name="New Year Blast", status="Active", clicks=200, cost=70.25, impressions=1800),
    Campaign(name="Diwali Deals", status="Paused", clicks=90, cost=30.00, impressions=950),
    Campaign(name="Spring Launch", status="Active", clicks=110, cost=40.99, impressions=1050),
    Campaign(name="Monsoon Mania", status="Paused", clicks=180, cost=55.49, impressions=2100),
    Campaign(name="Christmas Offer", status="Active", clicks=250, cost=95.75, impressions=3000),
    Campaign(name="Independence Promo", status="Paused", clicks=140, cost=65.00, impressions=1700),
    Campaign(name="Holi Dhamaka", status="Active", clicks=160, cost=48.25, impressions=1200),
    Campaign(name="Republic Day Buzz", status="Paused", clicks=130, cost=35.80, impressions=1100),
]

db.add_all(campaigns)
db.commit()
db.close()
