
import { useState } from 'react';
import { Star, Calendar, MapPin, Search, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import AppHeader from '@/components/layout/AppHeader';
import AppFooter from '@/components/layout/AppFooter';

// Mock data for doctors
const doctorsData = [
  {
    id: 1,
    name: 'Dr. Sarah Johnson',
    specialty: 'Cardiologist',
    image: '/placeholder.svg',
    rating: 4.9,
    reviewCount: 124,
    experience: '12 years',
    location: 'New York Medical Center',
    availability: 'Available Today',
    bio: 'Specialized in cardiovascular diseases with over 10 years of clinical experience. Trained at Harvard Medical School and Johns Hopkins Hospital.'
  },
  {
    id: 2,
    name: 'Dr. Michael Chen',
    specialty: 'Dermatologist',
    image: '/placeholder.svg',
    rating: 4.8,
    reviewCount: 98,
    experience: '8 years',
    location: 'Westside Clinic',
    availability: 'Available Tomorrow',
    bio: 'Board-certified dermatologist specializing in skin cancer detection and treatment. Completed fellowship at Stanford University.'
  },
  {
    id: 3,
    name: 'Dr. Jessica Martinez',
    specialty: 'Pediatrician',
    image: '/placeholder.svg',
    rating: 4.9,
    reviewCount: 132,
    experience: '10 years',
    location: 'Children\'s Hospital',
    availability: 'Available Today',
    bio: 'Dedicated to children\'s health with special interest in developmental pediatrics. Former chief resident at Boston Children\'s Hospital.'
  },
  {
    id: 4,
    name: 'Dr. Robert Wilson',
    specialty: 'Neurologist',
    image: '/placeholder.svg',
    rating: 4.7,
    reviewCount: 87,
    experience: '15 years',
    location: 'Neuroscience Center',
    availability: 'Available in 2 days',
    bio: 'Expert in treating neurological disorders with a focus on stroke rehabilitation and multiple sclerosis.'
  },
  {
    id: 5,
    name: 'Dr. Emily Patel',
    specialty: 'Gynecologist',
    image: '/placeholder.svg',
    rating: 4.8,
    reviewCount: 110,
    experience: '9 years',
    location: 'Women\'s Health Clinic',
    availability: 'Available Today',
    bio: 'Specializes in women\'s reproductive health and obstetrics. Passionate about prenatal care and fertility treatments.'
  },
  {
    id: 6,
    name: 'Dr. James Thompson',
    specialty: 'Orthopedic Surgeon',
    image: '/placeholder.svg',
    rating: 4.6,
    reviewCount: 92,
    experience: '14 years',
    location: 'Sports Medicine Institute',
    availability: 'Available Tomorrow',
    bio: 'Fellowship-trained orthopedic surgeon specializing in sports injuries and joint replacements. Team physician for local sports teams.'
  }
];

const DoctorsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [availability, setAvailability] = useState('');
  
  // Filter doctors based on search term and filters
  const filteredDoctors = doctorsData.filter(doctor => {
    // Filter by search term
    const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Filter by specialty
    const matchesSpecialty = specialty === '' || doctor.specialty === specialty;
    
    // Filter by availability
    const matchesAvailability = availability === '' || doctor.availability.includes(availability);
    
    return matchesSearch && matchesSpecialty && matchesAvailability;
  });

  return (
    <div className="flex flex-col min-h-screen">
      <AppHeader />
      
      <main className="flex-1 bg-gray-50">
        {/* Hero Section */}
        <div className="bg-clinic-primary text-white py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Find the Right Doctor for You</h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto">
              Connect with experienced specialists who can provide the care you need
            </p>
          </div>
        </div>

        {/* Search and Filter Section */}
        <div className="py-6 bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <Input 
                  type="text" 
                  placeholder="Search by doctor name or specialty" 
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Select value={specialty} onValueChange={setSpecialty}>
                  <SelectTrigger className="w-full sm:w-[180px]">
                    <SelectValue placeholder="Specialty" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All Specialties</SelectItem>
                    <SelectItem value="Cardiologist">Cardiologist</SelectItem>
                    <SelectItem value="Dermatologist">Dermatologist</SelectItem>
                    <SelectItem value="Pediatrician">Pediatrician</SelectItem>
                    <SelectItem value="Neurologist">Neurologist</SelectItem>
                    <SelectItem value="Gynecologist">Gynecologist</SelectItem>
                    <SelectItem value="Orthopedic Surgeon">Orthopedic Surgeon</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={availability} onValueChange={setAvailability}>
                  <SelectTrigger className="w-full sm:w-[180px]">
                    <SelectValue placeholder="Availability" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">Any Availability</SelectItem>
                    <SelectItem value="Today">Available Today</SelectItem>
                    <SelectItem value="Tomorrow">Available Tomorrow</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline" size="icon" className="sm:inline-flex hidden">
                  <Filter size={18} />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="container mx-auto px-4 py-8">
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-clinic-secondary">
              {filteredDoctors.length} {filteredDoctors.length === 1 ? 'Doctor' : 'Doctors'} Found
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDoctors.map((doctor) => (
              <div 
                key={doctor.id} 
                className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="p-6">
                  <div className="flex items-start">
                    <div className="mr-4">
                      <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200">
                        <img src={doctor.image} alt={doctor.name} className="w-full h-full object-cover" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-clinic-secondary">{doctor.name}</h3>
                      <p className="text-gray-600">{doctor.specialty}</p>
                      <div className="flex items-center mt-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-medium ml-1">{doctor.rating}</span>
                        <span className="text-sm text-gray-500 ml-1">({doctor.reviewCount} reviews)</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <div className="flex items-start mb-2">
                      <MapPin className="h-4 w-4 text-gray-500 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{doctor.location}</span>
                    </div>
                    <div className="flex items-center mb-3">
                      <Calendar className="h-4 w-4 text-gray-500 mr-2" />
                      <span className="text-sm text-gray-600">{doctor.availability}</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                      {doctor.bio}
                    </p>
                    <div className="flex space-x-2">
                      <Button variant="outline" className="flex-1">View Profile</Button>
                      <Button className="flex-1">Book Appointment</Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredDoctors.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Search className="h-12 w-12 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">No doctors found</h3>
              <p className="text-gray-500">
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}
        </div>
      </main>
      
      <AppFooter />
    </div>
  );
};

export default DoctorsPage;
