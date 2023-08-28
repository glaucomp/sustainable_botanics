import React from 'react';
import {Text, Pressable, PressableProps, View} from 'react-native';
import classNames from '../utils/classNames';
import HomeIcon from '../assets/icons/HomeIcon';
import EnvelopeIcon from '../assets/icons/EnvelopeIcon';
import GoogleIcon from '../assets/icons/GoogleIcon';

export enum LoginButtonType {
  Email,
  Google,
  Facebook,
  Apple,
  None,
}

interface Props extends PressableProps {
  type: LoginButtonType;
  className?: string;
  text?: string;
  textClassNames?: string;
}

const LoginStyledButton = ({
  type = LoginButtonType.None,
  text,
  children,
  className,
  textClassNames,
  ...props
}: Props) => (
  <Pressable
    {...props}
    className={classNames(
      'p-3 h-12 items-center justify-center active:opacity-50 border border-gray-500 bg-white rounded-full',
      className,
    )}>
    <>
      {children}
      {text && (
        <View className='flex flex-row'>
          <View className='flex justify-start'>
          {type === LoginButtonType.Email && <View className='mr-3'><EnvelopeIcon/></View>}
          {type === LoginButtonType.Google && <GoogleIcon />}
          </View>
          <Text
            className={classNames(
              textClassNames,
              'text-black font-bold self-center mr-8 ml-8',
            )}>
            {text}
          </Text>
        </View>
      )}
    </>
  </Pressable>
);

export default LoginStyledButton;
