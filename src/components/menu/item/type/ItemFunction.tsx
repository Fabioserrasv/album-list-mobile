import Ionicons from '@expo/vector-icons/Ionicons';
import { Container, Title } from '../item.styles';

export type MenuItemFunctionProps = {
  label: string;
  icon: keyof typeof Ionicons.glyphMap;
  onClick(): void | Promise<void>;
} 

export function MenuItemFunction({ icon, label, onClick }:MenuItemFunctionProps ) {
  return (
    <Container onPress={onClick}>
      <Ionicons name={icon} size={32} color="white" />
      <Title>{label}</Title>
    </Container>
  )
}

