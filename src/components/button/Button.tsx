import { Button as TouchableOpacity, Text } from './button.styles';

type ButtonProps = {
  children: string;
  onClick(): void;
}

export function Button({ children, onClick }: ButtonProps) {
  return (
    <TouchableOpacity onPress={onClick}>
      <Text>{children}</Text>
    </TouchableOpacity>
  )
}

