import { useState } from 'react';
import { Alert, FlatList } from 'react-native';
import { useRoute } from '@react-navigation/native';

import { AppError } from '@/utils/AppError';
import { playerAddByGroup } from '@/storage/player/playerAddByGroup';
import { playersGetByGroup } from '@/storage/player/playersGetByGroup';

import { Button } from '@/components/Button';
import { ButtonIcon } from '@/components/ButtonIcon';
import { Filter } from '@/components/Filter';
import { Header } from '@/components/Header';
import { Highlight } from '@/components/Highlight';
import { Input } from '@/components/Input';
import { ListEmpty } from '@/components/ListEmpty';
import { PlayCard } from '@/components/PlayCard';

import { Container, Form, HeaderList, NumbersOfPlayers } from './styles';

type RouteParams = {
  group: string;
};

export function Players() {
  const route = useRoute();
  const { group } = route.params as RouteParams;

  const [team, setTeam] = useState('Time A');
  const [players, setPlayers] = useState<string[]>([]);
  const [newPlayerName, setNewPlayerName] = useState('');

  async function handleAddPlayer() {
    if (newPlayerName.trim().length === 0) {
      return Alert.alert(
        'Nova pessoa',
        'Informe o nome da pessoa para adicionar.'
      );
    }

    const newPlayer = {
      name: newPlayerName,
      team,
    };

    try {
      await playerAddByGroup(newPlayer, group);
      const players = await playersGetByGroup(group);

      console.log('players', players);
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Nova pessoa', error.message);
      } else {
        Alert.alert('Nova pessoa', 'Não foi possível adicionar.');
      }
    }
  }

  return (
    <Container>
      <Header showBackButton />

      <Highlight title={group} subtitle="Adicione a galera e separe os times" />

      <Form>
        <Input
          placeholder="Nome da pessoa"
          onChangeText={setNewPlayerName}
          autoCorrect={false}
        />
        <ButtonIcon icon="add" onPress={handleAddPlayer} />
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
        renderItem={({ item }) => (
          <PlayCard
            name={item}
            onRemove={() => setPlayers(players.filter((play) => play !== item))}
          />
        )}
        ListEmptyComponent={() => (
          <ListEmpty message="Não há pessoas nesse time." />
        )}
        contentContainerStyle={[
          { paddingBottom: 48 },
          players.length === 0 && { flex: 1 },
        ]}
        showsVerticalScrollIndicator={false}
      />

      <Button title="Remover turma" type="secondary" />
    </Container>
  );
}
