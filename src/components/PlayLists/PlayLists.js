import React from 'react';
import './PlayLists.scss';
import PlayListItem from '../PlayListItem/PlayListItem';

const PlayLists = ({ userPlayLists }) => {
  return (
    <ul className="playlist-container">
      {userPlayLists
        ? userPlayLists.map(item => (
            <PlayListItem
              key={item.id}
              item={item}
              length={userPlayLists.length}
            />
          ))
        : null}
    </ul>
  );
};

export default PlayLists;
