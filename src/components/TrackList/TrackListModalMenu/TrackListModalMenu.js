import React from 'react';
import './TrackListModalMenu.scss';

const TrackListModalMenu = props => {
  return (
    <div className="track-list-modal-menu">
      <button onClick={props.modalClosed}>X</button>
      <h3 className="track-list-modal-menu__name">Ctrl panel</h3>
      <button onClick={props.deleteTrack}>remove</button>
    </div>
  );
};

export default TrackListModalMenu;
