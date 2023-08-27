import React from 'react';
import {Text, TextProps} from 'react-native';

const LabelText = ({children, ...props}: TextProps) => (
  <Text {...props} className="font-semibold text-gray_light text-base">
    {children}
  </Text>
);
export default LabelText;
