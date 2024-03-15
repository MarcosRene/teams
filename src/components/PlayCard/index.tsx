import { ButtonIcon } from '@components/ButtonIcon';
import { Container, Icon, Name } from './styles';

type PlayCardProps = {
  name: string;
  onRemove: () => void;
};

export function PlayCard({ name, onRemove }: PlayCardProps) {
  return (
    <Container>
      <Icon name="person" />
      <Name>{name}</Name>
      <ButtonIcon icon="close" type="secondary" onPress={onRemove} />
    </Container>
  );
}
