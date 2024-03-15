import { useState } from 'react';
import { FlatList } from 'react-native';
import { useRoute } from '@react-navigation/native';

import { Filter } from '@/components/Filter';
import { ButtonIcon } from '@/components/ButtonIcon';
import { Header } from '@/components/Header';
import { Highlight } from '@/components/Highlight';
import { Input } from '@/components/Input';
import { ListEmpty } from '@/components/ListEmpty';
import { PlayCard } from '@/components/PlayCard';

import { Container, Form, HeaderList, NumbersOfPlayers } from './styles';
import { Button } from '@/components/Button';

type RouteParams = {
  group: string
}

export function Players() {
  const route = useRoute()
  const { group } = route.params as RouteParams

  const [team, setTeam] = useState('Time A');
  const [players, setPlayers] = useState<string[]>(['Marcos', 'Renê', 'Cavalcante', 'Moura', 'Fátima', 'Helena', 'Fernanda', 'Loyse']);

  return (
    <Container>
      <Header showBackButton />

      <Highlight
        title={group}
        subtitle="Adicione a galera e separe os times"
      />

      <Form>
        <Input placeholder="Nome da pessoa" autoCorrect={false} />
        <ButtonIcon icon="add" />
      </Form>

      <HeaderList>
        <FlatList
          data={['Time A', 'Time B']}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={item === team}
              onPress={() => setTeam(item)}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
        />

        <NumbersOfPlayers>{players.length}</NumbersOfPlayers>
      </HeaderList>

      <FlatList
        data={players}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <PlayCard name={item} onRemove={() => setPlayers(players.filter(play => play !== item))}/>}
        ListEmptyComponent={() => (
          <ListEmpty message="Não há pessoas nesse time." />
        )}
        contentContainerStyle={[{ paddingBottom: 48 }, players.length === 0 && { flex: 1 }]}
        showsVerticalScrollIndicator={false}
      />

      <Button title='Remover turma' type="secondary" />
    </Container>
  );
}
