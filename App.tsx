import { Routes } from './src/routes';
import { AuthProvider } from './src/contexts/auth-context';
import { ThemeProvider } from "styled-components"

export default function App() {
  return (
    <ThemeProvider theme={{}}>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  );
}
