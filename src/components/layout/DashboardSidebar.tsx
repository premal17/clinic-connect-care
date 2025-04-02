import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Calendar, 
  User, 
  MessageSquare, 
  FileText, 
  CreditCard, 
  Settings, 
  Users, 
  Home, 
  ChevronLeft, 
  ChevronRight, 
  Activity,
  Stethoscope
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { Separator } from '@/components/ui/separator';
import { useIsMobile } from '@/hooks/use-mobile';

const DashboardSidebar = () => {
  const { user } = useAuth();
  const location = useLocation();
  const isMobile = useIsMobile();
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    if (isMobile) {
      setCollapsed(true);
    }
  }, [isMobile]);

  if (!user) return null;

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const patientLinks = [
    { name: 'Dashboard', href: '/dashboard', icon: Home },
    { name: 'Appointments', href: '/appointments', icon: Calendar },
    { name: 'Medical Records', href: '/records', icon: FileText },
    { name: 'Messages', href: '/messages', icon: MessageSquare },
    { name: 'Payments', href: '/payments', icon: CreditCard },
    { name: 'Profile', href: '/profile', icon: User },
  ];
  
  const doctorLinks = [
    { name: 'Dashboard', href: '/dashboard', icon: Home },
    { name: 'Appointments', href: '/appointments', icon: Calendar },
    { name: 'Patients', href: '/patients', icon: Users },
    { name: 'Medical Records', href: '/records', icon: FileText },
    { name: 'Messages', href: '/messages', icon: MessageSquare },
    { name: 'Profile', href: '/profile', icon: User },
  ];

  const adminLinks = [
    { name: 'Dashboard', href: '/dashboard', icon: Home },
    { name: 'Users', href: '/users', icon: Users },
    { name: 'Doctors', href: '/doctors-management', icon: Stethoscope },
    { name: 'Appointments', href: '/appointments-management', icon: Calendar },
    { name: 'Analytics', href: '/analytics', icon: Activity },
    { name: 'Settings', href: '/settings', icon: Settings },
  ];

  const links = user.role === 'patient' 
    ? patientLinks 
    : user.role === 'doctor' 
      ? doctorLinks 
      : adminLinks;

  return (
    <aside 
      className={cn(
        "sidebar bg-white border-r border-gray-200 h-screen fixed top-0 left-0 z-20 transition-all duration-300 overflow-hidden",
        collapsed ? "w-16" : "w-64"
      )}
    >
      <div className="h-full flex flex-col">
        {/* Logo and collapse button */}
        <div className={cn(
          "flex items-center h-16 px-4 border-b border-gray-200",
          collapsed ? "justify-center" : "justify-between"
        )}>
          {!collapsed && (
            <Link to="/" className="flex items-center">
              <div className="w-8 h-8 rounded-md bg-clinic-primary flex items-center justify-center">
                <span className="text-white font-bold">SC</span>
              </div>
              <span className="ml-2 text-lg font-semibold text-clinic-secondary">Smart Clinic</span>
            </Link>
          )}
          {collapsed && (
            <div className="w-8 h-8 rounded-md bg-clinic-primary flex items-center justify-center">
              <span className="text-white font-bold">SC</span>
            </div>
          )}
          {!isMobile && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setCollapsed(!collapsed)}
              className="ml-auto"
            >
              {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
            </Button>
          )}
        </div>

        {/* User info */}
        <div className={cn(
          "px-4 py-4 border-b border-gray-200",
          collapsed ? "text-center" : ""
        )}>
          <div className={cn("flex", collapsed ? "justify-center" : "items-center space-x-3")}>
            <div className="w-10 h-10 rounded-full bg-clinic-secondary flex items-center justify-center">
              <span className="text-white font-semibold">{user.full_name?.charAt(0)}</span>
            </div>
            {!collapsed && (
              <div>
                <p className="font-medium">{user.full_name}</p>
                <p className="text-xs text-gray-500 capitalize">{user.role}</p>
              </div>
            )}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex-1 overflow-y-auto py-4">
          <nav className="space-y-1 px-2">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "group flex items-center px-2 py-2 text-sm font-medium rounded-md",
                  isActive(link.href)
                    ? "bg-clinic-primary text-white"
                    : "text-gray-700 hover:bg-gray-100",
                  collapsed ? "justify-center" : ""
                )}
              >
                <link.icon className={cn(
                  "flex-shrink-0 h-5 w-5",
                  isActive(link.href) 
                    ? "text-white" 
                    : "text-gray-500 group-hover:text-clinic-primary"
                )} 
                />
                {!collapsed && <span className="ml-3">{link.name}</span>}
              </Link>
            ))}
          </nav>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-200">
          <div className={collapsed ? "text-center" : ""}>
            <Button 
              variant="outline" 
              size={collapsed ? "icon" : "default"}
              className="w-full"
            >
              <Settings className="h-5 w-5" />
              {!collapsed && <span className="ml-2">Settings</span>}
            </Button>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default DashboardSidebar;
