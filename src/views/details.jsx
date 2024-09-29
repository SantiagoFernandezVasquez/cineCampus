import React from 'react';
import '../styles/details.css';
import { useNavigate } from 'react-router-dom';

const Details = () => {
    const navigate = useNavigate();

    return (
        <section className="father">
            <section className="upper">
                <div className="back" onClick={() => navigate('/')}>
                    <img src="../src/storage/img/Vector (1).svg" alt="Back" />
                </div>
                <div className="title">
                    <strong>Cinema Selection</strong>
                </div>
                <div className="dots">
                    <img src="../src/storage/img/more-vertical.svg" alt="More Options" />
                </div>
            </section>
            <section className="image_movie">
                <img src="../src/storage/img/Avatar (1).svg" alt="Movie Poster" />
            </section>
            <section className="details">
                <div className="info">
                    <div className="movie_name">
                        <strong>Puss in Boots The Last Wish</strong>
                    </div>
                    <a href="https://youtu.be/L_ix9mjq3gU?si=dxeKGTSsSV6FCZZQ" target="_blank" rel="noopener noreferrer" className="trailer-link">
                        <div className="trailer">
                            <img src="../src/storage/img/Polygon 1.svg" width="10px" alt="Trailer Icon" />
                            <p>Watch Trailer</p>
                        </div>
                    </a>
                </div>
                <div className="span">
                    <span>Action, Adventure</span>
                </div>
                <div className="information">
                    <details>
                        <summary>See information</summary>
                        <p>Jake Sully and Ney'tiri have formed a family and are doing everything to stay together. However, they must leave their home and explore the regions of Pandora. When an ancient threat resurfaces, Jake must fight a difficult war against the humans.</p>
                    </details>
                    <hr />
                </div>
                <section className="title_cast">
                    <h1>Cast</h1>
                    <div className="cast">
                        <Actor name="Antonio Banderas" role="Puss in Boots" imgSrc="../src/storage/img/Ellipse 208.svg" />
                        <Actor name="Salma Hayek" role="Kitty Softpaws" imgSrc="../src/storage/img/Ellipse 208 (1).svg" />
                        <Actor name="Harvey Guillén" role="Perro" imgSrc="../src/storage/img/Ellipse 208 (2).svg" />
                    </div>
                    <hr />
                </section>
                <section className="title_cinema">
                    <h1>Cinema</h1>
                    <CinemaCard name="Atrium Cinemas" location="Staff lines, Saddar, Karachi" imgSrc="../src/storage/img/Rectangle 376.svg" />
                    <CinemaCard name="Neuplex" location="Kahayaban - e Shaneen, Dha Phase 8" imgSrc="../src/storage/img/Rectangle 377.svg" />
                </section>
            </section>
            <footer className="footer2">
                <a href="./cinema" className="footer-link">
                    <ul className="footer__ul2">
                        <li>
                            <p>Book now</p>
                        </li>
                    </ul>
                </a>
            </footer>
        </section>
    );
};

const Actor = ({ name, role, imgSrc }) => (
    <div className="actor1">
        <div className="actor_img">
            <img src={imgSrc} width="45px" alt={`${name}`} />
        </div>
        <div className="info_actor">
            <div className="nombre_actor">
                <b>{name}</b>
            </div>
            <div className="rol">
                <p>{role}</p>
            </div>
        </div>
    </div>
);

const CinemaCard = ({ name, location, imgSrc }) => (
    <div className="cinema_card" onClick={() => selectCinema(this)}>
        <div className="info_cine">
            <strong>{name}</strong>
            <div className="span">
                <p>{location}</p>
            </div>
        </div>
        <div className="cinema_image">
            <img src={imgSrc} width="65px" alt={`${name} Cinema`} />
        </div>
    </div>
);

// Aquí puedes definir la función selectCinema
const selectCinema = (cinema) => {
    // Tu lógica aquí para seleccionar un cine
};

export default Details;
