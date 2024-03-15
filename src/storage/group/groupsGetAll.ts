import AsyncStorage from '@react-native-async-storage/async-storage';

import { groupCollection } from '..';

export async function groupsGetAll() {
  try {
    const storage = await AsyncStorage.getItem(groupCollection);

    const groups: string[] = storage ? JSON.parse(storage) : [];

    return groups;
  } catch (error) {
    throw error;
  }
}
