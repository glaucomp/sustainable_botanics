import React from 'react';
import {Text, View, Button} from 'react-native';
import {useNavigate} from 'react-router-native';

const ForgotPasswordScreen = () => {
  const navigate = useNavigate();

  const handlePress = () => {
    navigate('/login');
  };

  return (
    <View className="flex h-screen w-screen">
      <View className="justify-center h-screen w-screen p-5">
        <Text className="text-3xl font-extrabold mb-8  text-slate-700">
         Forgot Password Screen
        </Text>
        <Button onPress={handlePress} title="Back Login" />
      </View>
    </View>
  );
};
export default ForgotPasswordScreen;
