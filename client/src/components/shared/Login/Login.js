import { useSelector } from 'react-redux';
import LoginForm from './LoginForm/LoginForm';

const Login = ({ children }) => {
  const user = useSelector((state) => state.auth.user);
  if (!user) {
    return <LoginForm />;
  }
  return children;
};

export default Login;
