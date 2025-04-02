
import { Navigate, useLocation } from 'react-router-dom';
import LoginForm from '@/components/auth/LoginForm';
import RegisterForm from '@/components/auth/RegisterForm';
import { useAuth } from '@/contexts/AuthContext';
import AppHeader from '@/components/layout/AppHeader';
import AppFooter from '@/components/layout/AppFooter';

const AuthPage = () => {
  const location = useLocation();
  const { user, isLoading } = useAuth();
  
  const isLoginPage = location.pathname === '/login';
  
  // If user is already authenticated, redirect to dashboard
  if (user && !isLoading) {
    return <Navigate to="/dashboard" replace />;
  }
  
  return (
    <div className="flex flex-col min-h-screen">
      <AppHeader />
      
      <main className="flex-1 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-clinic-secondary mb-2">
              {isLoginPage ? 'Welcome Back' : 'Join Smart Clinic'}
            </h1>
            <p className="text-gray-600">
              {isLoginPage 
                ? 'Sign in to your account to access your health dashboard' 
                : 'Create an account to start managing your healthcare journey'}
            </p>
          </div>
          
          {isLoginPage ? <LoginForm /> : <RegisterForm />}
        </div>
      </main>
      
      <AppFooter />
    </div>
  );
};

export default AuthPage;
