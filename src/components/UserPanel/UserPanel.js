import React, { useContext } from 'react';
import { SpotifyContext } from '../../contexts/SpotifyContext';
import './UserPanel.scss';

const authEndpoint = 'https://accounts.spotify.com/authorize';
const clientId = process.env.REACT_APP_SPOTIFY_KEY;
const redirectUri = "http://localhost:3000/callback/";
const scopes = [
  "user-read-private",
  "user-read-email",
  "user-library-read",
  "playlist-read-collaborative"
];

const UserPanel = () => {


    const {token} = useContext(SpotifyContext);
    return (
        <div className="user-panel-container">
            {!token && (
            <a
            className="btn auth-allow"
            href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`}
            >
            Login to Spotify
            </a>
        )}
       
        </div>
    )
}

export default UserPanel
