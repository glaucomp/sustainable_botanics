import {useLocation} from 'react-router-native';
import React, {useContext} from 'react';
import {View} from 'react-native';
import NavBar from './navBar';
import {AuthContext} from '../contexts/authContext';

interface Props {
  children: React.ReactNode;
}
const NavBarWrapper = ({children}: Props) => {
  const location = useLocation();
  const {isSignedIn} = useContext(AuthContext);

  const showNavBar = !(
    !isSignedIn ||
    location.pathname.match('/[a-zA-Z]+/') ||
    ['/forgot_password', '/login'].includes(location.pathname)
  );

  return (
    <View className="h-full">
      {showNavBar ? (
        <>
          <View className="h-full mt-4 pb-20 bg-green_dark" style={{backgroundColor:''}}>{children}</View>
          <NavBar />
        </>
      ) : (
        children
      )}
    </View>
  );
};
export default NavBarWrapper;
