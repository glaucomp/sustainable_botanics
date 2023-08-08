import React from 'react';
import {KeyboardAvoidingView, Platform, View} from 'react-native';
import {SafeAreaViewProvider} from './src/contexts/safeAreaViewContext';
import {AuthProvider} from './src/contexts/authContext';

import SplashScreen from 'react-native-splash-screen';
import {NativeRouter} from 'react-router-native';

import Screens from './src/screens';

export default class App extends React.Component {
  componentDidMount() {
    SplashScreen.hide();
  }

  componentDidCatch() {
    SplashScreen.hide();
  }
  render() {
    return (
      <View>
        <NativeRouter>
          <AuthProvider>
            <SafeAreaViewProvider>
              <KeyboardAvoidingView
                className="h-full"
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
                <Screens />
              </KeyboardAvoidingView>
            </SafeAreaViewProvider>
          </AuthProvider>
        </NativeRouter>
      </View>
    );
  }
}
