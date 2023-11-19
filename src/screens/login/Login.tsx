
import { Text, Button } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { AppStackParamList, ROUTE } from '@/config/route';

import { Page } from '@/components/page/Page';
import { useAuth } from '@/hooks/contexts/useAuth';

type RouteName = typeof ROUTE.APP.LOGIN;
type LoginProps = NativeStackScreenProps<AppStackParamList, RouteName>

export default function Login({ }: LoginProps) {
  const { login } = useAuth();

  return (
    <Page>
      <Text>Login</Text>
      <Button onPress={() => login("", "")} title='Logar' />
    </Page>
  );
}
