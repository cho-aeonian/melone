import React from "react";
import homeData from "../data/homeData.json";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      {/* 왼쪽 앨범 섹션 */}
      <div className="left-content">
        <section className="latest-section">
          <h2>🆕 최신 앨범</h2>
          <div className="album-list six-albums">
            {homeData.newAlbums.slice(0, 6).map((album) => (
              <div key={album.id} className="album-card">
                <img src={album.cover} alt={album.title} />
                <div className="overlay">
                  <div className="album-title-wrapper">
                    <p className="album-title">{album.title}</p>
                  </div>
                  <p className="album-artist">{album.artist}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="popular-section">
          <h2>🔥 인기 앨범</h2>
          <div className="album-list six-albums">
            {homeData.popularAlbums.slice(0, 6).map((album) => (
              <div key={album.id} className="album-card">
                <img src={album.cover} alt={album.title} />
                <div className="overlay">
                  <div className="album-title-wrapper">
                    <p className="album-title">{album.title}</p>
                  </div>
                  <p className="album-artist">{album.artist}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* 오른쪽 멜론 차트 */}
      <div className="right-content">
        <section>
          <h2>🎵 멜론 차트 Top 100</h2>
          <div className="chart-scroll">
            <ol>
              {homeData.melonChart.map((song) => (
                <li key={song.rank}>
                  <strong>{song.rank}위</strong> - {song.title} ({song.artist})
                </li>
              ))}
            </ol>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
