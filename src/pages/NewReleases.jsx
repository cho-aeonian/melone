import React from 'react';
import './NewReleases.css';
import newChart from '../data/NewchartData.json';

const NewReleases = () => {
  return (
    <div className="new-releases-container">
      <div className="new-releases-header">
        <h3>최신 음악</h3>
      </div>

      <div className="new-releases-buttons">
        <button>셔플듣기</button>
        <button>전체듣기</button>
        <button>듣기</button>
        <button>담기</button>
        <button>다운</button>
        <button>FLAC</button>
        <button>선물</button>
      </div>

      <table className="new-releases-table">
        <thead>
          <tr>
            <th><input type="checkbox" /></th>
            <th>순위</th>
            <th>곡정보</th>
            <th>앨범</th>
            <th>좋아요</th>
            <th>듣기</th>
            <th>담기</th>
            <th>다운</th>
            <th>뮤비</th>
          </tr>
        </thead>
        <tbody>
          {newChart.slice(0, 20).map((song) => (
            <tr key={song.rank}>
              <td><input type="checkbox" /></td>
              <td>{song.rank}</td>
              <td className="song-info">
                <img src={song.image} alt="album" />
                <div>
                  <div className="title">{song.title}</div>
                  <div className="artist">{song.artist}</div>
                </div>
              </td>
              <td>{song.album}</td>
              <td>❤️ {song.likes.toLocaleString()}</td>
              <td>▶️</td>
              <td>➕</td>
              <td>⬇️</td>
              <td>🎬{song.mv}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NewReleases;
