import { useCallback } from 'react';
import { useNavigation, NavigationProp } from "@react-navigation/native";

import { AppStackParamList } from "@/config/route"

import { TouchableOpacity, Text } from './link.styles';

type LinkProps<T extends keyof AppStackParamList> = {
  children: string;
  to: T;
  params: AppStackParamList[T]
}

export function Link<T extends keyof AppStackParamList>({ children, to, params }: LinkProps<T>) {
  const navigate = useNavigation<NavigationProp<AppStackParamList>>();

  const redirect = useCallback(() => {
    navigate.navigate(to as any, params as any)
  }, [navigate, to, params])
  

  return (
    <TouchableOpacity onPress={redirect}>
      <Text>{children}</Text>
    </TouchableOpacity>
  )
}
