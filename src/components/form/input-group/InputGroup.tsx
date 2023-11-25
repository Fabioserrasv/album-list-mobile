
import { Flex } from '@/layout/layout';
import { Container, Label, Error } from './input-group.styles';
import { ReactNode } from 'react';

type InputGroupProps = {
  label: string;
  children: ReactNode;
  error?: string;
} & Flex;

export function InputGroup({ label, children, error, flex }: InputGroupProps) {
  return (
    <Container flex={flex}>
      <Label>{label}</Label>
      {children}
      {error && <Error>{error}</Error>}
    </Container>
  )
}

