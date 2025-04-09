import React, { useState, useMemo } from 'react';
import { Search, Calendar, Filter } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import AppointmentModal from '../components/AppointmentModal';
import { Doctor } from '../lib/types';

const doctors: Doctor[] = [
  {
    id: 1,
    name: 'Dr. Sarah Johnson',
    specialty: 'Cardiologist',
    image: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&q=80&w=400',
    experience: '15+ years',
    education: 'MD - Cardiology, Harvard Medical School',
    gender: 'female',
    availability: {
      days: ['Monday', 'Wednesday', 'Friday'],
      hours: '9:00 AM - 5:00 PM',
    },
  },
  {
    id: 2,
    name: 'Dr. John Smith',
    specialty: 'Neurologist',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400',
    experience: '12+ years',
    education: 'MD - Neurology, Johns Hopkins',
    gender: 'male',
    availability: {
      days: ['Tuesday', 'Thursday', 'Saturday'],
      hours: '10:00 AM - 6:00 PM',
    },
  },
  {
    id: 3,
    name: 'Dr. Emily Rodriguez',
    specialty: 'Pediatrician',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=400',
    experience: '10+ years',
    education: 'MD - Pediatrics, Stanford Medical School',
    gender: 'female',
    availability: {
      days: ['Monday', 'Tuesday', 'Friday'],
      hours: '8:00 AM - 4:00 PM',
    },
  },
  {
    id: 4,
    name: 'Dr. Michael Chen',
    specialty: 'Orthopedic Surgeon',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=400',
    experience: '18+ years',
    education: 'MD - Orthopedics, Yale School of Medicine',
    gender: 'male',
    availability: {
      days: ['Wednesday', 'Thursday', 'Saturday'],
      hours: '9:00 AM - 5:00 PM',
    },
  },
  {
    id: 5,
    name: 'Dr. Lisa Patel',
    specialty: 'Dermatologist',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=400',
    experience: '14+ years',
    education: 'MD - Dermatology, UCLA Medical Center',
    gender: 'female',
    availability: {
      days: ['Monday', 'Wednesday', 'Friday'],
      hours: '10:00 AM - 6:00 PM',
    },
  },
  {
    id: 6,
    name: 'Dr. Robert Wilson',
    specialty: 'Psychiatrist',
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=400',
    experience: '16+ years',
    education: 'MD - Psychiatry, Columbia University',
    gender: 'male',
    availability: {
      days: ['Tuesday', 'Thursday', 'Saturday'],
      hours: '11:00 AM - 7:00 PM',
    },
  },
  {
    id: 7,
    name: 'Dr. Maria Garcia',
    specialty: 'Endocrinologist',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=400',
    experience: '13+ years',
    education: 'MD - Endocrinology, Mayo Clinic',
    gender: 'female',
    availability: {
      days: ['Monday', 'Tuesday', 'Friday'],
      hours: '9:00 AM - 5:00 PM',
    },
  },
  {
    id: 8,
    name: 'Dr. David Thompson',
    specialty: 'General Surgeon',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400',
    experience: '20+ years',
    education: 'MD - Surgery, Mount Sinai Hospital',
    gender: 'male',
    availability: {
      days: ['Wednesday', 'Thursday', 'Saturday'],
      hours: '8:00 AM - 4:00 PM',
    },
  },
];

const specialties = [...new Set(doctors.map(doctor => doctor.specialty))];

const Doctors = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('');
  const [selectedGender, setSelectedGender] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const { user } = useAuth();
  const navigate = useNavigate();

  const filteredDoctors = useMemo(() => {
    const query = searchQuery.toLowerCase();
    return doctors.filter(doctor => {
      const matchesSearch = 
        doctor.name.toLowerCase().includes(query) ||
        doctor.specialty.toLowerCase().includes(query) ||
        doctor.education.toLowerCase().includes(query);
      
      const matchesSpecialty = !selectedSpecialty || doctor.specialty === selectedSpecialty;
      const matchesGender = !selectedGender || doctor.gender === selectedGender;

      return matchesSearch && matchesSpecialty && matchesGender;
    });
  }, [searchQuery, selectedSpecialty, selectedGender]);

  const handleBookAppointment = (doctor: Doctor) => {
    if (!user) {
      navigate('/login');
      return;
    }
    setSelectedDoctor(doctor);
  };

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Doctors</h1>
          <p className="text-xl text-gray-600 mb-8">
            Meet our team of experienced healthcare professionals
          </p>

          <div className="max-w-4xl mx-auto mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search doctors..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500"
                />
              </div>

              <select
                value={selectedSpecialty}
                onChange={(e) => setSelectedSpecialty(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500"
              >
                <option value="">All Specialties</option>
                {specialties.map(specialty => (
                  <option key={specialty} value={specialty}>{specialty}</option>
                ))}
              </select>

              <select
                value={selectedGender}
                onChange={(e) => setSelectedGender(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500"
              >
                <option value="">All Genders</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDoctors.map((doctor) => (
            <div
              key={doctor.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105"
            >
              <div className="aspect-w-1 aspect-h-1">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-64 object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {doctor.name}
                </h3>
                <p className="text-primary-600 font-medium mb-2">
                  {doctor.specialty}
                </p>
                <p className="text-gray-600 mb-2">
                  Experience: {doctor.experience}
                </p>
                <p className="text-gray-600 text-sm mb-4">
                  {doctor.education}
                </p>
                <div className="text-sm text-gray-600 mb-4">
                  <p>Available: {doctor.availability.days.join(', ')}</p>
                  <p>Hours: {doctor.availability.hours}</p>
                </div>
                <button
                  onClick={() => handleBookAppointment(doctor)}
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700"
                >
                  <Calendar className="h-5 w-5 mr-2" />
                  Book Appointment
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredDoctors.length === 0 && (
          <div className="text-center mt-8">
            <p className="text-gray-600">No doctors found matching your search criteria.</p>
          </div>
        )}

        {selectedDoctor && (
          <AppointmentModal
            doctor={selectedDoctor}
            onClose={() => setSelectedDoctor(null)}
          />
        )}
      </div>
    </div>
  );
};

export default Doctors;