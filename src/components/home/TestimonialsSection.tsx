
import React from 'react';

const testimonialsData = [
  {
    id: 1,
    content: "Smart Clinic has revolutionized how I manage my healthcare. The appointment booking is seamless, and I love having access to all my records in one place.",
    author: "Sarah Johnson",
    role: "Patient"
  },
  {
    id: 2,
    content: "As a physician, the platform has made patient management incredibly efficient. The integrated chat feature helps me stay connected with my patients between visits.",
    author: "Dr. Michael Chen",
    role: "Cardiologist"
  },
  {
    id: 3,
    content: "I was skeptical at first, but Smart Clinic has exceeded my expectations. The interface is intuitive, and the customer support is exceptional.",
    author: "Robert Williams",
    role: "Patient"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-clinic-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-clinic-secondary mb-4">
            What Our Users Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from patients and doctors who use Smart Clinic every day.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-white p-6 rounded-lg shadow-md border border-gray-100"
            >
              <div className="mb-4 text-clinic-primary">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-lg">★</span>
                ))}
              </div>
              <p className="text-gray-600 mb-4">"{testimonial.content}"</p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-clinic-secondary flex items-center justify-center mr-3">
                  <span className="text-white font-semibold">{testimonial.author.charAt(0)}</span>
                </div>
                <div>
                  <p className="font-semibold text-clinic-secondary">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
