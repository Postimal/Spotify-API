import React, { createContext, useState } from 'react';

export const SpotifyContext = createContext();

const SpotifyContextProvider = props => {
  const [token, setToken] = useState('');
  const [userData, setUserData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [itemToDelete, setItemToDelete] = useState('');

  return (
    <SpotifyContext.Provider
      value={{
        setToken,
        token,
        setUserData,
        userData,
        setIsLoading,
        isLoading,
        setError,
        error,
        setItemToDelete,
        itemToDelete,
      }}
    >
      {props.children}
    </SpotifyContext.Provider>
  );
};

export default SpotifyContextProvider;
