import { StatusBar } from 'expo-status-bar';
import { Container, Title } from './page.styles';
import { ReactNode } from 'react';

type PageProps = {
  children: ReactNode
}

export function Page({ children }: PageProps) {
  return (
    <Container>
      <StatusBar style="dark" />
      <Title>oi</Title>
      {children}
    </Container >
  )
}

