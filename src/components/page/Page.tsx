import { StatusBar } from 'expo-status-bar';
import { Container, Title } from './page.styles';
import { ReactNode } from 'react';

type PageProps = {
  title?: string;
  children: ReactNode
}

export function Page({ children, title }: PageProps) {
  return (
    <Container>
      <StatusBar style='inverted' />
      {title && <Title>{title}</Title>}
      {children}
    </Container>
  )
}

