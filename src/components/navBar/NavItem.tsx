import React from 'react';
import {Pressable, Text} from 'react-native';
import classNames from '../../utils/classNames';

interface Props {
  name: string;
  onPress: () => void;
  selected: boolean;
  Icon: ({classes}: {classes?: string}) => JSX.Element;
}

const NavItem = ({name, onPress, Icon, selected}: Props) => {
  const itemColour = selected ? 'text-secondary' : 'text-neutral';
  return (
    <Pressable className="flex-1" onPressIn={onPress}>
      <Icon classes={classNames('self-center w-7 h-7 mb-2', itemColour)} />
      <Text
        className={classNames('text-center text-neutral text-xs', itemColour)}>
        {name}
      </Text>
    </Pressable>
  );
};

export default NavItem;
