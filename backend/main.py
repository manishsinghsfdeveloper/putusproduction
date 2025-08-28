from fastapi import FastAPI, Form
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"message": "Welcome to Putus Production API"}

@app.post("/contact")
def contact(name: str = Form(...), email: str = Form(...), message: str = Form(...)):
    return {"status": "success", "name": name, "email": email, "message": message}