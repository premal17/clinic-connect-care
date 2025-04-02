
import { Clock } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface ActionItem {
  id: string;
  description: string;
}

interface PendingActionsProps {
  actions: ActionItem[];
}

const PendingActions = ({ actions }: PendingActionsProps) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Pending Actions</CardTitle>
          <CardDescription>Tasks awaiting your approval</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        {actions.length > 0 ? (
          <div className="space-y-4">
            {actions.map((action) => (
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
  );
};

export default PendingActions;
