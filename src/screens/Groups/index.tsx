import { useCallback, useState } from 'react';
import { Alert, FlatList } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

import { groupsGetAll } from '@/storage/group/groupsGetAll';

import { Button } from '@/components/Button';
import { Header } from '@/components/Header';
import { Highlight } from '@/components/Highlight';
import { GroupCard } from '@/components/GroupCard';
import { ListEmpty } from '@/components/ListEmpty';
import { Loading } from '@/components/Loading';

import { Container } from './styles';

export function Groups() {
  const navigation = useNavigation();

  const [groups, setGroups] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  function handleNewGroup() {
    navigation.navigate('new');
  }

  function handleOpenGroup(group: string) {
    navigation.navigate('players', { group });
  }

  useFocusEffect(
    useCallback(() => {
      async function fetchGroups() {
        try {
          setIsLoading(true);
          const data = await groupsGetAll();
          setGroups(data);
        } catch (error) {
          Alert.alert('Turmas', 'Não foi possível carregar as turmas.');
        } finally {
          setIsLoading(false);
        }
      }

      fetchGroups();
    }, [])
  );

  return (
    <Container>
      <Header />

      <Highlight title="Turmas" subtitle="Jogue com a sua turma" />

      {isLoading ? (
        <Loading />
      ) : (
        <FlatList
          data={groups}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <GroupCard title={item} onPress={() => handleOpenGroup(item)} />
          )}
          contentContainerStyle={groups.length === 0 && { flex: 1 }}
          ListEmptyComponent={() => (
            <ListEmpty message="Que tal cadastrar a primeira turma?" />
          )}
        />
      )}

      <Button title="Criar nova turma" onPress={handleNewGroup} />
    </Container>
  );
}
