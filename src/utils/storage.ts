import AsyncStorage from '@react-native-async-storage/async-storage';
import {User} from '../models/User';

export enum StorageKeys {
  user = 'user',
  accessToken = 'access_token',
}

export const getUserFromStorage = async () => {
  const user = await AsyncStorage.getItem(StorageKeys.user);
  if (!user) {
    return null;
  }
  return JSON.parse(user) as User;
};

export const getAccessTokenFromStorage = async () => {
  return await AsyncStorage.getItem(StorageKeys.accessToken);
};
