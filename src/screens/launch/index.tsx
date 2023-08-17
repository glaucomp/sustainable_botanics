import React, {useState} from 'react';
import {View, ImageBackground, Animated, Pressable, Text} from 'react-native';
import {BlurView} from '@react-native-community/blur';
import ImageLoader from '../../components/ImageLoader';
import {useNavigate} from 'react-router-native';

const LaunchScreen = () => {
  const navigate = useNavigate();

  const handlePress = () => {
    navigate('/login');
  };
  const [fadeAnim] = useState(new Animated.Value(0));

  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
      delay: 2500,
    }).start();
  }, [fadeAnim]);

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
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ImageLoader
            duration={500}
            delay={500}
            style={{
              width: 250,
              height: 250,
              marginTop: '10%',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            source={require('../../assets/logo_launch.png')}
          />
          <ImageLoader
            duration={1000}
            delay={1000}
            style={{
              width: 300,
              height: 100,
              marginTop: '10%',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            source={require('../../assets/sustainable_botanics_launch.png')}
          />
          <Animated.View
            style={{
              opacity: fadeAnim,
            }}>
            <Pressable
              onPress={handlePress}
              className="mt-5 p-3 rounded-md h-12 items-center justify-center bg-transparent"
              style={{
                marginTop: '40%',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontFamily: 'Dosis',
                  fontWeight: 'bold',
                  alignSelf: 'center',
                  fontSize: 20,
                  color: '#ebeadf',
                }}>
                SIGN IN
              </Text>
            </Pressable>
          </Animated.View>
        </View>
      </View>
    </View>
  );
};
export default LaunchScreen;
