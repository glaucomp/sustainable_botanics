import React, {useState, useContext} from 'react';
import {Text, View, Button, TouchableOpacity, TextInput} from 'react-native';
import {useNavigate} from 'react-router-native';
import {AuthContext} from '../../contexts/authContext';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

const LoginScreen = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {login, loginGoogle} = useContext(AuthContext);
  const [signInWithEmail, setSignInWithEmail] = useState(false);

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

  const onLoginGoogle = async (
    email_google: string,
    idToken: string,
    first_name: string,
    last_name: string,
    google_id: string,
  ) => {
    loginGoogle(email_google, idToken, first_name, last_name, google_id);
  };

  return (
    <View className="flex h-screen w-screen justify-center">
      {signInWithEmail ? (
        <View className={'flex-1 justify-center items-center p-4'}>
          <Button
            onPress={() => setSignInWithEmail(false)}
            title="back to sign in"
          />
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
      ) : (
        <View className="justify-center items-center content-center h-screen w-screen p-5">
          <View className="flex h-screen w-screen">
            <View className="justify-center h-screen w-screen p-5">
              <Button
                onPress={() => setSignInWithEmail(true)}
                title="Sign in with email"
              />
            </View>
            <Button
              title={'Sign in with Google'}
              onPress={() => {
                GoogleSignin.configure({
                  androidClientId:
                    '683030801714-oqfn3ok55rlsslqhd1nnsf2fkhmpviqe.apps.googleusercontent.com',
                  iosClientId:
                    '683030801714-0bifij1vo01j5emsdnc4dq233idqfuo0.apps.googleusercontent.com',
                  scopes: ['profile', 'email'],
                });
                GoogleSignin.hasPlayServices()
                  .then(hasPlayService => {
                    if (hasPlayService) {
                      GoogleSignin.signIn()
                        .then(userInfo => {
                          console.log(JSON.stringify(userInfo));
                          try {
                            const email_google = userInfo.user.email;
                            const idToken = userInfo.idToken;
                            const first_name = userInfo.user.givenName;
                            const last_name = userInfo.user.familyName;
                            const google_id = userInfo.user.id;
                            onLoginGoogle(
                              email_google,
                              idToken,
                              first_name,
                              last_name,
                              google_id,
                            );
                          } catch (error) {
                            console.error('Error parsing JSON:', error);
                          }
                        })
                        .catch(e => {
                          console.log('ERROR IS: ' + JSON.stringify(e));
                        });
                    }
                  })
                  .catch(e => {
                    console.log('ERROR IS: ' + JSON.stringify(e));
                  });
              }}
            />
            <View className="justify-center h-screen w-screen p-5">
              <Button onPress={handlePress} title="Forget password!" />
            </View>
          </View>
        </View>
      )}
    </View>
  );
};
export default LoginScreen;
