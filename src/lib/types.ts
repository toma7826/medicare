export interface User {
  id: string;
  name: string;
  email: string;
}

export interface AppointmentType {
  id: string;
  type: 'video' | 'call' | 'message';
  label: string;
  icon: string;
  description: string;
}

export interface Doctor {
  id: number;
  name: string;
  specialty: string;
  image: string;
  experience: string;
  education: string;
  gender: 'male' | 'female';
  availability: {
    days: string[];
    hours: string;
  };
}