import React from 'react';
import {Text, TextProps} from 'react-native';

const LabelText = ({children, ...props}: TextProps) => (
  <Text {...props} className="font-semibold text-slate-900 text-base">
    {children}
  </Text>
);
export default LabelText;
