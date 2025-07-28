import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { UserPlus, Briefcase, LogOut } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  const handleLogout = () => {
    // For now, just navigate to a blank page
    navigate('/logout');
  };

  const getButtonVariant = (path: string) => {
    return location.pathname === path ? 'default' : 'outline';
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Left Sidebar */}
      <div className="w-64 bg-card border-r border-border p-6 space-y-4">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-primary mb-2">Skill Bridge</h1>
          <p className="text-sm text-muted-foreground">Professional Job Matching Platform</p>
        </div>
        
        <div className="space-y-3">
          <Button
            variant={getButtonVariant('/qualifications')}
            className="w-full justify-start"
            onClick={() => handleNavigation('/qualifications')}
          >
            <UserPlus className="mr-2 h-4 w-4" />
            Add Qualifications
          </Button>
          
          <Button
            variant={getButtonVariant('/post-job')}
            className="w-full justify-start"
            onClick={() => handleNavigation('/post-job')}
          >
            <Briefcase className="mr-2 h-4 w-4" />
            Post Job Vacancies
          </Button>
          
          <Button
            variant="outline"
            className="w-full justify-start text-destructive hover:text-destructive"
            onClick={handleLogout}
          >
            <LogOut className="mr-2 h-4 w-4" />
            Log Out
          </Button>
        </div>
      </div>

      {/* Right Content Area */}
      <div className="flex-1">
        {children}
      </div>
    </div>
  );
};

export default Layout;