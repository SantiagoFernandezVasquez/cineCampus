import React from 'react';
import '../styles/cinema.css';
import { useNavigate } from 'react-router-dom';

const Cinema = () => {
    const navigate = useNavigate();

    return (
        <div>
            <section className="upper">
                <div className="back" onClick={() => navigate('/')}>
                    <img src="../src/storage/img/Vector (1).svg" alt="Back" />
                </div>
                <div className="title">
                    <strong>Choose Seat</strong>
                </div>
                <div className="dots">
                    <img src="../src/storage/img/more-vertical.svg" alt="More options" />
                </div>
            </section>
            <section className="cine">
                <div className="screen">
                    <img src="../src/storage/img/Group 18102.svg" width="270" alt="Screen" />
                </div>
            </section>
            <section className='seats'>
                <div className='row1'>
                    <p>A</p>
                    <div className='seat'></div>
                    <div className='seat'></div>
                    <div className='seat'></div>
                    <div className='seat'></div>
                    <div className='seat'></div>
                </div>
                <div className='row2'>
                    <p>B</p>
                    <div className='seat'></div>
                    <div className='seat'></div>
                    <div className='seat'></div>
                    <div className='seat'></div>
                    <div className='seat'></div>
                    <div className='seat'></div>
                    <div className='seat'></div>
                </div>
                <div className='row3'>
                    <p>C</p>
                    <div className='seat'></div>
                    <div className='seat'></div>
                    <div className='seat'></div>
                    <div className='seat'></div>
                    <div className='seat3'>5</div>
                    <div className='seat'></div>
                    <div className='seat'></div>
                    <div className='seat'></div>
                    <div className='seat'></div>
                </div>
                <div className='row4'>
                    <p>D</p>
                    <div className='seat2'></div>
                    <div className='seat2'></div>
                    <div className='seat2'></div>
                    <div className='seat2'></div>
                    <div className='seat2'></div>
                    <div className='seat2'></div>
                    <div className='seat2'></div>
                    <div className='seat2'></div>
                    <div className='seat2'></div>
                </div>
                <div className='row5'>
                    <p>E</p>
                    <div className='seat2'></div>
                    <div className='seat2'></div>
                    <div className='seat2'></div>
                    <div className='seat2'></div>
                    <div className='seat2'></div>
                    <div className='seat2'></div>
                    <div className='seat2'></div>
                    <div className='seat2'></div>
                    <div className='seat2'></div>
                </div>
                <div className='row6'>
                    <p>F</p>
                    <div className='seat2'></div>
                    <div className='seat2'></div>
                    <div className='seat2'></div>
                    <div className='seat2'></div>
                    <div className='seat2'></div>
                    <div className='seat2'></div>
                    <div className='seat2'></div>
                    <div className='seat2'></div>
                    <div className='seat2'></div>
                </div>
            </section>
            <section className='info_seat'>
                <img src="../src/storage/img/Group 18105.svg"/>
            </section>
            <section className='date'>
                <div className='day'>
                    <div className='day_container1'></div>
                    <div className='day_container'></div>
                    <div className='day_container'></div>
                    <div className='day_container'></div>
                    <div className='day_container'></div>
                </div>
                <hr />
                <div className='hour'>
                    <div className='hour_container1'></div>
                    <div className='hour_container'></div>
                    <div className='hour_container'></div>
                </div>
            </section>
            <section className='bottom'>
                <div className='price_container'>
                    <p>Price</p>
                    <p className='price_number'>$24,99</p>
                </div>
                <a href="./order">
                <div className='buy_ticket'>
                    <p>Buy Ticket</p>
                </div>
                </a>
            </section>
        </div>  
    );
};

export default Cinema;
