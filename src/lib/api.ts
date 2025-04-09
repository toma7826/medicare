import axios from 'axios';

const API_BASE_URL = 'https://api.medicare.com/v1';

export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  image: string;
  rating: number;
  available: boolean;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
}

export const api = {
  // Doctors API
  getDoctors: async (): Promise<Doctor[]> => {
    try {
      const response = await axios.get(`${API_BASE_URL}/doctors`);
      return response.data;
    } catch (error) {
      console.error('Error fetching doctors:', error);
      throw error;
    }
  },

  getDoctorById: async (id: string): Promise<Doctor> => {
    try {
      const response = await axios.get(`${API_BASE_URL}/doctors/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching doctor:', error);
      throw error;
    }
  },

  // Services API
  getServices: async (): Promise<Service[]> => {
    try {
      const response = await axios.get(`${API_BASE_URL}/services`);
      return response.data;
    } catch (error) {
      console.error('Error fetching services:', error);
      throw error;
    }
  },

  getServiceById: async (id: string): Promise<Service> => {
    try {
      const response = await axios.get(`${API_BASE_URL}/services/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching service:', error);
      throw error;
    }
  },

  // Appointments API
  bookAppointment: async (data: {
    doctorId: string;
    date: string;
    time: string;
    patientName: string;
    patientEmail: string;
  }) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/appointments`, data);
      return response.data;
    } catch (error) {
      console.error('Error booking appointment:', error);
      throw error;
    }
  },

  // Authentication API
  login: async (credentials: { email: string; password: string }) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/auth/login`, credentials);
      return response.data;
    } catch (error) {
      console.error('Error logging in:', error);
      throw error;
    }
  },

  register: async (userData: {
    name: string;
    email: string;
    password: string;
    phone: string;
    dateOfBirth: string;
  }) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/auth/register`, userData);
      return response.data;
    } catch (error) {
      console.error('Error registering:', error);
      throw error;
    }
  },
}; 