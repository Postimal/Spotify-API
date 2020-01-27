import React, { useState, useContext } from 'react';
import './TrackList.scss';
import Modal from '../UI/Modal/Modal';
import TrackListModalMenu from './TrackListModalMenu/TrackListModalMenu';
import { SpotifyContext } from '../../contexts/SpotifyContext';

const TrackList = ({ tracks, length, playListID }) => {
  const { itemToDelete, setItemToDelete, token } = useContext(SpotifyContext);

  const [showEditPanel, setShowEditPanel] = useState(false);
  const [modalPosition, setModalPosition] = useState(null);

  const modalHandler = e => {
    setModalPosition(e.pageY);
    setShowEditPanel(!showEditPanel);
  };

  const getIdToDelete = id => {
    setItemToDelete(id);
  };

  const modalCancelHandler = () => {
    setShowEditPanel(!showEditPanel);
  };

  const deleteTrackHandler = () => {
    console.log('delete handler go');
    deleteTrack();
  };

  const deleteTrack = async () => {
    const res = await fetch(
      `https://api.spotify.com/v1/playlists/${playListID}/tracks`,
      {
        method: 'delete',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token,
        },
        body: {
          tracks: [
            {
              uri: `spotify:track:${itemToDelete}`,
              positions: [0],
            },
          ],
        },
      }
    );

    const data = await res.json();
    console.log(data);
  };

  // https://api.spotify.com/v1/playlists/{playlist_id}/tracks
  // playListID mam zdestruktturyzowane w propsach, dzieki temu bede mogl zmieniac kolejność w playliscie, usunac utwór, planuje to zrobic w małym popupie po kliknieciu utworu

  return (
    <>
      <Modal
        show={showEditPanel}
        positionY={modalPosition}
        modalClosed={modalCancelHandler}
      >
        <TrackListModalMenu
          modalClosed={modalCancelHandler}
          deleteTrack={deleteTrackHandler}
          trackID={itemToDelete}
        />
      </Modal>
      <ol
        className="track-list-container"
        style={{ maxHeight: `calc((100vh - 300px)/${length})` }}
      >
        {tracks.map(track =>
          track.track ? (
            <li
              key={track.track.id}
              className="track-list-container__name"
              onClick={modalHandler}
              onMouseDown={() => getIdToDelete(track.track.id)}
            >
              {track.track.name}
            </li>
          ) : null
        )}
      </ol>
    </>
  );
};

export default TrackList;
