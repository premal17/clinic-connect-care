
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  MessageSquare, 
  FileText, 
  CreditCard,
  ChevronRight, 
  CheckCircle2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import AppHeader from '@/components/layout/AppHeader';
import AppFooter from '@/components/layout/AppFooter';

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

const specializations = [
  "Cardiology", "Dermatology", "Neurology", "Pediatrics", 
  "Orthopedics", "Gynecology", "Ophthalmology", "Oncology"
];

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <AppHeader />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-clinic-primary to-clinic-accent text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Your Health, Our Priority
              </h1>
              <p className="text-xl mb-8">
                Connect with top healthcare professionals and manage your healthcare journey with our integrated platform.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/register">
                  <Button size="lg" className="bg-white text-clinic-primary hover:bg-gray-100 w-full sm:w-auto">
                    Get Started
                  </Button>
                </Link>
                <Link to="/doctors">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 w-full sm:w-auto">
                    Find a Doctor
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
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

        {/* Specializations Section */}
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

        {/* How It Works Section */}
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

        {/* Testimonials Section */}
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
        
        {/* CTA Section */}
        <section className="py-16 bg-clinic-secondary text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">
                Ready to Transform Your Healthcare Experience?
              </h2>
              <p className="text-lg mb-8">
                Join thousands of satisfied users who have made Smart Clinic their healthcare partner of choice.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/register">
                  <Button size="lg" className="bg-white text-clinic-secondary hover:bg-gray-100 w-full sm:w-auto">
                    Sign Up Free
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 w-full sm:w-auto">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
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
      </main>
      
      <AppFooter />
    </div>
  );
};

export default HomePage;
