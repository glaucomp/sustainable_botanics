import {createContext, useEffect, useState} from 'react';
import {useNavigate} from 'react-router-native';
import {User} from '../models/User';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {getUserFromStorage} from '../utils/storage';

export interface AuthContextType {
  loadingAuth: boolean;
  authErrors: AuthErrors | undefined;
  login: (email: string, password: string) => Promise<boolean>;
  loginGoogle: (
    email_google: string,
    idToken: string,
    first_name: string,
    last_name: string,
    google_id: string,
  ) => Promise<boolean>;
  logout: (callback?: () => void) => void;
  currentUser: User | undefined;
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
  const navigate = useNavigate();

  useEffect(() => {
    const getStorageData = async () => {
      const user = await getUserFromStorage();
      if (user) {
        setCurrentUser(user);
      }

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
    console.log('Logged in ' + password);

    const user: User = {
      email: email,
      first_name: 'Primeiro',
      id: 1,
      last_name: 'Último',
    };
    setCurrentUser(user);
    //setAccessToken(response.auth_token);

    //AsyncStorage.setItem(StorageKeys.user, JSON.stringify(user));
    //AsyncStorage.setItem(StorageKeys.accessToken, response.auth_token);
    navigate('/main');

    return null;
  };
  const loginGoogle = async (
    email_google: string,
    idToken: string,
    first_name: string,
    last_name: string,
    google_id: string,
  ) => {
    setAuthErrors(undefined);
    const user: User = {
      email: email_google,
      first_name: first_name,
      id: 0,
      last_name: last_name,
      google_idToken: idToken,
      google_id: google_id,
    };
    insertUser(user);
    return null;
  };

  async function insertUser(user: User) {
    try {
      const response = await axios.post(
        'https://sustainablebotanics.shop/insert_user.php',
        user,
        {
          headers: {
            accept: 'application/json',
            'content-type': 'application/json',
          },
        },
      );

      console.log('Response:', response.data);
      AsyncStorage.setItem('user', JSON.stringify(user));
      setCurrentUser(user);
      navigate('/main');
    } catch (error) {
      console.error('Error:', error);
    }
  }

  const logout = () => {
    console.log('Logged out');
    setCurrentUser(undefined);
    //setAccessToken(undefined);
    AsyncStorage.multiRemove(['user']);
    try {
      GoogleSignin.signOut();
      // Perform any additional logout-related tasks here
    } catch (error) {
      console.error('Error GoogleSignin out:', error);
    }
  };

  const value = {
    authErrors,
    loadingAuth,
    login,
    loginGoogle,
    logout,
    isSignedIn,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
