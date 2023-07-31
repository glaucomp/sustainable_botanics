import {createContext, useEffect, useState} from 'react';
//import {Alert} from 'react-native';
//import {useNavigate} from 'react-router-native';
//import i18n from '../../i18n';

export interface AuthContextType {
  loadingAuth: boolean;
  authErrors: AuthErrors | undefined;
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
  const [authErrors] = useState<AuthErrors>();
  const [loadingAuth, setLoadingAuth] = useState(true);
  const [isSignedIn, setIsSignedIn] = useState(true);
  //const queryClient = useQueryClient()
  //const trackAnalytics = useAnalyticsManager()
  //const navigate = useNavigate();

  useEffect(() => {
    const getStorageData = async () => {
      setIsSignedIn(true);
      setLoadingAuth(false);
    };
    getStorageData();
  }, []);

  const value = {
    authErrors,
    loadingAuth,
    isSignedIn,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
