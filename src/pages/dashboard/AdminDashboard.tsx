import { 
  Calendar, 
  Users, 
  Activity, 
  MessageSquare, 
  Clock, 
  ChevronRight,
  CheckCircle,
  XCircle,
  Settings  // Add this import
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '@/contexts/AuthContext';
import { Link } from 'react-router-dom';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const AdminDashboard = () => {
  const { user } = useAuth();

  // Mock data for user statistics
  const userStats = {
    totalUsers: 50,
    activeUsers: 45,
    pendingUsers: 5,
  };

  // Mock data for recent activities
  const recentActivities = [
    {
      id: 'act1',
      user: 'John Doe',
      action: 'created a new medical record for',
      target: 'Patient Smith',
      time: '5 minutes ago',
    },
    {
      id: 'act2',
      user: 'Jane Smith',
      action: 'updated appointment for',
      target: 'Patient Wilson',
      time: '12 minutes ago',
    },
    {
      id: 'act3',
      user: 'Admin User',
      action: 'added a new doctor',
      target: 'Dr. Emily White',
      time: '30 minutes ago',
    },
  ];

  // Mock data for pending actions
  const pendingActions = [
    {
      id: 'pend1',
      description: 'Approve new doctor registration: Dr. Robert',
    },
    {
      id: 'pend2',
      description: 'Review patient medical record update request',
    },
  ];

  return (
    <div className="container px-4 py-6 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-clinic-secondary">Welcome, {user?.full_name}</h1>
        <p className="text-gray-600">Here's your administration overview</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="dashboard-stats-card">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Users
            </CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{userStats.totalUsers}</div>
            <p className="text-xs text-muted-foreground">
              {userStats.activeUsers} active, {userStats.pendingUsers} pending
            </p>
          </CardContent>
        </Card>

        <Card className="dashboard-stats-card">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              New Registrations
            </CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">
              Last 7 days
            </p>
          </CardContent>
        </Card>

        <Card className="dashboard-stats-card">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              System Health
            </CardTitle>
            <Settings className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-500">Online</div>
            <p className="text-xs text-muted-foreground">
              All systems operational
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Main content area */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left column - Recent Activities */}
        <div className="space-y-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Recent Activities</CardTitle>
                <CardDescription>Latest user actions</CardDescription>
              </div>
              <Link to="/activities">
                <Button variant="outline" size="sm" className="gap-1">
                  View All
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </Link>
            </CardHeader>
            <CardContent>
              {recentActivities.length > 0 ? (
                <div className="space-y-4">
                  {recentActivities.map((activity) => (
                    <div key={activity.id} className="flex items-start p-3 rounded-lg border border-gray-100 bg-white shadow-sm">
                      <Activity className="h-5 w-5 mr-4 text-gray-500" />
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-semibold text-clinic-secondary">{activity.user}</h4>
                            <p className="text-sm text-gray-500">
                              {activity.action} <span className="font-medium">{activity.target}</span>
                            </p>
                          </div>
                          <div className="text-xs text-gray-500">{activity.time}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-6">
                  <p className="text-gray-500">No recent activities</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Right column - Pending Actions */}
        <div className="space-y-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Pending Actions</CardTitle>
                <CardDescription>Tasks awaiting your approval</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              {pendingActions.length > 0 ? (
                <div className="space-y-4">
                  {pendingActions.map((action) => (
                    <div key={action.id} className="flex items-center p-3 rounded-lg border border-gray-100 bg-white shadow-sm">
                      <Clock className="h-5 w-5 mr-4 text-gray-500" />
                      <div className="flex-1">
                        <p className="text-sm text-gray-600">{action.description}</p>
                      </div>
                      <Button variant="outline" size="sm">
                        Review
                      </Button>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-6">
                  <p className="text-gray-500">No pending actions</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
