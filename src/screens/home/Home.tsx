
import { Text } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { AppStackParamList, ROUTE } from "@/config/route";
import { Page } from '@/components/page/Page';

type RouteName = typeof ROUTE.APP.HOME;
type HomeProps = NativeStackScreenProps<AppStackParamList, RouteName>

export default function Home({ navigation }: HomeProps) {
  return (
    <Page>
      <Text>Home</Text>
    </Page>
  )
}
