import React from 'react';
import {View} from 'react-native';
import {useLocation, useNavigate} from 'react-router-native';
import ProfileIcon from '../../assets/icons/ProfileIcon';
import HomeIcon from '../../assets/icons/HomeIcon';
import CameraIcon from '../../assets/icons/CameraIcon';
import ShelfIcon from '../../assets/icons/ShelfIcon';

import NavItem from './NavItem';
import i18n from '../../../i18n';

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <View className="h-20 mt-auto flex-row justify-around shadow-md bg-neutral-50 p-3 border-t border-gray-300">
      <NavItem
        onPress={() => navigate('/main')}
        name={i18n.t('nav.home')}
        Icon={HomeIcon}
        selected={
          location.pathname.includes('/main') || location.pathname === '/'
        }
      />
      <NavItem
        onPress={() => navigate('/main')}
        name={i18n.t('nav.camera')}
        Icon={CameraIcon}
        selected={location.pathname.includes('/main')}
      />
      <NavItem
        onPress={() => navigate('/shelf')}
        name={i18n.t('nav.shelf')}
        Icon={ShelfIcon}
        selected={location.pathname.includes('/shelf')}
      />
      <NavItem
        onPress={() => navigate('/profile')}
        name={i18n.t('nav.profile')}
        Icon={ProfileIcon}
        selected={location.pathname.includes('/profile')}
      />
    </View>
  );
};
export default NavBar;
