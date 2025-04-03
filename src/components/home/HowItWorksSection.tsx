
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HowItWorksSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-clinic-secondary mb-4">
            How Smart Clinic Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Getting started with Smart Clinic is easy and straightforward.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="rounded-full bg-clinic-primary/10 w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-clinic-primary">1</span>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-clinic-secondary">Create an Account</h3>
            <p className="text-gray-600">Sign up in minutes and complete your health profile.</p>
          </div>
          
          <div className="text-center">
            <div className="rounded-full bg-clinic-primary/10 w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-clinic-primary">2</span>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-clinic-secondary">Find a Doctor</h3>
            <p className="text-gray-600">Browse specialists and book an appointment.</p>
          </div>
          
          <div className="text-center">
            <div className="rounded-full bg-clinic-primary/10 w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-clinic-primary">3</span>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-clinic-secondary">Receive Care</h3>
            <p className="text-gray-600">Visit the doctor and access your records anytime.</p>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <Link to="/register">
            <Button className="gap-2">
              Get Started Now
              <ChevronRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
