import AsyncStorage from '@react-native-async-storage/async-storage';

import { groupsGetAll } from './groupsGetAll';
import { groupCollection, playerCollection } from '..';

export async function groupRemoveByName(groupDeleted: string) {
  try {
    const storedGroups = await groupsGetAll();
    const groups = storedGroups.filter((group) => group !== groupDeleted);

    await AsyncStorage.setItem(groupCollection, JSON.stringify(groups));
    await AsyncStorage.removeItem(`${playerCollection}-${groupDeleted}`);
  } catch (error) {}
}
