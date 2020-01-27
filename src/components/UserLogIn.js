import React, { useContext, useEffect, useState } from 'react';
import { SpotifyContext } from '../contexts/SpotifyContext';
import hash from '../hash';
import PlayLists from './PlayLists/PlayLists';

const UserLogIn = () => {
  const {
    token,
    setToken,
    setUserData,
    userData,
    setIsLoading,
    setError,
  } = useContext(SpotifyContext);
  const [num, setNum] = useState(1);

  useEffect(() => {
    console.log('use effect for token');
    let _token = hash.access_token;
    if (_token) {
      setToken(_token);
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    console.log('use effect for fetchData');
    fetchData();
    // eslint-disable-next-line
  }, [token]);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      let res = await fetch(`https://api.spotify.com/v1/me/playlists`, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token,
        },
      });
      let data = await res.json();
      setUserData(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(error);
    }
  };

  return (
    <div>
      <button onClick={() => setNum(num + 1)}>num+</button>
      {userData && (
        <div>
          <PlayLists userPlayLists={userData.items} />
        </div>
      )}
    </div>
  );
};

export default UserLogIn;
