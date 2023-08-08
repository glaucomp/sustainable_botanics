import React, {useState, useContext} from 'react';
import {Text, View, Button, TouchableOpacity, TextInput} from 'react-native';
import {useNavigate} from 'react-router-native';
import {AuthContext} from '../../contexts/authContext';

const LoginScreen = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {login} = useContext(AuthContext);
  //const [loggingIn, setLoggingIn] = useState(false);

  const handlePress = () => {
    navigate('/forgot_password');
  };

  const onLogin = async () => {
    /* let updatedErrors = [] as KeyValue[];

    if (!email.trim()) {
      updatedErrors.push({
        key: 'email',
        value: i18n.t('login.warnings.email_required'),
      });
    }

    if (!validateEmail(email)) {
      updatedErrors.push({
        key: 'email',
        value: i18n.t('login.warnings.email_invalid'),
      });
    }

    if (!password.trim()) {
      updatedErrors.push({
        key: 'password',
        value: i18n.t('login.warnings.password_required'),
      });
    }

    setErrors(updatedErrors);
*/
    // If we have no errors, attempt to login
    //if (!updatedErrors.length) {
    //setLoggingIn(true);
    //await login(email, password);
    login(email, password);
    //setLoggingIn(false);
    // }
  };

  return (
    <View className="flex h-screen w-screen">
      <View className={'flex-1 justify-center items-center p-4'}>
        <View style={'w-full mb-6'}>
          <TextInput
            className={'p-4 border border-gray-500 rounded'}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
          />
        </View>

        <View style={'w-full mb-6'}>
          <TextInput
            className={'p-4 border border-gray-500 rounded'}
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </View>

        <TouchableOpacity
          className={'bg-blue-500 p-4 rounded justify-center items-center'}
          onPress={onLogin}>
          <Text
            className={
              'text-white text-xl font-bold text-center justify-center items-center'
            }>
            Login
          </Text>
        </TouchableOpacity>
      </View>
      <View className="justify-center h-screen w-screen p-5">
        <Button onPress={handlePress} title="Forget password!" />
      </View>
    </View>
  );
};
export default LoginScreen;
