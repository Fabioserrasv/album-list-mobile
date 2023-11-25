import { Flex } from '@/layout/layout';
import { Button as TouchableOpacity, Text } from './button.styles';

type ButtonProps = {
  children: string;
  onClick(): void;
} & Flex;

export function Button({ children, onClick, flex }: ButtonProps) {
  return (
    <TouchableOpacity onPress={onClick} flex={flex}>
      <Text>{children}</Text>
    </TouchableOpacity>
  )
}

