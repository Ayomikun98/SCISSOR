import React, { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged, User } from "firebase/auth"
import { auth } from "../../utils/firebase/firebase.utils";


interface UserContextType {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  authenticatedUser: User | null;
  setAuthenticatedUser: React.Dispatch<React.SetStateAction<User | null>>;
}

export const UserContext = createContext<UserContextType>({
  user: null,
  setUser: () => null,
  authenticatedUser: null,
  setAuthenticatedUser: () => null,
});

interface UserProviderProps {
  children: React.ReactNode;
}

const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [authenticatedUser, setAuthenticatedUser] = useState<User | null>(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    })
  }, []);

  const value: UserContextType = {
    user,
    setUser,
    authenticatedUser,
    setAuthenticatedUser,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useAuth = (): UserContextType => useContext(UserContext);

export default UserProvider;
