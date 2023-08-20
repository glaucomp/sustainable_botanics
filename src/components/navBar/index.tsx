import React from 'react';
import {View} from 'react-native';
import {useLocation, useNavigate} from 'react-router-native';
import ProfileIcon from '../../assets/icons/ProfileIcon';
import NavItem from './NavItem';

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <View className="h-20 mt-auto flex-row justify-around shadow-md bg-neutral-50 p-3 border-t border-gray-300">
      <NavItem
        onPress={() => navigate('/main')}
        name={'Home'}
        Icon={ProfileIcon}
        selected={
          location.pathname.includes('/main') || location.pathname === '/'
        }
      />
      <NavItem
        onPress={() => navigate('/main')}
        name={'Camera'}
        Icon={ProfileIcon}
        selected={location.pathname.includes('/main')}
      />
      <NavItem
        onPress={() => navigate('/main')}
        name={'Plant Shelf'}
        Icon={ProfileIcon}
        selected={location.pathname.includes('/main')}
      />
      <NavItem
        onPress={() => navigate('/profile')}
        name={'Profile'}
        Icon={ProfileIcon}
        selected={location.pathname.includes('/main')}
      />
    </View>
  );
};
export default NavBar;
