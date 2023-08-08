import {createContext, useEffect, useState} from 'react';
//import {Alert} from 'react-native';
import {useNavigate} from 'react-router-native';
import {User} from '../models/User';
import AsyncStorage from '@react-native-async-storage/async-storage';

//import i18n from '../../i18n';
import {StorageKeys, getUserFromStorage} from '../utils/storage';

export interface AuthContextType {
  loadingAuth: boolean;
  authErrors: AuthErrors | undefined;
  login: (email: string, password: string) => Promise<boolean>;
  isSignedIn: boolean;
}
export interface AuthErrors {
  data: {
    error: string;
    status: number;
  };
}

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType,
);

export const AuthProvider = ({children}: {children: React.ReactNode}) => {
  const [currentUser, setCurrentUser] = useState<User>();
  //const [accessToken, setAccessToken] = useState<string>();
  const [authErrors, setAuthErrors] = useState<AuthErrors>();
  const [loadingAuth, setLoadingAuth] = useState(true);
  const isSignedIn = !!currentUser;
  //const queryClient = useQueryClient()
  //const trackAnalytics = useAnalyticsManager()
  const navigate = useNavigate();

  useEffect(() => {
    const getStorageData = async () => {
      // const user = await getUserFromStorage();
      //if (user) {
      //setCurrentUser(user);
      //}

      //setIsSignedIn(false);
      setLoadingAuth(false);
    };
    getStorageData();
  }, []);

  const login = async (email: string, password: string) => {
    setAuthErrors(undefined);
    //const response = await loginRequest(email, password, organisation).catch(
    //error => {
    //if (error.code === 'ERR_NETWORK') {
    //Alert.alert(i18n.t<string>('no_internet_connection'));
    //} else {
    //setAuthErrors(error.response);
    //}
    //},
    //);
    //if (response) {
    console.log('Logged in');
    /*var user = new User();
    user.id = 1;
    user.email = email;
    user.firstName = 'John';
    user.lastName = 'Doe';
    console.log(user);
    */

    const user: User = {
      email: email,
      first_name: 'Primeiro',
      id: 1,
      last_name: 'Último',
    };
    setCurrentUser(user);
    //setAccessToken(response.auth_token);
    //setLoginQrCode(response.qrcode);

    //AsyncStorage.setItem(StorageKeys.qrCode, response.qrcode);
    //AsyncStorage.setItem(StorageKeys.user, JSON.stringify(user));
    //AsyncStorage.setItem(StorageKeys.accessToken, response.auth_token);
    //storeAuthorizationTokenForIOS(response.auth_token);

    // Update the LogRocket session with the user details
    //const fullName = `${response.user.first_name} ${response.user.last_name}`;
    //LogRocket.identify(`${response.user.id}`, {
    //name: fullName,
    //email: response.user.email,
    //});
    //trackAnalytics('login', { email, organisation });
    //navigate('/dashboard');
    navigate('/main');
    //}
    return null;
  };

  const value = {
    authErrors,
    loadingAuth,
    login,
    isSignedIn,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
