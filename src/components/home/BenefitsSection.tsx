
import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const BenefitsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-clinic-secondary mb-4">
            Why Choose Smart Clinic
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're committed to providing the best healthcare experience possible.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="flex items-start">
            <div className="mr-4 mt-1">
              <CheckCircle2 className="h-6 w-6 text-clinic-accent" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-clinic-secondary">Trusted by Thousands</h3>
              <p className="text-gray-600">Join our community of satisfied patients and healthcare providers.</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="mr-4 mt-1">
              <CheckCircle2 className="h-6 w-6 text-clinic-accent" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-clinic-secondary">Secure & Private</h3>
              <p className="text-gray-600">Your health information is protected by industry-leading security measures.</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="mr-4 mt-1">
              <CheckCircle2 className="h-6 w-6 text-clinic-accent" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-clinic-secondary">24/7 Availability</h3>
              <p className="text-gray-600">Access your healthcare information anytime, day or night.</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="mr-4 mt-1">
              <CheckCircle2 className="h-6 w-6 text-clinic-accent" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-clinic-secondary">Quality Care</h3>
              <p className="text-gray-600">Connect with verified and experienced healthcare professionals.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
