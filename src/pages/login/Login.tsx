
import { StyleSheet, Text, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { AppStackParamList, ROUTE } from '../../config/route';
import { Page } from '../../components/page/Page';

type RouteName = "/login"
type LoginProps = NativeStackScreenProps<AppStackParamList, RouteName>

export default function Login({ navigation }: LoginProps) {
  return (
    <Page>
      <Text>Open up App.tsx to start working on your app!</Text>
    </Page>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
