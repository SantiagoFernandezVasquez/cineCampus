import React, { useEffect } from 'react';
import '../styles/order.css';
import { useNavigate } from 'react-router-dom';
import { startCountdown } from '../js/order'; 

const Order = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const countdownDuration = 60 * 5; 
        const display = document.getElementById('countdown');
        startCountdown(countdownDuration, display);
    }, []);

    return (
        <div>
            <section className='background'>
                <section className="upper">
                    <div className="back" onClick={() => navigate('/')}>
                        <img src="../src/storage/img/Vector (1).svg" alt="Back" />
                    </div>
                    <div className="title">
                        <strong>Order Summary</strong>
                    </div>
                    <div className="dots">
                        <img src="../src/storage/img/more-vertical.svg" alt="More options" />
                    </div>
                </section>
                <section className='info_pelicula'>
                    <div className='pelicula_img'>
                        <img src="../src/storage/img/Rectangle 5632.svg" alt="" />
                    </div>
                    <div className='info_pelicula_cont'>
                        <div className='movie_name'>
                            <p>Puss in Boots The Last Wish</p>
                            <span>Adventure</span>
                        </div>
                        <div className='cine_name'>
                            <p>HARTONO MALL</p>
                            <span>Sun, 12 Feb 2024. 13:00</span>
                        </div>
                    </div>
                </section>
            </section>
            <section className='info_precios'>
                <div className='order_number'>
                    <p>ORDER NUMBER :</p> <p2>123456789</p2>
                </div>
                <div className='num_ticket'>
                    <p>1 TICKET</p> <p2>C5</p2>
                </div>
                <hr />
                <div className='type_seat'>
                    <p>REGULAR SEAT</p> <p2>$24.99 x 3</p2>
                </div>
                <hr />
                <div className='service_fee'>
                    <p>Service Fee</p> <p2>$1.99 x 1</p2>
                </div>
                <hr />
            </section>
            <section className='payment_section'>
                <div className='payment_title'>
                    <p>Payment Method</p>
                </div>
                <div className='payment_box'>
                    <div className='payment_img'>
                        <img src="../src/storage/img/Mastercard.svg" alt="" />
                    </div>
                    <div className='text_box'>
                        <p>Mastercard</p> <p2>**** **** 0998 7865</p2>
                    </div>
                    <div className='round_img'>
                        <img src="../src/storage/img/Group 48095462.svg" alt="" />
                    </div>
                </div>
                <div className='payment_alert'>
                    <p>Complete your payment in</p> 
                    <p2 id="countdown">05:00</p2>
                </div>
            </section>
            <footer className="footer2">
                <a href="./ticket" className="footer-link">
                    <ul className="footer__ul2">
                        <li>
                            <p>Buy Ticket</p>
                        </li>
                    </ul>
                </a>
            </footer>
        </div>
    );
};

export default Order;
