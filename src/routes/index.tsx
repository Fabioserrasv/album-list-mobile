import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useAuth } from "@/hooks/contexts/useAuth"

import { ROUTE, AppStackParamList } from "@/config/route"

import Home from '@/screens/home/Home';
import Login from '@/screens/login/Login';

const Stack = createNativeStackNavigator<AppStackParamList>();

const OPTIONS_DEFAULT = {
  header: () => <></>
}

export function Routes() {
  const { authed } = useAuth();
  const initialRoute = authed ? ROUTE.APP.HOME : ROUTE.APP.LOGIN;

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={initialRoute}>
        {authed ? (
          <Stack.Group>
            <Stack.Screen name={ROUTE.APP.HOME} component={Home} options={OPTIONS_DEFAULT} />
          </Stack.Group>
        ) : (
          <Stack.Group>
            <Stack.Screen name={ROUTE.APP.LOGIN} component={Login} options={OPTIONS_DEFAULT} />
          </Stack.Group>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}