
import { 
  Calendar, 
  Users, 
  Activity, 
  MessageSquare, 
  Clock, 
  ChevronRight,
  CheckCircle,
  XCircle
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '@/contexts/AuthContext';
import { Link } from 'react-router-dom';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const DoctorDashboard = () => {
  const { user } = useAuth();

  // Mock data for today's appointments
  const todayAppointments = [
    {
      id: 'app1',
      patientName: 'John Smith',
      patientAge: 45,
      time: '10:30 AM',
      status: 'upcoming',
      reason: 'Annual checkup'
    },
    {
      id: 'app2',
      patientName: 'Sarah Johnson',
      patientAge: 32,
      time: '11:45 AM',
      status: 'upcoming',
      reason: 'Follow-up consultation'
    },
    {
      id: 'app3',
      patientName: 'Michael Brown',
      patientAge: 28,
      time: '9:15 AM',
      status: 'completed',
      reason: 'Prescription renewal'
    }
  ];

  // Mock data for pending appointments
  const pendingAppointments = [
    {
      id: 'pend1',
      patientName: 'Lisa Wilson',
      patientAge: 38,
      date: '2023-08-16',
      time: '2:30 PM',
      reason: 'Cardiac consultation'
    },
    {
      id: 'pend2',
      patientName: 'Robert Garcia',
      patientAge: 52,
      date: '2023-08-17',
      time: '11:00 AM',
      reason: 'Blood pressure followup'
    }
  ];

  // Mock data for recent patients
  const recentPatients = [
    {
      id: 'pat1',
      name: 'Michael Brown',
      age: 28,
      lastVisit: '2023-08-09',
      condition: 'Hypertension'
    },
    {
      id: 'pat2',
      name: 'Emily Davis',
      age: 34,
      lastVisit: '2023-08-08',
      condition: 'Diabetes Type 2'
    },
    {
      id: 'pat3',
      name: 'William Johnson',
      age: 42,
      lastVisit: '2023-08-07',
      condition: 'Asthma'
    }
  ];

  return (
    <div className="container px-4 py-6 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-clinic-secondary">Welcome, Dr. {user?.name}</h1>
        <p className="text-gray-600">Here's your practice overview for today</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card className="dashboard-stats-card">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Today's Appointments
            </CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{todayAppointments.length}</div>
            <p className="text-xs text-muted-foreground">
              {todayAppointments.filter(a => a.status === 'completed').length} completed, {todayAppointments.filter(a => a.status === 'upcoming').length} upcoming
            </p>
          </CardContent>
        </Card>
        
        <Card className="dashboard-stats-card">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Pending Requests
            </CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{pendingAppointments.length}</div>
            <p className="text-xs text-muted-foreground">
              Awaiting your approval
            </p>
          </CardContent>
        </Card>
        
        <Card className="dashboard-stats-card">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Patients
            </CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">124</div>
            <p className="text-xs text-muted-foreground">
              3 new this week
            </p>
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
            <div className="text-2xl font-bold">7</div>
            <p className="text-xs text-muted-foreground">
              From 4 patients
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Main content area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left column - Today's Appointments */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Today's Appointments</CardTitle>
                <CardDescription>Scheduled visits for {new Date().toLocaleDateString()}</CardDescription>
              </div>
              <Link to="/appointments">
                <Button variant="outline" size="sm" className="gap-1">
                  View Schedule
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </Link>
            </CardHeader>
            <CardContent>
              {todayAppointments.length > 0 ? (
                <div className="space-y-4">
                  {todayAppointments.map((appointment) => (
                    <div key={appointment.id} className="flex items-start p-3 rounded-lg border border-gray-100 bg-white shadow-sm">
                      <Avatar className="h-10 w-10 mr-4">
                        <AvatarImage src="/placeholder.svg" alt={appointment.patientName} />
                        <AvatarFallback>{appointment.patientName.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-semibold text-clinic-secondary">{appointment.patientName}</h4>
                            <p className="text-sm text-gray-500">Age: {appointment.patientAge} • {appointment.reason}</p>
                          </div>
                          <Badge variant={appointment.status === 'completed' ? 'secondary' : 'default'}>
                            {appointment.status === 'completed' ? 'Completed' : 'Upcoming'}
                          </Badge>
                        </div>
                        <div className="flex mt-2 text-sm text-gray-600">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>{appointment.time}</span>
                        </div>
                        {appointment.status === 'upcoming' && (
                          <div className="mt-3 flex space-x-2">
                            <Button size="sm" variant="outline" className="gap-1">
                              <MessageSquare className="h-3 w-3" />
                              Message
                            </Button>
                            <Button size="sm" className="gap-1">
                              Start Consultation
                            </Button>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-6">
                  <p className="text-gray-500">No appointments scheduled for today</p>
                </div>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Pending Appointment Requests</CardTitle>
                <CardDescription>Appointments awaiting your approval</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              {pendingAppointments.length > 0 ? (
                <div className="space-y-4">
                  {pendingAppointments.map((appointment) => (
                    <div key={appointment.id} className="flex items-start p-3 rounded-lg border border-gray-100 bg-white shadow-sm">
                      <Avatar className="h-10 w-10 mr-4">
                        <AvatarImage src="/placeholder.svg" alt={appointment.patientName} />
                        <AvatarFallback>{appointment.patientName.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div>
                          <h4 className="font-semibold text-clinic-secondary">{appointment.patientName}</h4>
                          <p className="text-sm text-gray-500">Age: {appointment.patientAge} • {appointment.reason}</p>
                        </div>
                        <div className="flex mt-2 text-sm text-gray-600">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>{appointment.date}</span>
                          <Clock className="h-4 w-4 ml-3 mr-1" />
                          <span>{appointment.time}</span>
                        </div>
                        <div className="mt-3 flex space-x-2">
                          <Button size="sm" variant="outline" className="gap-1 text-red-500 hover:text-red-600 hover:bg-red-50">
                            <XCircle className="h-3 w-3" />
                            Decline
                          </Button>
                          <Button size="sm" variant="default" className="gap-1 bg-green-600 hover:bg-green-700">
                            <CheckCircle className="h-3 w-3" />
                            Accept
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-6">
                  <p className="text-gray-500">No pending appointment requests</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
        
        {/* Right column */}
        <div className="space-y-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Recent Patients</CardTitle>
                <CardDescription>Patients you've seen recently</CardDescription>
              </div>
              <Link to="/patients">
                <Button variant="outline" size="sm" className="gap-1">
                  View All
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </Link>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentPatients.map((patient) => (
                  <div key={patient.id} className="flex items-center border-b border-gray-100 pb-3 last:border-0">
                    <Avatar className="h-9 w-9 mr-3">
                      <AvatarImage src="/placeholder.svg" alt={patient.name} />
                      <AvatarFallback>{patient.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h4 className="font-medium text-clinic-secondary">{patient.name}</h4>
                      <p className="text-xs text-gray-500">
                        Age: {patient.age} • {patient.condition} • Last visit: {patient.lastVisit}
                      </p>
                    </div>
                    <Button variant="ghost" size="icon" className="ml-2">
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Weekly Schedule</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map((day) => (
                  <div key={day} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                    <span className="font-medium">{day}</span>
                    <span className="text-sm text-gray-600">9:00 AM - 5:00 PM</span>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4">
                Edit Schedule
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Performance Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Patient Satisfaction</span>
                    <span className="text-sm font-medium">95%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-clinic-primary h-2 rounded-full" style={{ width: '95%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Appointment Completion</span>
                    <span className="text-sm font-medium">89%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-clinic-primary h-2 rounded-full" style={{ width: '89%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Record Documentation</span>
                    <span className="text-sm font-medium">92%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-clinic-primary h-2 rounded-full" style={{ width: '92%' }}></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DoctorDashboard;
