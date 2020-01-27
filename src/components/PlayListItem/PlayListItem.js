import React, { useState, useContext } from 'react';
import { SpotifyContext } from '../../contexts/SpotifyContext';
import TrackList from '../TrackList/TrackList';

const PlayListItem = ({ item, length }) => {
  const { token, setIsLoading, setError } = useContext(SpotifyContext);

  const [tracks, setTracks] = useState([]);
  const [showTracks, setshowTracks] = useState(false);

  const getTracks = async id => {
    setIsLoading(true);

    try {
      const res = await fetch(
        `https://api.spotify.com/v1/playlists/${id}/tracks`,
        {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token,
          },
        }
      );
      const data = await res.json();
      setTracks(data);
      setIsLoading(false);
      setshowTracks(!showTracks);
    } catch (error) {
      setIsLoading(false);
      setError(error);
    }
  };

  return (
    <li key={item.id} className="playlist-container-item">
      <div className="playlist-container-item-head">
        <img
          className="playlist-container-item-head__image"
          src={item.images[0].url}
          alt="logo"
        />
        <div className="playlist-container-item-head__name">{item.name}</div>
      </div>
      <p className="playlist-container-item__amount">
        {item.tracks.total} {item.tracks.total === 1 ? 'utwór' : 'utwory'}
      </p>
      <div
        className={
          showTracks ? 'show-more-button open' : 'show-more-button close'
        }
        onClick={() => getTracks(item.id)}
      >
        <div className="show-more-button-background-image"></div>
      </div>
      <div>
        {showTracks ? (
          <TrackList
            tracks={tracks.items}
            length={length}
            playListID={item.id}
          />
        ) : null}
      </div>
    </li>
  );
};

export default PlayListItem;
