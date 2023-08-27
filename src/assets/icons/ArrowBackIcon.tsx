import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

interface Props {
  classes?: string;
}
const ArrowBackIcon = ({classes = 'w-7 h-7 text-white'}: Props) => (
  <Svg viewBox="0 0 24 24" fill="currentColor" className={classes}>
    <Path
      d="M4 12H20M4 12L8 8M4 12L8 16" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
    />
  </Svg>
);

export default ArrowBackIcon;
