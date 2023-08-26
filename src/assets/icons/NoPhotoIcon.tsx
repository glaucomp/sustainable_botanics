import * as React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';

interface Props {
  classes?: string;
}
const NoPhotoIcon = ({classes = 'w-6 h-6 text-white'}: Props) => (
  <Svg viewBox="0 0 24 24" fill="currentColor" className={classes}>
    <Circle
      opacity="0.5"
      cx="12"
      cy="9"
      r="3"
      stroke="#1C274C"
      stroke-width="1.5"
    />
    <Circle cx="12" cy="12" r="10" stroke="#1C274C" stroke-width="1.5" />
    <Path
      opacity="0.5"
      d="M17.9691 20C17.81 17.1085 16.9247 15 11.9999 15C7.07521 15 6.18991 17.1085 6.03076 20"
      stroke="#1C274C"
      stroke-width="1.5"
      stroke-linecap="round"
    />
  </Svg>
);

export default NoPhotoIcon;
