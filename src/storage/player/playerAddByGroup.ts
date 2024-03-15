import AsyncStorage from '@react-native-async-storage/async-storage';

import { AppError } from '@/utils/AppError';
import { playerCollection } from '..';
import { playersGetByGroup } from './playersGetByGroup';
import { PlayerStorageDTO } from './PlayerStorageDTO';

export async function playerAddByGroup(
  newPlayer: PlayerStorageDTO,
  group: string
) {
  try {
    const storedPlayers = await playersGetByGroup(group);

    const playerAlreadyExists = storedPlayers.filter(
      (player) => player.name === newPlayer.name
    );

    if (playerAlreadyExists.length > 0) {
      throw new AppError('Essa pessoa já está adicionada no time aqui.');
    }

    const storage = JSON.stringify([...storedPlayers, newPlayer]);

    await AsyncStorage.setItem(`${playerCollection}-${group}`, storage);
  } catch (error) {
    throw error;
  }
}
