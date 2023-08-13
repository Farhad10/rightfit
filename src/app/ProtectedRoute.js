// ProtectedRoute.js
"use client"
import { useRouter } from 'next/navigation';
import { useAuth } from './AuthContext';

const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useAuth();
  const router = useRouter();

  if (!isLoggedIn) {
    // Redirect to the login page if not logged in
    router.push('/login');
    return null;
  }
return children;
  
};

export default ProtectedRoute;
