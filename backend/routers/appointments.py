
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from typing import List

from database import get_db
from models import Appointment, User, Doctor, Patient, AppointmentStatus, UserRole
from schemas import AppointmentCreate, AppointmentResponse, AppointmentUpdate
from security import get_current_user

router = APIRouter(
    prefix="/appointments",
    tags=["appointments"]
)

@router.post("/", response_model=AppointmentResponse)
def create_appointment(
    appointment: AppointmentCreate, 
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    # Verify user is a patient
    if current_user.role != UserRole.patient:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Only patients can book appointments"
        )
    
    # Get patient profile
    patient = db.query(Patient).filter(Patient.user_id == current_user.id).first()
    if not patient:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Patient profile not found"
        )
    
    # Verify doctor exists
    doctor = db.query(Doctor).filter(Doctor.id == appointment.doctor_id).first()
    if not doctor:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Doctor not found"
        )
    
    # Create new appointment
    new_appointment = Appointment(
        patient_id=patient.id,
        doctor_id=appointment.doctor_id,
        scheduled_date=appointment.scheduled_date,
        reason=appointment.reason,
        notes=appointment.notes,
        status=AppointmentStatus.pending
    )
    db.add(new_appointment)
    db.commit()
    db.refresh(new_appointment)
    
    return new_appointment

@router.get("/", response_model=List[AppointmentResponse])
def get_appointments(db: Session = Depends(get_db), current_user: User = Depends(get_current_user)):
    if current_user.role == UserRole.patient:
        patient = db.query(Patient).filter(Patient.user_id == current_user.id).first()
        if not patient:
            raise HTTPException(status_code=404, detail="Patient profile not found")
        appointments = db.query(Appointment).filter(Appointment.patient_id == patient.id).all()
    elif current_user.role == UserRole.doctor:
        doctor = db.query(Doctor).filter(Doctor.user_id == current_user.id).first()
        if not doctor:
            raise HTTPException(status_code=404, detail="Doctor profile not found")
        appointments = db.query(Appointment).filter(Appointment.doctor_id == doctor.id).all()
    elif current_user.role == UserRole.admin:
        appointments = db.query(Appointment).all()
    else:
        raise HTTPException(status_code=403, detail="Unauthorized access")
    
    return appointments

@router.put("/{appointment_id}", response_model=AppointmentResponse)
def update_appointment_status(
    appointment_id: int,
    appointment_update: AppointmentUpdate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    # Get the appointment
    appointment = db.query(Appointment).filter(Appointment.id == appointment_id).first()
    if not appointment:
        raise HTTPException(status_code=404, detail="Appointment not found")
    
    # Check permissions
    if current_user.role == UserRole.doctor:
        doctor = db.query(Doctor).filter(Doctor.user_id == current_user.id).first()
        if not doctor or appointment.doctor_id != doctor.id:
            raise HTTPException(status_code=403, detail="Not authorized to update this appointment")
    elif current_user.role == UserRole.admin:
        pass  # Admins can update any appointment
    else:
        raise HTTPException(status_code=403, detail="Only doctors and admins can update appointment status")
    
    # Update appointment
    appointment.status = appointment_update.status
    if appointment_update.notes:
        appointment.notes = appointment_update.notes
    
    db.commit()
    db.refresh(appointment)
    
    return appointment
