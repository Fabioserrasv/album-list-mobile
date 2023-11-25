
import { Text } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { AppStackParamList, ROUTE } from "@/config/route";
import { Link } from "@/components/link/Link";

import { Page } from '@/components/page/Page';


type RouteName = typeof ROUTE.APP.TEST;
type TestProps = NativeStackScreenProps<AppStackParamList, RouteName>


export default function Test({ navigation }: TestProps) {
  return (
    <Page>
      <Text>Test</Text>
    </Page>
  )
}
