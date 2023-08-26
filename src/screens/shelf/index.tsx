import React from 'react';
import {Text, ScrollView} from 'react-native';

const ShelfScreen = () => {
  return (
    <ScrollView style={{ backgroundColor: '#063d23' }}>
      <Text className="text-3xl font-extrabold mb-2  text-slate-700">
        Shelf
      </Text>
    </ScrollView>
  );
};
export default ShelfScreen;
