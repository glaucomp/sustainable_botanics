import React, {useContext} from 'react';

import {Route, Routes} from 'react-router-native';
import {AuthContext} from '../contexts/authContext';
import LaunchScreen from './launch';
import LoginScreen from './login';
import ForgotPasswordScreen from './forgotPassword';
import MainScreen from './main';

const Screens = () => {
  const {isSignedIn} = useContext(AuthContext);
  console.log('isSignedIn', isSignedIn);
  return (
    <Routes>
      <Route path="/*" element={<LaunchScreen />} />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/forgot_password" element={<ForgotPasswordScreen />} />
      {isSignedIn ? (
        <>
          <Route path="/" element={<MainScreen />} />
          <Route path="/main" element={<MainScreen />} />
        </>
      ) : null}
    </Routes>
  );
};

export default Screens;
