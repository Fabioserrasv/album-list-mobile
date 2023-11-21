
import { Container, Label, Error } from './input-group.styles';
import { ReactNode } from 'react';

type InputGroupProps = {
  label: string;
  children: ReactNode;
  error?: string;
}

export function InputGroup({ label, children, error }: InputGroupProps) {
  return (
    <Container>
      <Label>{label}</Label>
      {children}
      {error && <Error>{error}</Error>}
    </Container>
  )
}

