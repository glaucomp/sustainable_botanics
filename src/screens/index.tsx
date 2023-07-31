import React, {useState} from 'react';

//import React, {useContext, useState} from 'react';

import {Route, Routes} from 'react-router-native';
//import {AuthContext} from '../contexts/authContext';

import LoginScreen from './login';
import ForgotPasswordScreen from './forgotPassword';
import MainScreen from './main';

const Screens = () => {
  //const {isSignedIn} = false;
  // const navigate = useNavigate();
  //useUniversalLinkRouter(initialUrl => {
  //console.log('navigating to initialUrl', initialUrl);
  //navigate(initialUrl);
  // });
  //const {isSignedIn} = useContext(AuthContext);
  const [isSignedIn] = useState(false);

  console.log('isSignedIn', isSignedIn);

  return (
    <>
      {!isSignedIn ? (
        <Routes>
          <Route path="*" element={<LoginScreen />} />
          <Route path="/forgot_password" element={<ForgotPasswordScreen />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<MainScreen />} />
          <Route path="/main" element={<MainScreen />} />
        </Routes>
      )}
    </>
  );
};

export default Screens;
