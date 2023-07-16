import React from 'react';
import {Text, View} from 'react-native';
import {t} from 'react-native-tailwindcss';

import SplashScreen from 'react-native-splash-screen';

export default class App extends React.Component {
  componentDidMount() {
    SplashScreen.hide();
  }

  componentDidCatch() {
    SplashScreen.hide();
  }
  render() {
    return (
      <View style={[t.flex1, t.itemsCenter, t.justifyCenter]}>
        <Text style={(t.selfCenter, t.alignCenter, t.bgBlue500)}>
          Hello World
        </Text>
      </View>
    );
  }
}
