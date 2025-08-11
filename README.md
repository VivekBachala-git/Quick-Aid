

# QuickAid – Micro Help Request and Offer Platform

QuickAid is a simple yet powerful platform that allows users to post help requests, offer assistance, and connect with people in need within their community. The platform focuses on   speed  ,   clarity  , and   ease of use  .

---

## 🚀 Features

    Post a Help Request   – Create posts to request help.
    Offer Help   – View and respond to others’ requests.
    Get All Posts   – Fetch and display all available help requests.
    Get Help by ID   – Retrieve specific posts by unique ID.
    Edit a Post   – Update request details.
    Delete a Post   – Remove outdated or irrelevant posts.
    Planned Features   – Search & filter, pagination, validation, user authentication, and admin-only routes.

---

## 🛠 Tech Stack

    Frontend:   Next.js, Tailwind CSS, shadcn/ui components
    Backend:   Flask (Python)
    Database:   MySQL 8.0 (Managed via MySQL Workbench 8.0 CE)
    Environment Management:   python-dotenv
    API Design:   RESTful architecture

---

## 📂 Folder Structure

```
quickaid/
├── app/                # Frontend pages and components
├── components/         # shadcn/ui reusable components
├── backend/            # Flask backend code
├── .env                # Environment variables
├── requirements.txt    # Python dependencies
└── README.md
```

---

## ⚙️ Installation & Setup

### Prerequisites

  Python 3.10+
  MySQL 8.0+
  Node.js 18+
  npm or yarn

### Backend Setup

```bash
cd backend
python -m venv venv
source venv/bin/activate  # Mac/Linux
venv\Scripts\activate     # Windows
pip install -r requirements.txt
```

  Create `.env` file in `backend/`:  

```
FLASK_APP=app.py
FLASK_ENV=development
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=quickaid
```

Run backend:

```bash
flask run
```

### Frontend Setup

```bash
cd app
npm install
npm run dev
```

---

## 📌 API Endpoints & Examples

### 1. Create Help Post

  POST   `/post`

```json
{
  "title": "Need help moving furniture",
  "description": "Looking for someone to help move my couch this Saturday",
  "location": "Hyderabad"
}
```

✅   Sample Response  

```json
{
  "id": 1,
  "message": "Help post created successfully"
}
```

---

### 2. Get All Posts

  GET   `/posts`
✅   Sample Response  

```json
[
  {
    "id": 1,
    "title": "Need help moving furniture",
    "description": "Looking for someone to help move my couch this Saturday",
    "location": "Hyderabad"
  },
  {
    "id": 2,
    "title": "Grocery pickup",
    "description": "Need someone to pick groceries from the market",
    "location": "Visakhapatnam"
  }
]
```

---

### 3. Get Post by ID

  GET   `/posts/1`
✅   Sample Response  

```json
{
  "id": 1,
  "title": "Need help moving furniture",
  "description": "Looking for someone to help move my couch this Saturday",
  "location": "Hyderabad"
}
```

---

### 4. Edit a Post

  PUT   `/posts/1`

```json
{
  "title": "Need help moving heavy furniture",
  "description": "Date changed to Sunday instead of Saturday"
}
```

✅   Sample Response  

```json
{
  "message": "Help post updated successfully"
}
```

---

### 5. Delete a Post

  DELETE   `/posts/1`
✅   Sample Response  

```json
{
  "message": "Help post deleted successfully"
}
```

---

## 🛡 License

MIT License © 2025 QuickAid

