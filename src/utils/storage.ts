import AsyncStorage from '@react-native-async-storage/async-storage';
import {User} from '../models/User';
import { Plant } from '../models/Plant';

export enum StorageKeys {
  user = 'user',
  accessToken = 'access_token',
  plant = 'plant',
  dailyAffirmation = 'daily_affirmation',
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

export const getPlantsShelfStorage = async () => {
  const plant = await AsyncStorage.getItem(StorageKeys.plant);
  if (!plant) {
    return null;
  }
  return JSON.parse(plant) as Plant;
};

// Function to save a value with an expiration time
export const saveWithExpiration = async (key: string, value: string) => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1; // Months are zero-indexed, so add 1
  const day = currentDate.getDate();
  console.log(`Current Date: ${year}-${month}-${day}`);
 
  const item = {
    value: value,
    expiration: `${year}-${month}-${day}`
  };
  await AsyncStorage.setItem(key, JSON.stringify(item));
};

// Function to retrieve a value from AsyncStorage
export const getWithExpiration = async (key: string) => {
  const item = await AsyncStorage.getItem(key);
  console.log('item', item);
  if (!item) {
    console.log('item', "null");

    return null; // Value not found
  }

  const parsedItem = JSON.parse(item);
  
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1;
  const day = currentDate.getDate();
  const currentTime = `${year}-${month}-${day}`;

  if (currentTime === parsedItem.expiration) {
    return parsedItem.value;
  }
  else{
    console.log('item', "null");
    // Item has expired, delete it and return null
    await AsyncStorage.removeItem(key);
    return null;
  }

};
