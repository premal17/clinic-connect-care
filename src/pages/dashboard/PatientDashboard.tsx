import { 
  Calendar, 
  Activity, 
  MessageSquare, 
  FileText, 
  ChevronRight
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '@/contexts/AuthContext';
import { Link } from 'react-router-dom';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const PatientDashboard = () => {
  const { user } = useAuth();

  // Mock data for upcoming appointments
  const upcomingAppointments = [
    {
      id: 'app1',
      doctorName: 'Dr. Sarah Johnson',
      specialty: 'Cardiologist',
      time: '10:30 AM',
      date: '2023-08-15',
      reason: 'Annual checkup'
    },
    {
      id: 'app2',
      doctorName: 'Dr. Michael Chen',
      specialty: 'Dermatologist',
      time: '2:00 PM',
      date: '2023-08-16',
      reason: 'Skin rash evaluation'
    }
  ];

  // Mock data for recent medical records
  const recentRecords = [
    {
      id: 'rec1',
      date: '2023-08-10',
      doctorName: 'Dr. Sarah Johnson',
      diagnosis: 'Hypertension',
      prescription: 'Lisinopril 10mg daily'
    },
    {
      id: 'rec2',
      date: '2023-08-05',
      doctorName: 'Dr. Emily Patel',
      diagnosis: 'Routine checkup',
      prescription: 'Multivitamin daily'
    }
  ];

  // Mock data for recent activity
  const recentActivity = [
    {
      id: 'act1',
      date: '2023-08-12',
      description: 'Scheduled appointment with Dr. Sarah Johnson'
    },
    {
      id: 'act2',
      date: '2023-08-11',
      description: 'Uploaded blood test results'
    }
  ];

  return (
    <div className="container px-4 py-6 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-clinic-secondary">Welcome, {user?.full_name}</h1>
        <p className="text-gray-600">Here's your health overview</p>
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
              Next appointment on {upcomingAppointments[0]?.date}
            </p>
          </CardContent>
        </Card>
        
        <Card className="dashboard-stats-card">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Medical Records
            </CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{recentRecords.length}</div>
            <p className="text-xs text-muted-foreground">
              Last updated on {recentRecords[0]?.date}
            </p>
          </CardContent>
        </Card>
        
        <Card className="dashboard-stats-card">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Recent Activity
            </CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{recentActivity.length}</div>
            <p className="text-xs text-muted-foreground">
              Latest activity on {recentActivity[0]?.date}
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Main content area */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left column - Upcoming Appointments */}
        <div className="space-y-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Upcoming Appointments</CardTitle>
                <CardDescription>Your next scheduled visits</CardDescription>
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
                      <Avatar className="h-10 w-10 mr-4">
                        <AvatarImage src="/placeholder.svg" alt={appointment.doctorName} />
                        <AvatarFallback>{appointment.doctorName.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h4 className="font-semibold text-clinic-secondary">{appointment.doctorName}</h4>
                        <p className="text-sm text-gray-500">{appointment.specialty}</p>
                        <div className="flex mt-2 text-sm text-gray-600">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>{appointment.date} • {appointment.time}</span>
                        </div>
                        <p className="mt-2 text-sm text-gray-700">{appointment.reason}</p>
                        <div className="mt-3 flex space-x-2">
                          <Button size="sm" variant="outline" className="gap-1">
                            <MessageSquare className="h-3 w-3" />
                            Message
                          </Button>
                          <Button size="sm">
                            Reschedule
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-6">
                  <p className="text-gray-500">No upcoming appointments scheduled</p>
                </div>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Recent Medical Records</CardTitle>
                <CardDescription>Your latest health records</CardDescription>
              </div>
              <Link to="/records">
                <Button variant="outline" size="sm" className="gap-1">
                  View All
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </Link>
            </CardHeader>
            <CardContent>
              {recentRecords.length > 0 ? (
                <div className="space-y-4">
                  {recentRecords.map((record) => (
                    <div key={record.id} className="p-3 rounded-lg border border-gray-100 bg-white shadow-sm">
                      <h4 className="font-semibold text-clinic-secondary">{record.doctorName}</h4>
                      <p className="text-sm text-gray-500">
                        {record.date} • {record.diagnosis}
                      </p>
                      <p className="mt-2 text-sm text-gray-700">
                        Prescription: {record.prescription}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-6">
                  <p className="text-gray-500">No recent medical records found</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
        
        {/* Right column - Recent Activity */}
        <div className="space-y-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Your latest interactions</CardDescription>
              </div>
              <Link to="/activity">
                <Button variant="outline" size="sm" className="gap-1">
                  View All
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </Link>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-center border-b border-gray-100 pb-3 last:border-0">
                    <Activity className="h-4 w-4 mr-3 text-gray-500" />
                    <div>
                      <h4 className="font-medium text-clinic-secondary">{activity.description}</h4>
                      <p className="text-xs text-gray-500">{activity.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Health Tips</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="text-sm">
                  Stay hydrated by drinking at least 8 glasses of water a day.
                </p>
                <p className="text-sm">
                  Get regular exercise, even if it's just a 30-minute walk.
                </p>
                <p className="text-sm">
                  Eat a balanced diet with plenty of fruits and vegetables.
                </p>
              </div>
              <Button variant="outline" className="w-full mt-4">
                Read More
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PatientDashboard;
