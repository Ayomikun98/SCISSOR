import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../contexts/UserContext/UserContext';

const ProtectedRoute: React.FC = () => {
  const { user, setUser } = useAuth();
  
  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
