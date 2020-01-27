import React, { useContext, useEffect } from 'react';
import UserPanel from './UserPanel/UserPanel';
import hash from '../hash';
import { SpotifyContext } from '../contexts/SpotifyContext';

const Login = () => {
  const { setToken } = useContext(SpotifyContext);

  useEffect(() => {
    let _token = hash.access_token;
    if (_token) {
      setToken(_token);
    }
  });

  return <UserPanel />;
};

export default Login;
