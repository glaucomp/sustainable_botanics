import React, {createContext, ReactNode, useState} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

export interface SafeAreaViewContextType {
  setDarkMode: (darkMode: boolean) => void;
}

export const SafeAreaContext = createContext<SafeAreaViewContextType>(
  {} as SafeAreaViewContextType,
);

export const SafeAreaViewProvider = ({children}: {children: ReactNode}) => {
  const [darkMode, setDarkMode] = useState(false);

  const value = {
    setDarkMode,
  };

  return (
    <SafeAreaContext.Provider value={value}>
      <SafeAreaView className={darkMode ? 'bg-neutral-800' : 'bg-white'}>
        <StatusBar
          translucent
          //barStyle={darkMode ? 'light-content' : 'dark-content'}
          backgroundColor={darkMode ? 'black' : 'black'}
        />
        {children}
      </SafeAreaView>
    </SafeAreaContext.Provider>
  );
};
