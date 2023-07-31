import React from 'react';
import {Text, View} from 'react-native';

const ForgotPasswordScreen = () => {
  return (
    <View className="flex h-screen w-screen">
      <View className="justify-center h-screen w-screen p-5">
        <Text className="text-3xl font-extrabold mb-8  text-slate-700">
          {i18n.t<string>('forgot_password.forgot_password')}
        </Text>
      </View>
    </View>
  );
};
export default ForgotPasswordScreen;
