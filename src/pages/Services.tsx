import React from 'react';
import { Stethoscope, Heart, Brain, Bone, ChevronFirst as FirstAid, Baby } from 'lucide-react';

const services = [
  {
    icon: Heart,
    name: 'Cardiology',
    description: 'Comprehensive heart care services including diagnostics and treatment.',
  },
  {
    icon: Brain,
    name: 'Neurology',
    description: 'Expert care for neurological conditions and disorders.',
  },
  {
    icon: Bone,
    name: 'Orthopedics',
    description: 'Specialized treatment for bone, joint, and muscle conditions.',
  },
  {
    icon: FirstAid,
    name: 'Emergency Care',
    description: '24/7 emergency medical services with rapid response teams.',
  },
  {
    icon: Stethoscope,
    name: 'General Medicine',
    description: 'Primary healthcare services for all age groups.',
  },
  {
    icon: Baby,
    name: 'Pediatrics',
    description: 'Specialized medical care for infants, children, and adolescents.',
  },
];

const Services = () => {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-xl text-gray-600 mb-12">
            Comprehensive healthcare services tailored to your needs
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.name}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <Icon className="h-12 w-12 text-primary-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {service.name}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;