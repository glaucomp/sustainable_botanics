import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

interface Props {
  classes?: string;
}
const ProfileIcon = ({classes = 'w-6 h-6 text-white'}: Props) => (
  <Svg viewBox="0 0 24 24" fill="currentColor" className={classes}>
    <Path
      fill-rule="evenodd"
      d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
      clip-rule="evenodd"
    />
  </Svg>
);

export default ProfileIcon;
