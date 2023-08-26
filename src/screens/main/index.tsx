import React, {useEffect, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import CardFlip from 'react-native-card-flip';

const MainScreen = () => {
  const cardRef = useRef<CardFlip>(null);

  const flipCard = () => {
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
        setTimeout(() => {
          if (cardRef.current) {
            //cardRef.current.flip();
          }
        }, 100);
      }
    };

    flipToSecondSide();
  }, []);

  return (
      <View className="flex-1 flex-row justify-center items-center p-0" style={{backgroundColor: '#052918'}}>
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
            <Text style={styles.label1}>Glauco</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={1}
            style={[styles.card, styles.card2]}
            onPress={shakeCard}>
            <Text style={styles.label2}>Pereira</Text>
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
    width: 280,
    height: 400,
  },
  card: {
    width: 280,
    height: 400,
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
    lineHeight: 470,
    textAlign: 'center',
    fontSize: 55,
    fontFamily: 'System',
    color: '#4f3c02',
    backgroundColor: 'transparent',
  },
});

export default MainScreen;
