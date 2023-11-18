
import { StyleSheet, Text, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { AppStackParamList, ROUTE } from '../../config/route';
import { Page } from '../../components/page/Page';

type RouteName = "/home"
type HomeProps = NativeStackScreenProps<AppStackParamList, RouteName>

export default function Home({navigation}: HomeProps) {
  return (
    <Page>
      <Text>Open up App.tsx to start working on your app!</Text>
    </Page>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
