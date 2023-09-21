import React from 'react';
import {View} from 'react-native';
import {useLocation, useNavigate} from 'react-router-native';
import ProfileIcon from '../../assets/icons/ProfileIcon';
import HomeIcon from '../../assets/icons/HomeIcon';
import CameraIcon from '../../assets/icons/CameraIcon';
import ShelfIcon from '../../assets/icons/ShelfIcon';

import NavItem from './NavItem';
import i18n from '../../../i18n';
import CromoIcon from '../../assets/icons/CromoIcon';

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <View
      className="h-20 mt-auto flex-row justify-around shadow-md p-3 border-t"
      style={{backgroundColor: '#ad8200'}}>
      <NavItem
        onPress={() => navigate('/main')}
        name={i18n.t('nav.home')}
        Icon={HomeIcon}
        selected={
          location.pathname.includes('/main') || location.pathname === '/'
        }
      />
      <NavItem
        onPress={() => navigate('/cromo')}
        name={i18n.t('nav.cromo')}
        Icon={CromoIcon}
        selected={location.pathname.includes('/cromo')}
      />
      <NavItem
        onPress={() => navigate('/scan_qrcode')}
        name={i18n.t('nav.camera')}
        Icon={CameraIcon}
        selected={location.pathname.includes('/scan_qrcode')}
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
