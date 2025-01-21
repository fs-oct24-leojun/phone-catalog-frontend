import {onAuthStateChanged, User} from 'firebase/auth';
import { auth } from './firebases/firebase';

import React, {
  useContext,
  useEffect,
  useState,
} from 'react';

type CurrentUser = User | null

export const AuthContext = React.createContext({
  currentUser: {} as CurrentUser, 
  userLoggedIn: false,
  loading: true  
});

export const useAuth = () => useContext(AuthContext);

type Props = {
    children: React.ReactNode
}


export const AuthProvider: React.FC<Props> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<CurrentUser>(null);
  const [userLoggedIn, setUserLoggedIn] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);


  const initializeUser = async (user: CurrentUser) => {
    if (user) {
      setCurrentUser({...user});
      setUserLoggedIn(true);
    } else {
      setCurrentUser(null);
      setUserLoggedIn(false);
    }

    setLoading(false);
  }

  const value = {
    currentUser, userLoggedIn, loading
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, initializeUser);

    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value = {value}>
      {!loading && children}
    </AuthContext.Provider>
  )

}
