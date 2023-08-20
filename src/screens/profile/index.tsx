import React, {useContext} from 'react';
import {Text, View, Button, ScrollView} from 'react-native';
import {AuthContext} from '../../contexts/authContext';

const ProfileScreen = () => {
  const {logout} = useContext(AuthContext);

  const handlePress = () => {
    logout();
  };
  return (
    <ScrollView>
      <Text className="text-3xl font-extrabold mb-2  text-slate-700">
        Profile
      </Text>
      <View className="justify-center h-screen w-screen">
        <Button onPress={handlePress} title="Log out" />
      </View>
    </ScrollView>
  );
};
export default ProfileScreen;
