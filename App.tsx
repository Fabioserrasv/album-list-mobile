import { Routes } from './src/routes';
import { AuthProvider } from './src/contexts/auth-context';
import { ThemeProvider } from "styled-components"
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient()

export default function App() {
  return (
    <ThemeProvider theme={{}}>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}
