import { createContext, useEffect, useState } from 'react';

export const UserAuthContext = createContext();

export const UserAuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem('user')) || null
  );

  const Login = () => {};

  useEffect(() => {
    localStorage.setItem('user', currentUser);
  }, [currentUser]);

  return (
    <UserAuthContext.Provider value={{ currentUser, Login, setCurrentUser }}>
      {children}
    </UserAuthContext.Provider>
  );
};
