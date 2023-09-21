import React from 'react';
import {View} from 'react-native';
import LabelText from '../../components/LabelText';

const ShelfScreen = () => {

  return (
    <View style={{flex: 1, backgroundColor: '#052918'}}>
      <LabelText className="text-3xl font-extrabold mb-2"></LabelText>

      <LabelText className="text-xl font-semibold mb-2">
      Shelf Screen
      </LabelText>
    </View>
  );
};
export default ShelfScreen;
