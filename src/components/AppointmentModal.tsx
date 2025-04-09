import React from 'react';
import { X, Video, Phone, MessageCircle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { Doctor } from '../lib/types';

interface AppointmentModalProps {
  doctor: Doctor;
  onClose: () => void;
}

const appointmentTypes = [
  {
    id: 'video',
    type: 'video',
    label: 'Video Consultation',
    icon: Video,
    description: 'Face-to-face online consultation',
  },
  {
    id: 'call',
    type: 'call',
    label: 'Phone Call',
    icon: Phone,
    description: 'Voice call consultation',
  },
  {
    id: 'message',
    type: 'message',
    label: 'Text Message',
    icon: MessageCircle,
    description: 'Chat-based consultation',
  },
];

const AppointmentModal: React.FC<AppointmentModalProps> = ({ doctor, onClose }) => {
  const { user } = useAuth();

  const handleAppointmentType = (type: string) => {
    // TODO: Implement appointment booking logic
    console.log(`Booking ${type} appointment with ${doctor.name}`);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Book Appointment</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-500"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="mb-4">
          <h3 className="font-medium text-gray-900">{doctor.name}</h3>
          <p className="text-gray-600">{doctor.specialty}</p>
        </div>

        <div className="space-y-4">
          {appointmentTypes.map((type) => {
            const Icon = type.icon;
            return (
              <button
                key={type.id}
                onClick={() => handleAppointmentType(type.type)}
                className="w-full flex items-center p-4 border rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-colors"
              >
                <Icon className="h-6 w-6 text-primary-600 mr-3" />
                <div className="text-left">
                  <div className="font-medium text-gray-900">{type.label}</div>
                  <div className="text-sm text-gray-500">{type.description}</div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AppointmentModal;