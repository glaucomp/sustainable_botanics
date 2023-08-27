import React, {useState, useContext} from 'react';
import {
  Text,
  View,
  Button,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Pressable,
  Platform,
} from 'react-native';
import {useNavigate} from 'react-router-native';
import {AuthContext} from '../../contexts/authContext';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import LabelText from '../../components/LabelText';
import StyledButton, {ButtonType} from '../../components/StyledButton';
import i18n from '../../../i18n';
import ArrowBackIcon from '../../assets/icons/ArrowBackIcon';

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
    first_name: string,
    last_name: string,
    google_id: string,
    google_id_token: string,
    photo_url?: string,
  ) => {
    loginGoogle(
      email_google,
      first_name,
      last_name,
      google_id,
      google_id_token,
      photo_url,
    );
  };

  const onBackPress = async () => {
    if (signInWithEmail) {
      setSignInWithEmail(false);
    } else {
      navigate('/launch');
    }
  };

  return (
    <ScrollView style={{backgroundColor: '#042918'}}>
      <View className="flex flow-col h-screen w-screen m-4">
        {Platform.OS === 'android' ? (
          <View className="mt-10" />
        ) : (
          <View className="mt-0" />
        )}
        <View className="items-start">
          <Pressable onPress={() => onBackPress()}>
            <ArrowBackIcon />
          </Pressable>
        </View>
        <View className="">
          <LabelText
            style={{
              fontFamily: 'Dosis',
              fontWeight: 'bold',
              fontSize: 20,
              margin: 10,
              marginTop: 20,
            }}>
            {signInWithEmail
              ? i18n.t('login.sign_in_email')
              : i18n.t('login.sign_in')}
          </LabelText>
          <LabelText
            style={{
              fontFamily: 'Dosis',
              fontWeight: 'bold',
              fontSize: 18,
              margin: 10,
              marginBottom: 20,
            }}>
            {signInWithEmail
              ? i18n.t('login.enter_your_user_details')
              : i18n.t('login.choose_the_service_below')}
          </LabelText>
        </View>

        {signInWithEmail ? (
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
        ) : (
          <View className="justify-center items-center content-center p-5">
            <View className="flex flex-row justify-center p-5 mx-4">
              <Button
                style={{
                  color: '#ebeadf',
                }}
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
                            const first_name = userInfo.user.givenName;
                            const last_name = userInfo.user.familyName;
                            const google_id = userInfo.user.id;
                            const google_id_token = userInfo.idToken;
                            const photo_url = userInfo.user.photo;
                            onLoginGoogle(
                              email_google,
                              first_name,
                              last_name,
                              google_id,
                              google_id_token,
                              photo_url,
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
            <View className="justify-center p-5">
              <Button onPress={handlePress} title="Forget password!" />
            </View>
          </View>
        )}
      </View>
    </ScrollView>
  );
};
export default LoginScreen;
