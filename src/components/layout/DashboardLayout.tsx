
import { Outlet } from 'react-router-dom';
import DashboardSidebar from './DashboardSidebar';
import { useIsMobile } from '@/hooks/use-mobile';

const DashboardLayout = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardSidebar />
      <main 
        className="transition-all duration-300"
        style={{ 
          marginLeft: isMobile ? '1rem' : '16rem',
          marginRight: '1rem', 
          paddingTop: '1rem',
          paddingBottom: '2rem'
        }}
      >
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
