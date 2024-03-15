import AsyncStorage from '@react-native-async-storage/async-storage';

import { AppError } from '@/utils/AppError';

import { groupsGetAll } from './groupsGetAll';
import { groupCollection } from '..';

export async function groupCreate(newGroup: string) {
  try {
    const storedGroups = await groupsGetAll();

    const groupAlreadyExists = storedGroups.includes(newGroup);

    if (groupAlreadyExists) {
      throw new AppError('Já existe um grupo cadastrado com esse nome.');
    }

    await AsyncStorage.setItem(
      groupCollection,
      JSON.stringify([...storedGroups, newGroup])
    );
  } catch (error) {
    throw error;
  }
}
