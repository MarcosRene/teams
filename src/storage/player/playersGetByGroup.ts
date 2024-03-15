import AsyncStorage from '@react-native-async-storage/async-storage';

import { AppError } from '@/utils/AppError';
import { playerCollection } from '..';

import { PlayerStorageDTO } from './PlayerStorageDTO';

export async function playersGetByGroup(group: string) {
  try {
    const storage = await AsyncStorage.getItem(`${playerCollection}-${group}`);

    const players: PlayerStorageDTO[] = storage ? JSON.parse(storage) : [];

    return players;
  } catch (error) {
    throw error;
  }
}
