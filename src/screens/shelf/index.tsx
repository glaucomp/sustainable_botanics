import React, {useEffect, useState} from 'react';
import {ImageBackground, View} from 'react-native';
import LabelText from '../../components/LabelText';
import {getPlantsShelfStorage} from '../../utils/storage';
import {Plant} from '../../models/Plant';
import ImageLoader from '../../components/ImageLoader';

const ShelfScreen = () => {
  const [currentPlant, setCurrentPlant] = useState<Plant>();

  useEffect(() => {
    const getStorageData = async () => {
      const plants = await getPlantsShelfStorage();
      if (plants) {
        setCurrentPlant(plants);
      }
    };
    getStorageData();
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: '#052918'}}>
      {currentPlant ? (
        <View className="flex-1 justify-center items-center">
          <ImageBackground
            source={require('../../assets/self_background.jpeg')}
            style={{
              width: '100%',
              height: '100%',
            }}
            imageStyle={{
              resizeMode: 'cover',
            }}
          />
          <View className="flex-1 absolute top-0 left-0 bottom-0 right-0 items-end justify-end">
            <View className="flex-row justify-center items-center mb-44">
              <ImageLoader
                duration={500}
                delay={500}
                style={{
                  width: 200,
                  height: 200,
                  marginTop: '1%',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                source={require('../../assets/scan_1.gif')}
              />
              <ImageLoader
                duration={1000}
                delay={1000}
                style={{
                  width: 200,
                  height: 200,
                  marginTop: '1%',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                source={require('../../assets/scan_2.gif')}
              />
            </View>
          </View>
        </View>
      ) : (
        <View className="flex-1 justify-center items-center">
          <LabelText className="text-xl font-semibold mb-2">
            Shelf Screen
          </LabelText>
        </View>
      )}
    </View>
  );
};
export default ShelfScreen;
