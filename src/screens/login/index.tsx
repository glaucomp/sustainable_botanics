import React from 'react';
import {Text, View, Button} from 'react-native';
import {useNavigate} from 'react-router-native';

const LoginScreen = () => {
  const navigate = useNavigate();

  const handlePress = () => {
    navigate('/forgot_password');
  };

  return (
    <View className="flex h-screen w-screen">
      <View className="justify-center h-screen w-screen p-5">
        <Text className="text-3xl font-extrabold mb-8  text-slate-700">
          Login
        </Text>
        <Button onPress={handlePress} title="Forget password!" />
      </View>
    </View>
  );
};
export default LoginScreen;
