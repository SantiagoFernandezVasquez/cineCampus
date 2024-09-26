import React from 'react';
import '../styles/index.css';

const App = () => {
  return (
    <div className="father">
      <section className="upper">
        <div className="image"></div>
        <div className="text">
          <p>Hi, Santiago Fernandez!</p>
          <strong>Let's watch a movie together!</strong>
        </div>
        <div className="bell">
          <img src="../src/storage/img/Iconly.svg" className="bell_icon" width="32px" alt="Notification bell" />
        </div>
      </section>

      <section className="search">
        <input type="text" data-opc="random" placeholder="Search movie, cinema, genre..." />
      </section>

      <section className="title_p">
        <div className="title_text">
          <strong>Now playing</strong>
        </div>
        <div className="title_text2">
          <p>See all</p>
        </div>
      </section>

      <section className="scroll">
        <ul>
          <li>
            <a href="./details">
              <div className="movie-card">
                <div className="poster">
                  <img src="../src/storage/img/Rectangle 4170.svg" width="180px" alt="Puss in Boots Poster" />
                </div>
                <div className="details">
                  <h3>Puss In Boots: The Last Wish</h3>
                  <p>Adventure</p>
                </div>
              </div>
            </a>
          </li>
          <li>
            <a href="../src/views/details.html">
              <div className="movie-card">
                <div className="poster">
                  <img src="../src/storage/img/Rectangle 4170.svg" width="180px" alt="Puss in Boots Poster" />
                </div>
                <div className="details">
                  <h3>Puss In Boots: The Last Wish</h3>
                  <p>Adventure</p>
                </div>
              </div>
            </a>
          </li>
          <li>
            <a href="../src/views/details.html">
              <div className="movie-card">
                <div className="poster">
                  <img src="../src/storage/img/Rectangle 4170.svg" width="180px" alt="Puss in Boots Poster" />
                </div>
                <div className="details">
                  <h3>Puss In Boots: The Last Wish</h3>
                  <p>Adventure</p>
                </div>
              </div>
            </a>
          </li>
        </ul>
      </section>
      <section className="title_p">
        <div className="title_text">
          <strong>Coming soon</strong>
        </div>
        <div className="title_text2">
          <p>See all</p>
        </div>
      </section>

      <section className="coming_soon">
        <div className="movie-card2"></div>
        <div className="movie-card2"></div>
        <div className="movie-card2"></div>
      </section>

      <footer className="footer">
        <ul className="footer__ul">
          <li>
            <a href="index.html">
              <img src="../src/storage/img/Iconly (1).svg" width="24px" alt="Home Icon" />
            </a>
            <p>Home</p>
          </li>
          <li>
            <a href="index.html">
              <img src="../src/storage/img/Vector.svg" width="20px" alt="Browse Icon" />
            </a>
            <p>Browse</p>
          </li>
          <li>
            <a href="index.html">
              <img src="../src/storage/img/Icon.svg" alt="Tickets Icon" />
            </a>
            <p>Tickets</p>
          </li>
          <li>
            <a href="index.html">
              <img src="../src/storage/img/Iconly (2).svg" alt="Profile Icon" />
            </a>
            <p>Profile</p>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default App;
