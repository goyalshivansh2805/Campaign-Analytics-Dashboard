
# Campaign Analytics Backend

Backend API for the Campaign Analytics Dashboard built with FastAPI and PostgreSQL.

## Setup

### 1. Clone the Repository

```bash
git clone https://github.com/goyalshivansh2805/Campaign-Analytics-Dashboard.git
cd Campaign-Analytics-Dashboard/backend
```

### 2. Create Virtual Environment

```bash
python3 -m venv venv
source venv/bin/activate
```

### 3. Install Dependencies

```bash
pip install -r requirements.txt
```

### 4. Set Up Environment Variables

Create a `.env` file and add:

```
DATABASE_URL=postgresql://<username>:<password>@<host>:<port>/<dbname>
```

### 5. Run the Application

```bash
uvicorn main:app --reload --port 8000
```

---

## Endpoints

- **GET /campaigns**: Get all campaigns
- **GET /campaigns/{campaign_id}**: Get a specific campaign by ID

---

---