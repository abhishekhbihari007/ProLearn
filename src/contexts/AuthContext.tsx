import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  email: string;
  isAuthenticated: boolean;
  enrolledCourses?: string[];
}

interface AuthContextType {
  user: User | null;
  signIn: (email: string, password: string) => Promise<boolean>;
  signOut: () => void;
  enrollInCourse: (courseTitle: string) => Promise<boolean>;
  isEnrolled: (courseTitle: string) => boolean;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in on app start
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      try {
        const userData = JSON.parse(savedUser);
        setUser(userData);
      } catch (error) {
        console.error('Error parsing saved user data:', error);
        localStorage.removeItem('user');
      }
    }
    setIsLoading(false);
  }, []);

  const signIn = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    
    try {
      // Simulate API call - replace with actual authentication logic
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // For demo purposes, accept any email/password combination
      // In a real app, you would validate against your backend
      if (email && password) {
        const userData: User = { email, isAuthenticated: true, enrolledCourses: [] };
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));
        setIsLoading(false);
        return true;
      }
      
      setIsLoading(false);
      return false;
    } catch (error) {
      console.error('Sign in error:', error);
      setIsLoading(false);
      return false;
    }
  };

  const signOut = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const enrollInCourse = async (courseTitle: string): Promise<boolean> => {
    if (!user) {
      return false;
    }

    try {
      // Instant enrollment - no delay
      const updatedUser = {
        ...user,
        enrolledCourses: [...(user.enrolledCourses || []), courseTitle]
      };
      
      setUser(updatedUser);
      localStorage.setItem('user', JSON.stringify(updatedUser));
      return true;
    } catch (error) {
      console.error('Enrollment error:', error);
      return false;
    }
  };

  const isEnrolled = (courseTitle: string): boolean => {
    return user?.enrolledCourses?.includes(courseTitle) || false;
  };

  const value: AuthContextType = {
    user,
    signIn,
    signOut,
    enrollInCourse,
    isEnrolled,
    isLoading,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
