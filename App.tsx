import React from 'react';
import {Text, View} from 'react-native';
import {t} from 'react-native-tailwindcss';

export default function App() {
  return (
    <View style={[t.flex1, t.itemsCenter, t.justifyCenter]}>
      <Text style={(t.selfCenter, t.alignCenter, t.bgBlue500)}>
        Hello World
      </Text>
    </View>
  );
}
