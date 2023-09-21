import React, {useContext, useEffect, useState} from 'react';
import {View, Text, Image, StyleSheet, Button, ScrollView} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {User} from '../../models/User';

import {AuthContext} from '../../contexts/authContext';
import NoPhotoIcon from '../../assets/icons/NoPhotoIcon';
import LabelText from '../../components/LabelText';
import StyledButton, { ButtonType } from '../../components/StyledButton';
import { LoginButtonType } from '../../components/LoginStyledButton';

const ProfileScreen = () => {
  const {logout} = useContext(AuthContext);
  const [user, setUser] = useState<User | null>(null);

  const handlePress = () => {
    logout();
  };

  useEffect(() => {
    // Fetch user data from AsyncStorage
    const getUserData = async () => {
      try {
        const userData = await AsyncStorage.getItem('user');
        if (userData) {
          // Parse the JSON data
          const parsedUserData = JSON.parse(userData);
          setUser(parsedUserData);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    getUserData();
  }, []);

  return (
    <ScrollView style={{ backgroundColor: '#052918' }}>
     <View className="flex-1 h-screen w-screen mt-10">
        <View style={styles.profileContainer}>
          {user && user.photo_url ? (
            <View style={styles.profileInfo}>
              <Image
                source={{uri: user.photo_url}}
                style={styles.profileImage}
              />
            </View>
          ) : (
            <NoPhotoIcon />
          )}
          {user ? (
            <View style={styles.profileInfo}>
              <LabelText style={styles.profileName}>{user.first_name + " " + user.last_name}</LabelText>
            </View>
          ) : (
            <Text></Text>
          )}
        </View>
        <View style={styles.buttonContainer}>
          <StyledButton  type={ButtonType.Secondary} onPress={handlePress} text="Log out" className="" />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    alignItems: 'center',
  },
  profileInfo: {
    alignItems: 'center',
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 16,
  },
  profileName: {
      fontFamily: 'Dosis',
      fontWeight: 'bold',
      fontSize: 20,
      margin: 10,
      marginTop: 20,
  },
  buttonContainer: {
    marginTop: 20,
  },
});

export default ProfileScreen;
