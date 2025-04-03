
import React from 'react';

const specializations = [
  "Cardiology", "Dermatology", "Neurology", "Pediatrics", 
  "Orthopedics", "Gynecology", "Ophthalmology", "Oncology"
];

const SpecializationsSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-clinic-secondary mb-4">
            Our Medical Specializations
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From routine checkups to specialized care, our network of healthcare professionals covers all your medical needs.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {specializations.map((specialization, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 transition-all duration-300 hover:border-clinic-primary text-center"
            >
              <h3 className="text-lg font-medium text-clinic-secondary">{specialization}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecializationsSection;
