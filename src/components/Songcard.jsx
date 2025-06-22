import React from "react";
import "../App.css";

function SongCard({ song }) {
  return (
    <div className="song-card">
      <img src={song.albumCover} alt={song.title} className="album-img" />
      <div className="song-info">
        <h3>{song.rank}. {song.title}</h3>
        <p>{song.artist}</p>
      </div>
    </div>
  );
}

export default SongCard;
