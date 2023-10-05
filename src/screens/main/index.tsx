import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import CardFlip from 'react-native-card-flip';
import axios from 'axios';
import {saveWithExpiration, getWithExpiration} from '../../utils/storage';

const MainScreen = () => {
  const [dailyAffirmation, setDailyAffirmation] = useState('');

  const cardRef = useRef<CardFlip>(null);

  const updateDailyAffirmation = async () => {
    try {
      const response = await axios.post(
        'https://sustainablebotanics.shop/list_sb_daily_affirmation.php',
        {
          headers: {
            accept: 'application/json',
            'content-type': 'application/json',
          },
        },
      );

      console.log('Response:', response.data);
      saveWithExpiration(
        'daily_affirmation',
        response.data.daily_affirmation_phrase,
      );
      setDailyAffirmation(response.data.daily_affirmation_phrase);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const flipCard = () => {
    updateDailyAffirmation();
    if (cardRef.current) {
      cardRef.current.flip();
    }
  };
  const shakeCard = () => {
    if (cardRef.current) {
      cardRef.current.jiggle({count: 2, duration: 100, progress: 0.05});
    }
  };

  useEffect(() => {
    const flipToSecondSide = () => {
      if (cardRef.current) {
        if (cardRef.current) {
          cardRef.current.flip();
        }
      }
    };
    async function getDailyAffirmation() {
      const dailyAffirmation = await getWithExpiration('daily_affirmation');
      console.log('retrive :', dailyAffirmation);

      if (dailyAffirmation) {
        setDailyAffirmation(dailyAffirmation);
        console.log('setDailyAffirmation :', dailyAffirmation);
        flipToSecondSide();
      }
    }
    getDailyAffirmation();
  }, []);

  return (
    <View
      className="flex-1 flex-row justify-center items-center p-0"
      style={{backgroundColor: '#052918'}}>
      <CardFlip style={styles.cardContainer} ref={cardRef}>
        <TouchableOpacity
          activeOpacity={1}
          style={[styles.card, styles.card1]}
          onPress={flipCard}>
          <ImageBackground
            source={require('../../assets/card_background_1.png')}
            style={{
              width: '100%',
              height: '100%',
            }}
            imageStyle={{
              resizeMode: 'cover',
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={1}
          style={[styles.card, styles.card2]}
          onPress={shakeCard}>
          <View style={styles.container_text}>
            <ImageBackground
              source={require('../../assets/daily_01.png')}
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                flex: 1,
            
              }}
              imageStyle={{
                resizeMode: 'cover',
              }}>
              <Text style={[styles.label2]}>{dailyAffirmation}</Text>
            </ImageBackground>
          </View>
        </TouchableOpacity>
      </CardFlip>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  cardContainer: {
    width: 350,
    height: 500,
  },
  card: {
    width: 350,
    height: 500,
    backgroundColor: '#FE474C',
    borderRadius: 5,
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.5,
  },
  card1: {
    backgroundColor: '#063d23',
  },
  card2: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#bec6af',
  },
  label1: {
    lineHeight: 470,
    textAlign: 'center',
    fontSize: 55,
    fontFamily: 'System',
    color: '#ebeadf',
    backgroundColor: 'transparent',
  },
  label2: {
    textAlign: 'center',
    fontSize: 30,
    fontFamily: 'Dosis',
    fontWeight: 'bold',
    color: '#4f3c02',
    backgroundColor: 'transparent',
    flexWrap: 'wrap',
  },
  container_text: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 0,
  },
});

export default MainScreen;
