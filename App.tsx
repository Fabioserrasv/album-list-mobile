import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Routes } from './src/components/routes/Routes';
import { AuthProvider } from './src/contexts/auth-context';

export default function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
