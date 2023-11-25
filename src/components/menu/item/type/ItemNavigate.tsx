import { useCallback } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation, NavigationProp } from "@react-navigation/native";

import { AppStackParamList } from "@/config/route";

import { Container, Title } from '../item.styles';

export type MenuItemNavigateProps<T extends keyof AppStackParamList> = {
  label: string;
  icon: keyof typeof Ionicons.glyphMap;

  to: T;
  params: AppStackParamList[T]
} 
  

export function MenuItemNavigate<T extends keyof AppStackParamList = keyof AppStackParamList>({ icon, label, to, params }: MenuItemNavigateProps<T>) {
  const navigate = useNavigation<NavigationProp<AppStackParamList>>();

  const redirect = useCallback(() => {
    navigate.navigate(to as any, params as any)
  }, [navigate, to, params])

  return (
    <Container onPress={redirect}>
      <Ionicons name={icon} size={32} color="white" />
      <Title>{label}</Title>
    </Container>
  )
}

