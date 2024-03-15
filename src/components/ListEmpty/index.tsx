import { Container, Message } from './styles';

type ListEmptyProps = {
  message: string;
}

export function ListEmpry({ message }: ListEmptyProps) {
  return (
    <Container>
      <Message>{message}</Message>
    </Container>
  );
}
