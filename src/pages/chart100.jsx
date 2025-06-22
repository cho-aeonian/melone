import React, { useState, useEffect } from 'react';
import './chart100.css';
import chartData from '../data/chartData'; // 별도 파일로 분리한 데이터

const Chart100 = () => {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date());
    }, 1000); // 1초마다 업데이트

    return () => clearInterval(interval); // 언마운트 시 인터벌 제거
  }, []);

  // 날짜 포맷: 2025.03.30
  const formattedDate = now.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).replace(/\./g, '.').replace(/\s/g, '').slice(0, 10);

  // 시간 포맷: 22:00 (초 제외)
  const formattedTime = now.toLocaleTimeString('ko-KR', {
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <div className="chart-container">
      <div className="chart-header">
        <h2>TOP 100</h2>
        <div className="chart-date">
          <span className="date">{formattedDate}</span>
          <span className="time">{formattedTime}</span>
        </div>
      </div>

      <div className="chart-buttons">
        <button>셔플듣기</button>
        <button>전체듣기</button>
        <button>듣기</button>
        <button>담기</button>
        <button>다운</button>
        <button>FLAC</button>
        <button>선물</button>
      </div>

      <table className="chart-table">
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
          {chartData.slice(0,20).map((song) => (
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

export default Chart100;
