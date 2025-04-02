
# Smart Clinic Backend

This is the backend for the Smart Clinic application, built with FastAPI and PostgreSQL.

## Setup

1. Create a virtual environment:
   ```
   python -m venv venv
   ```

2. Activate the virtual environment:
   - Windows: `venv\Scripts\activate`
   - Mac/Linux: `source venv/bin/activate`

3. Install dependencies:
   ```
   pip install -r requirements.txt
   ```

4. Set up PostgreSQL database:
   - Create a database named `smartclinic`
   - Update the `.env` file with your PostgreSQL credentials

5. Run the application:
   ```
   python main.py
   ```

## API Documentation

Once the server is running, you can access the API documentation at:
- Swagger UI: http://localhost:8000/docs
- ReDoc: http://localhost:8000/redoc

## API Endpoints

### Authentication
- POST /api/auth/register - Register a new user
- POST /api/auth/login - Login user

### Doctors
- GET /api/doctors - Get all doctors
- GET /api/doctors/{doctor_id} - Get a specific doctor

### Appointments
- POST /api/appointments - Create a new appointment
- GET /api/appointments - Get user's appointments
- PUT /api/appointments/{appointment_id} - Update appointment status
