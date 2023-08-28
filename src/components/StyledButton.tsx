import React from 'react';
import {Text, Pressable, PressableProps} from 'react-native';
import classNames from '../utils/classNames';

export enum ButtonType {
  Primary,
  Secondary,
  Outline,
  Link,
  None,
}

interface Props extends PressableProps {
  type: ButtonType;
  className?: string;
  text?: string;
  textClassNames?: string;
}

const StyledButton = ({
  type = ButtonType.None,
  text,
  children,
  className,
  textClassNames,
  ...props
}: Props) => (
  <Pressable
    {...props}
    className={classNames(
      'p-3 rounded-md h-14 items-center justify-center active:opacity-50',
      type === ButtonType.Primary && 'bg-yellow-400',
      type === ButtonType.Secondary && 'bg-blue-600',
      type === ButtonType.Outline &&
        'bg-white border border-neutral-300 active:bg-neutral-100',
      (type === ButtonType.None || type === ButtonType.Link) &&
        'bg-transparent',
      className,
    )}>
    <>
      {children}
      {text && (
        <Text
          className={classNames(
            type === ButtonType.Primary && 'text-black',
            type === ButtonType.Secondary && 'text-white',
            type === ButtonType.Outline && 'text-neutral-600',
            type === ButtonType.Link && 'text-blue-600',
            textClassNames,
            'font-bold self-center',
          )}>
          {text}
        </Text>
      )}
    </>
  </Pressable>
);

export default StyledButton;
