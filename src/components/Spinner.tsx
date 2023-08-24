import {useEffect, useMemo} from 'react';
import {Animated, Easing} from 'react-native';
import SpinnerIcon from '../assets/icons/SpinnerIcon';

interface Props {
  darkMode?: boolean;
  classes?: string;
}

const Spinner = ({darkMode = false, classes = 'w-6 h-6'}: Props) => {
  const spinValue = useMemo(() => new Animated.Value(0), []);

  useEffect(() => {
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 800,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();
  }, [spinValue]);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <Animated.View className={classes} style={{transform: [{rotate: spin}]}}>
      <SpinnerIcon darkMode={darkMode} className={classes} />
    </Animated.View>
  );
};

export default Spinner;
