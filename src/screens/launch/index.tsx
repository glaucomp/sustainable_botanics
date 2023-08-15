import React from 'react';
import {Text, View, Button} from 'react-native';
import {useNavigate} from 'react-router-native';

const LaunchScreen = () => {
  const navigate = useNavigate();

  const handlePress = () => {
    navigate('/login');
  };

  return (
    <View className="flex h-screen w-screen">
      <View className={'flex-1 justify-center items-center p-4'}>
        <Text className="text-4xl font-bold">Launch Screen</Text>
      </View>
      <View className="justify-center h-screen w-screen p-5">
        <Button onPress={handlePress} title="Sign in" />
      </View>
    </View>
  );
};
export default LaunchScreen;
