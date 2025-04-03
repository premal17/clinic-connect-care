
import React from 'react';
import { Calendar, MessageSquare, FileText, CreditCard } from 'lucide-react';

const features = [
  {
    icon: Calendar,
    title: 'Easy Appointment Booking',
    description: 'Schedule appointments with your preferred doctors at your convenience.'
  },
  {
    icon: MessageSquare,
    title: 'Live Chat Assistance',
    description: 'Get instant medical advice through our secure chat platform.'
  },
  {
    icon: FileText,
    title: 'Digital Medical Records',
    description: 'Access your medical history and prescriptions anytime, anywhere.'
  },
  {
    icon: CreditCard,
    title: 'Simple Payment Processing',
    description: 'Pay for consultations securely through multiple payment options.'
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-clinic-secondary mb-4">
            Everything You Need in One Place
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Smart Clinic provides a comprehensive healthcare platform designed to make managing your health easier than ever.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="rounded-full bg-clinic-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-clinic-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-clinic-secondary">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
