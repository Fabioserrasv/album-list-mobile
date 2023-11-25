import { ReactNode } from 'react';

import { Container, Label, ErrorText } from './input-group.styles';

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
      {error && <ErrorText>{error}</ErrorText>}
    </Container>
  )
}

