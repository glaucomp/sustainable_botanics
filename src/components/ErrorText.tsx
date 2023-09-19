import React from 'react'
import { Text, TextProps } from 'react-native'

const ErrorText = ({ children, ...props }: TextProps) => (
  <Text {...props} className="font-semibold text-red-600 text-base">
    {children}
  </Text>
)
export default ErrorText
