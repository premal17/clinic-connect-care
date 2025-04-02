
import { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  Activity, 
  FileText, 
  MessageSquare, 
  CreditCard, 
  ChevronRight, 
  Bell
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '@/contexts/AuthContext';
import { Link } from 'react-router-dom';

const PatientDashboard = () => {
  const { user } = useAuth();
  const [healthProgress] = useState(75);

  // Mock data for upcoming appointments
  const upcomingAppointments = [
    {
      id: 'app1',
      doctorName: 'Dr. Sarah Johnson',
      specialty: 'Cardiologist',
      date: '2023-08-15',
      time: '10:30 AM',
      status: 'confirmed'
    },
    {
      id: 'app2',
      doctorName: 'Dr. Michael Chen',
      specialty: 'Dermatologist',
      date: '2023-08-22',
      time: '2:00 PM',
      status: 'pending'
    }
  ];

  // Mock data for recent prescriptions
  const recentPrescriptions = [
    {
      id: 'presc1',
      name: 'Amoxicillin 500mg',
      doctor: 'Dr. Sarah Johnson',
      date: '2023-08-01',
      instructions: 'Take 1 tablet 3 times daily for 7 days'
    },
    {
      id: 'presc2',
      name: 'Ibuprofen 200mg',
      doctor: 'Dr. Michael Chen',
      date: '2023-07-25',
      instructions: 'Take 1-2 tablets every 4-6 hours as needed for pain'
    }
  ];

  // Mock notifications
  const notifications = [
    {
      id: 'notif1',
      message: 'Appointment with Dr. Sarah Johnson confirmed',
      time: '2 hours ago'
    },
    {
      id: 'notif2',
      message: 'New message from Dr. Michael Chen',
      time: '1 day ago'
    },
    {
      id: 'notif3',
      message: 'Prescription renewal reminder',
      time: '2 days ago'
    }
  ];

  return (
    <div className="container px-4 py-6 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-clinic-secondary">Welcome, {user?.name}</h1>
        <p className="text-gray-600">Here's what's happening with your health</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="dashboard-stats-card">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Upcoming Appointments
            </CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{upcomingAppointments.length}</div>
            <p className="text-xs text-muted-foreground">
              Next: {upcomingAppointments[0]?.date} at {upcomingAppointments[0]?.time}
            </p>
          </CardContent>
        </Card>
        
        <Card className="dashboard-stats-card">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Health Progress
            </CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="flex justify-between mb-2">
              <div className="text-2xl font-bold">{healthProgress}%</div>
              <div className="text-xs text-muted-foreground">
                Goal: 100%
              </div>
            </div>
            <Progress value={healthProgress} className="h-2" />
          </CardContent>
        </Card>
        
        <Card className="dashboard-stats-card">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Unread Messages
            </CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">
              Last message: 2 hours ago
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Main content area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left column - Appointments */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Upcoming Appointments</CardTitle>
                <CardDescription>Your scheduled medical appointments</CardDescription>
              </div>
              <Link to="/appointments">
                <Button variant="outline" size="sm" className="gap-1">
                  View All
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </Link>
            </CardHeader>
            <CardContent>
              {upcomingAppointments.length > 0 ? (
                <div className="space-y-4">
                  {upcomingAppointments.map((appointment) => (
                    <div key={appointment.id} className="flex items-start p-3 rounded-lg border border-gray-100 bg-white shadow-sm">
                      <div className="bg-clinic-primary/10 rounded-full p-2 mr-4">
                        <Clock className="h-5 w-5 text-clinic-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-semibold text-clinic-secondary">{appointment.doctorName}</h4>
                            <p className="text-sm text-gray-500">{appointment.specialty}</p>
                          </div>
                          <Badge variant={appointment.status === 'confirmed' ? 'default' : 'outline'}>
                            {appointment.status === 'confirmed' ? 'Confirmed' : 'Pending'}
                          </Badge>
                        </div>
                        <div className="flex mt-2 text-sm text-gray-600">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>{appointment.date}</span>
                          <Clock className="h-4 w-4 ml-3 mr-1" />
                          <span>{appointment.time}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-6">
                  <p className="text-gray-500">No upcoming appointments</p>
                  <Link to="/appointments/book">
                    <Button className="mt-2">Book an Appointment</Button>
                  </Link>
                </div>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Recent Prescriptions</CardTitle>
                <CardDescription>Medications prescribed by your doctors</CardDescription>
              </div>
              <Link to="/records">
                <Button variant="outline" size="sm" className="gap-1">
                  View All
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </Link>
            </CardHeader>
            <CardContent>
              {recentPrescriptions.length > 0 ? (
                <div className="space-y-4">
                  {recentPrescriptions.map((prescription) => (
                    <div key={prescription.id} className="flex items-start p-3 rounded-lg border border-gray-100 bg-white shadow-sm">
                      <div className="bg-clinic-accent/10 rounded-full p-2 mr-4">
                        <FileText className="h-5 w-5 text-clinic-accent" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-clinic-secondary">{prescription.name}</h4>
                        <p className="text-sm text-gray-500">Prescribed by {prescription.doctor} on {prescription.date}</p>
                        <p className="text-sm text-gray-600 mt-1">{prescription.instructions}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-6">
                  <p className="text-gray-500">No recent prescriptions</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
        
        {/* Right column - Notifications and Quick Actions */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Notifications</CardTitle>
            </CardHeader>
            <CardContent>
              {notifications.length > 0 ? (
                <div className="space-y-4">
                  {notifications.map((notification) => (
                    <div key={notification.id} className="flex items-start border-b border-gray-100 pb-3 last:border-0">
                      <div className="bg-clinic-primary/10 rounded-full p-2 mr-3">
                        <Bell className="h-4 w-4 text-clinic-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm">{notification.message}</p>
                        <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-6">
                  <p className="text-gray-500">No new notifications</p>
                </div>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Link to="/appointments/book">
                <Button variant="outline" className="w-full justify-start">
                  <Calendar className="mr-2 h-4 w-4" />
                  Book Appointment
                </Button>
              </Link>
              <Link to="/messages">
                <Button variant="outline" className="w-full justify-start">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Chat with Doctor
                </Button>
              </Link>
              <Link to="/records">
                <Button variant="outline" className="w-full justify-start">
                  <FileText className="mr-2 h-4 w-4" />
                  View Medical Records
                </Button>
              </Link>
              <Link to="/payments">
                <Button variant="outline" className="w-full justify-start">
                  <CreditCard className="mr-2 h-4 w-4" />
                  Make Payment
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Health Tips</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="rounded-lg bg-clinic-light p-4 border border-clinic-accent/20">
                <h4 className="font-semibold text-clinic-secondary mb-2">Stay Hydrated</h4>
                <p className="text-sm text-gray-600">Remember to drink at least 8 glasses of water daily for optimal health and well-being.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PatientDashboard;
