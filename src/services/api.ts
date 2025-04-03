
import axios from 'axios';

// Set base URL for API requests
const API_URL = process.env.NODE_ENV === 'production' 
  ? 'https://your-production-api-url.com/api' 
  : 'http://localhost:8000/api';

// Create axios instance
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add interceptor to add auth token to requests
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// API service functions
export const authService = {
  login: async (email: string, password: string) => {
    try {
      // Use JSON format instead of FormData for login
      const response = await api.post('/auth/login', {
        username: email,
        password: password
      });
      
      if (response.data.access_token) {
        localStorage.setItem('token', response.data.access_token);
        localStorage.setItem('user', JSON.stringify(response.data.user));
      }
      
      return response.data;
    } catch (error: any) {
      // Enhance error handling
      if (error.response && error.response.data) {
        const errorMsg = error.response.data.detail || 'Login failed';
        throw new Error(errorMsg);
      }
      throw error;
    }
  },
  
  register: async (userData: any) => {
    try {
      const response = await api.post('/auth/register', userData);
      return response.data;
    } catch (error: any) {
      // Enhance error handling to provide more descriptive errors
      if (error.response && error.response.data) {
        const errorMsg = error.response.data.detail || 'Registration failed';
        throw new Error(errorMsg);
      }
      throw error;
    }
  },
  
  logout: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  },
  
  getCurrentUser: () => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  },
};

export const doctorService = {
  getAllDoctors: async () => {
    const response = await api.get('/doctors');
    return response.data;
  },
  
  getDoctorById: async (id: number) => {
    const response = await api.get(`/doctors/${id}`);
    return response.data;
  },
};

export const appointmentService = {
  createAppointment: async (appointmentData: any) => {
    const response = await api.post('/appointments', appointmentData);
    return response.data;
  },
  
  getAppointments: async () => {
    const response = await api.get('/appointments');
    return response.data;
  },
  
  updateAppointmentStatus: async (id: number, statusData: any) => {
    const response = await api.put(`/appointments/${id}`, statusData);
    return response.data;
  },
};

export default api;
