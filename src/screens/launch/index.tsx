import React from 'react';
import {View, ImageBackground, Image} from 'react-native';
import {BlurView} from '@react-native-community/blur';
import StyledButton, {ButtonType} from '../../components/StyledButton';
import {useNavigate} from 'react-router-native';

const LaunchScreen = () => {
  const navigate = useNavigate();

  const handlePress = () => {
    navigate('/login');
  };

  return (
    <View className="flex h-full w-full bg-fullscreen-image bg-cover">
      <ImageBackground
        source={require('../../assets/gif_background.gif')}
        style={{
          width: '100%',
          height: '100%',
        }}
        imageStyle={{
          resizeMode: 'cover',
        }}
      />
      <BlurView
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
        }}
        imageStyle={{
          resizeMode: 'cover',
        }}
        blurType="light"
        blurAmount={10}
      />
      <View
        style={{
          flex: 1,
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View className="flex flex-row items-center">
          <Image
            style={{
              width: 50,
              height: 50,
            }}
            source={require('../../assets/gif_background.gif')}
          />
          <Image
            style={{
              width: 50,
              height: 50,
              marginTop: 130,
            }}
            source={require('../../assets/gif_background.gif')}
          />
          <StyledButton
            type={ButtonType.None}
            textClassNames="text-lg font-bold text-blue-900"
            onPress={handlePress}
            text="Sign in"
            className="m-4"
            style={{
              marginTop: 150,
            }}
          />
        </View>
      </View>
    </View>
  );
};
export default LaunchScreen;
