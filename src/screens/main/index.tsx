import React from 'react';
import {Text, View, ScrollView} from 'react-native';

const MainScreen = () => {
  return (
    <ScrollView>
      <Text className="text-3xl font-extrabold mb-8  text-slate-700">Home</Text>
      <View className="justify-center h-screen w-screen p-5" />
    </ScrollView>
  );
};
export default MainScreen;
