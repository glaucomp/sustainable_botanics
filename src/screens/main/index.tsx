import React, {useContext} from 'react';
import {Text, View, Button} from 'react-native';
import {AuthContext} from '../../contexts/authContext';

const MainScreen = () => {
  const {logout} = useContext(AuthContext);

  const handlePress = () => {
    logout();
  };
  return (
    <View className="flex h-screen w-screen">
      <View className="justify-center h-screen w-screen p-5">
        <Text className="text-3xl font-extrabold mb-8  text-slate-700">
          Main
        </Text>
        <View className="justify-center h-screen w-screen p-5">
          <Button onPress={handlePress} title="Log out" />
        </View>
      </View>
    </View>
  );
};
export default MainScreen;
