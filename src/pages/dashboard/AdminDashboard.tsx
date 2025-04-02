
import { Users, Activity, Settings } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import DashboardStatCard from '@/components/dashboard/DashboardStatCard';
import RecentActivities from '@/components/dashboard/RecentActivities';
import PendingActions from '@/components/dashboard/PendingActions';

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
        <DashboardStatCard
          title="Total Users"
          value={userStats.totalUsers}
          description={`${userStats.activeUsers} active, ${userStats.pendingUsers} pending`}
          icon={Users}
        />

        <DashboardStatCard
          title="New Registrations"
          value={12}
          description="Last 7 days"
          icon={Activity}
        />

        <DashboardStatCard
          title="System Health"
          value="Online"
          description="All systems operational"
          icon={Settings}
          valueColor="text-green-500"
        />
      </div>

      {/* Main content area */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left column - Recent Activities */}
        <div className="space-y-6">
          <RecentActivities activities={recentActivities} />
        </div>

        {/* Right column - Pending Actions */}
        <div className="space-y-6">
          <PendingActions actions={pendingActions} />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
