import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
interface Props {
  classes?: string;
}
const SvgComponent = ({classes = 'w-6 h-6 text-black'}: Props) => (
  <Svg
    className={classes}
    viewBox="0 0 24 24"
    fill="none"
    strokeWidth={1.5}
    stroke="currentColor">
    <Path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </Svg>
);
export default SvgComponent;
