
import { 
  Users, 
  UserCheck, 
  Calendar, 
  Activity, 
  AlertTriangle, 
  DollarSign, 
  ChevronRight,
  FileText
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { Link } from 'react-router-dom';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

const AdminDashboard = () => {
  const { user } = useAuth();

  // Mock data for system overview
  const systemStats = {
    totalUsers: 342,
    totalDoctors: 28,
    totalPatients: 314,
    pendingApprovals: 5,
    activeAppointments: 67,
    systemUptime: '99.9%'
  };

  // Mock data for recent activities
  const recentActivities = [
    {
      id: 'act1',
      type: 'user_registered',
      user: 'John Smith',
      role: 'patient',
      time: '10:30 AM',
      date: 'Today'
    },
    {
      id: 'act2',
      type: 'appointment_booked',
      user: 'Sarah Johnson',
      doctor: 'Dr. Michael Chen',
      time: '9:45 AM',
      date: 'Today'
    },
    {
      id: 'act3',
      type: 'payment_received',
      user: 'Robert Wilson',
      amount: '$150.00',
      time: '2:15 PM',
      date: 'Yesterday'
    },
    {
      id: 'act4',
      type: 'doctor_registered',
      user: 'Dr. Emily Davis',
      specialty: 'Dermatologist',
      time: '11:20 AM',
      date: 'Yesterday'
    },
    {
      id: 'act5',
      type: 'record_updated',
      user: 'Dr. Sarah Johnson',
      patient: 'Michael Brown',
      time: '4:30 PM',
      date: 'Yesterday'
    }
  ];

  // Mock data for pending approvals
  const pendingApprovals = [
    {
      id: 'pend1',
      name: 'Dr. James Wilson',
      role: 'doctor',
      specialty: 'Neurologist',
      date: '2023-08-10'
    },
    {
      id: 'pend2',
      name: 'Dr. Maria Garcia',
      role: 'doctor',
      specialty: 'Pediatrician',
      date: '2023-08-09'
    },
    {
      id: 'pend3',
      name: 'Admin Hospital Access',
      role: 'system',
      type: 'API Integration',
      date: '2023-08-09'
    }
  ];

  return (
    <div className="container px-4 py-6 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-clinic-secondary">Admin Dashboard</h1>
        <p className="text-gray-600">Welcome back, {user?.name}</p>
      </div>

      {/* System Overview Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4 mb-8">
        <Card className="dashboard-stats-card">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Users
            </CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{systemStats.totalUsers}</div>
            <p className="text-xs text-muted-foreground">
              +12 this week
            </p>
          </CardContent>
        </Card>
        
        <Card className="dashboard-stats-card">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Doctors
            </CardTitle>
            <UserCheck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{systemStats.totalDoctors}</div>
            <p className="text-xs text-muted-foreground">
              Across 14 specialties
            </p>
          </CardContent>
        </Card>
        
        <Card className="dashboard-stats-card">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Patients
            </CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{systemStats.totalPatients}</div>
            <p className="text-xs text-muted-foreground">
              +10 this week
            </p>
          </CardContent>
        </Card>
        
        <Card className="dashboard-stats-card">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Appointments
            </CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{systemStats.activeAppointments}</div>
            <p className="text-xs text-muted-foreground">
              23 today
            </p>
          </CardContent>
        </Card>
        
        <Card className="dashboard-stats-card">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Pending Approvals
            </CardTitle>
            <AlertTriangle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{systemStats.pendingApprovals}</div>
            <p className="text-xs text-muted-foreground">
              Requires attention
            </p>
          </CardContent>
        </Card>
        
        <Card className="dashboard-stats-card">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              System Uptime
            </CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{systemStats.systemUptime}</div>
            <p className="text-xs text-muted-foreground">
              Last 30 days
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Main content area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left column - Recent Activity */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>System activity log</CardDescription>
              </div>
              <Link to="/activity-log">
                <Button variant="outline" size="sm" className="gap-1">
                  View All
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </Link>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivities.map((activity) => (
                  <div key={activity.id} className="flex items-start p-3 rounded-lg border border-gray-100 bg-white shadow-sm">
                    <ActivityIcon activity={activity} />
                    <div className="flex-1 ml-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-semibold text-clinic-secondary">
                            {getActivityTitle(activity)}
                          </h4>
                          <p className="text-sm text-gray-500">{getActivityDescription(activity)}</p>
                        </div>
                        <div className="text-xs text-gray-500">
                          {activity.time}, {activity.date}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>System Performance</CardTitle>
                <CardDescription>Current system metrics and status</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Server Load</span>
                    <span className="text-sm font-medium">42%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-clinic-primary h-2 rounded-full" style={{ width: '42%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Database Performance</span>
                    <span className="text-sm font-medium">85%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-clinic-primary h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">API Response Time</span>
                    <span className="text-sm font-medium">175ms</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-clinic-accent h-2 rounded-full" style={{ width: '20%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Storage Usage</span>
                    <span className="text-sm font-medium">63%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-clinic-primary h-2 rounded-full" style={{ width: '63%' }}></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Right column */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Pending Approvals</CardTitle>
            </CardHeader>
            <CardContent>
              {pendingApprovals.length > 0 ? (
                <div className="space-y-4">
                  {pendingApprovals.map((approval) => (
                    <div key={approval.id} className="flex items-start border-b border-gray-100 pb-3 last:border-0">
                      <Avatar className="h-9 w-9 mr-3">
                        <AvatarImage src="/placeholder.svg" alt={approval.name} />
                        <AvatarFallback>{approval.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <h4 className="font-medium text-clinic-secondary">{approval.name}</h4>
                          <Badge variant="outline" className="text-xs">
                            {approval.role}
                          </Badge>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">
                          {approval.role === 'doctor' ? `Specialty: ${approval.specialty}` : `Type: ${approval.type}`}
                        </p>
                        <p className="text-xs text-gray-500">
                          Requested: {approval.date}
                        </p>
                        <div className="mt-2 flex space-x-2">
                          <Button size="sm" variant="outline" className="text-xs py-0 h-7">
                            Reject
                          </Button>
                          <Button size="sm" className="text-xs py-0 h-7">
                            Approve
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-6">
                  <p className="text-gray-500">No pending approvals</p>
                </div>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button variant="outline" className="w-full justify-start">
                <Users className="mr-2 h-4 w-4" />
                Manage Users
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Calendar className="mr-2 h-4 w-4" />
                View All Appointments
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <FileText className="mr-2 h-4 w-4" />
                System Reports
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Activity className="mr-2 h-4 w-4" />
                System Settings
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Revenue Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b pb-2">
                  <span className="font-medium">Today</span>
                  <span className="font-bold text-clinic-secondary">$1,245.00</span>
                </div>
                <div className="flex justify-between items-center border-b pb-2">
                  <span className="font-medium">This Week</span>
                  <span className="font-bold text-clinic-secondary">$6,892.00</span>
                </div>
                <div className="flex justify-between items-center border-b pb-2">
                  <span className="font-medium">This Month</span>
                  <span className="font-bold text-clinic-secondary">$24,567.00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Last Month</span>
                  <span className="font-bold text-clinic-secondary">$22,345.00</span>
                </div>
              </div>
              <Link to="/financial-reports">
                <Button variant="outline" className="w-full mt-4 gap-1">
                  <DollarSign className="h-4 w-4" />
                  Financial Reports
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

// Helper components for the admin dashboard
const ActivityIcon = ({ activity }: { activity: any }) => {
  const iconMap = {
    user_registered: <Users className="h-5 w-5 text-clinic-primary" />,
    appointment_booked: <Calendar className="h-5 w-5 text-clinic-accent" />,
    payment_received: <DollarSign className="h-5 w-5 text-green-500" />,
    doctor_registered: <UserCheck className="h-5 w-5 text-clinic-primary" />,
    record_updated: <FileText className="h-5 w-5 text-orange-500" />
  };

  return (
    <div className="rounded-full bg-gray-100 p-2">
      {iconMap[activity.type as keyof typeof iconMap]}
    </div>
  );
};

const getActivityTitle = (activity: any): string => {
  switch (activity.type) {
    case 'user_registered':
      return `New ${activity.role} registered`;
    case 'appointment_booked':
      return 'Appointment Booked';
    case 'payment_received':
      return 'Payment Received';
    case 'doctor_registered':
      return 'New Doctor Registered';
    case 'record_updated':
      return 'Medical Record Updated';
    default:
      return 'Activity';
  }
};

const getActivityDescription = (activity: any): string => {
  switch (activity.type) {
    case 'user_registered':
      return `${activity.user} registered as a new ${activity.role}`;
    case 'appointment_booked':
      return `${activity.user} booked an appointment with ${activity.doctor}`;
    case 'payment_received':
      return `${activity.user} made a payment of ${activity.amount}`;
    case 'doctor_registered':
      return `${activity.user} registered as a ${activity.specialty}`;
    case 'record_updated':
      return `${activity.user} updated medical records for ${activity.patient}`;
    default:
      return 'System activity';
  }
};

export default AdminDashboard;
