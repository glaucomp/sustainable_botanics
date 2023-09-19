import React from 'react'
import { TextInput, TextInputProps, View } from 'react-native'
import ErrorText from './ErrorText'
import LabelText from './LabelText'

interface Props extends TextInputProps {
  label?: string
  error?: string
}

const FormInput = React.forwardRef<TextInput, Props>(
  ({ label, error, ...props }: Props, ref) => (
    <View className="mb-5">
      <TextInput
        ref={ref}
        placeholder={label}
        placeholderTextColor="white"
        {...props}
        className="border-2 border-gray-300 rounded-full h-11 w-screen text-white px-3"
      />
      {error && <ErrorText>{error}</ErrorText>}
    </View>
  ),
)

export default FormInput
