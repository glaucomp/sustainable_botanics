import * as React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';

const SpinnerIcon = ({
  darkMode,
  className,
}: {
  darkMode: boolean;
  className?: string;
}) => {
  return (
    <Svg fill="none" viewBox="0 0 24 24" className={className}>
      <Circle
        cx={12}
        cy={12}
        r={10}
        stroke={darkMode ? 'black' : 'white'}
        strokeWidth={4}
        opacity={0.25}
      />
      <Path
        opacity={0.75}
        fill={darkMode ? 'black' : 'white'}
        d="M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </Svg>
  );
};

export default SpinnerIcon;
