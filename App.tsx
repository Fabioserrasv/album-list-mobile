import { Routes } from './src/routes';
import { AuthProvider } from './src/contexts/auth-context';

export default function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}
