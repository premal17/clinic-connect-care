
from pydantic import BaseModel, EmailStr, validator
from typing import Optional, List, Union
from datetime import datetime
from models import UserRole, AppointmentStatus

# User Schemas
class UserBase(BaseModel):
    email: EmailStr
    full_name: str

class UserCreate(UserBase):
    password: str
    role: UserRole

class UserResponse(UserBase):
    id: int
    role: str
    created_at: datetime
    is_active: bool

    class Config:
        orm_mode = True

# Token Schemas
class Token(BaseModel):
    access_token: str
    token_type: str
    user: UserResponse

class TokenData(BaseModel):
    email: Optional[str] = None
    user_id: Optional[int] = None
    role: Optional[str] = None

# Doctor Schemas
class DoctorBase(BaseModel):
    specialty: str
    experience: int
    about: Optional[str] = None
    location: Optional[str] = None
    availability: Optional[str] = None

class DoctorCreate(DoctorBase):
    pass

class DoctorResponse(DoctorBase):
    id: int
    user: UserResponse

    class Config:
        orm_mode = True

# Patient Schemas
class PatientBase(BaseModel):
    age: int
    gender: str
    medical_history: Optional[str] = None

class PatientCreate(PatientBase):
    pass

class PatientResponse(PatientBase):
    id: int
    user: UserResponse

    class Config:
        orm_mode = True

# Appointment Schemas
class AppointmentBase(BaseModel):
    scheduled_date: datetime
    reason: Optional[str] = None
    notes: Optional[str] = None

class AppointmentCreate(AppointmentBase):
    doctor_id: int

class AppointmentUpdate(BaseModel):
    status: AppointmentStatus
    notes: Optional[str] = None

class AppointmentResponse(AppointmentBase):
    id: int
    patient_id: int
    doctor_id: int
    status: str
    created_at: datetime

    class Config:
        orm_mode = True

# Medical Record Schemas
class MedicalRecordBase(BaseModel):
    diagnosis: str
    prescription: Optional[str] = None
    notes: Optional[str] = None

class MedicalRecordCreate(MedicalRecordBase):
    patient_id: int

class MedicalRecordResponse(MedicalRecordBase):
    id: int
    patient_id: int
    doctor_id: int
    date: datetime

    class Config:
        orm_mode = True

# Chat Schemas
class ChatBase(BaseModel):
    message: str

class ChatCreate(ChatBase):
    receiver_id: int

class ChatResponse(ChatBase):
    id: int
    sender_id: int
    receiver_id: int
    timestamp: datetime
    is_read: bool

    class Config:
        orm_mode = True

# Payment Schemas
class PaymentBase(BaseModel):
    amount: float
    description: Optional[str] = None

class PaymentCreate(PaymentBase):
    pass

class PaymentResponse(PaymentBase):
    id: int
    patient_id: int
    status: str
    transaction_id: str
    created_at: datetime

    class Config:
        orm_mode = True
