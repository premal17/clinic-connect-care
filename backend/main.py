
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import uvicorn

from database import engine
import models
from routers import auth, doctors, appointments

# Create database tables
models.Base.metadata.create_all(bind=engine)

app = FastAPI(title="Smart Clinic API")

# Configure CORS
origins = [
    "http://localhost:8080",
    "http://localhost:3000",
    "https://acf1056d-b3f9-4f5d-b54a-60924b8fd114.lovableproject.com",  # Update this with your Lovable project URL
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(auth.router, prefix="/api")
app.include_router(doctors.router, prefix="/api")
app.include_router(appointments.router, prefix="/api")

@app.get("/")
def read_root():
    return {"message": "Welcome to Smart Clinic API"}

if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
