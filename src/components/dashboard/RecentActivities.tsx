
import { Activity, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface ActivityItem {
  id: string;
  user: string;
  action: string;
  target: string;
  time: string;
}

interface RecentActivitiesProps {
  activities: ActivityItem[];
}

const RecentActivities = ({ activities }: RecentActivitiesProps) => {
  return (
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
        {activities.length > 0 ? (
          <div className="space-y-4">
            {activities.map((activity) => (
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
  );
};

export default RecentActivities;
