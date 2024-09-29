import React from 'react';
import '../styles/ticket.css'
import { useNavigate } from 'react-router-dom';

const Ticket = () => {
    const navigate = useNavigate(); 
    return (
        <div>
            <section className="upper">
                <div className="back" onClick={() => navigate('/')}>
                    <img src="../src/storage/img/Vector (1).svg" alt="Back" />
                </div>
                <div className="title">
                    <strong>Ticket</strong>
                </div>
                <div className="dots">
                    <img src="../src/storage/img/more-vertical.svg" alt="More options" />
                </div>
            </section>
            <section className='ticket'>
                <div className='ticket_img'>
                    <img src="../src/storage/img/Rectangle 387.svg" alt="" />
                </div>
                <div className='ticket_name'>
                    <h1>Puss in Boots the Last Wish</h1>
                    <span>Show this ticket at the entrance</span>
                </div>
                <hr />
                <div className='cinema_ticket'>
                    <div className='cinema_text'>
                        <p>Cinema</p>
                        <div className='cinema_name'>
                            <p>HARTONO MALL 12</p>
                        </div>
                    </div>
                    <div className='cinema_img'>
                        <img src="../src/storage/img/Rectangle 376.svg" alt="" />
                    </div>
                </div>
                <div className='info_ticket'>
                    <div className='ticket_date'>
                        <p>Date</p> <p2>Time</p2>
                    </div>
                    <div className='date'>
                        <p>Sun, Feb 12th 2023</p> <p2>13:00</p2>
                    </div>
                    <div className='ticket_cinema'>
                        <p>Cinema Hall #</p> <p2>Seat</p2>
                    </div>
                    <div className='cinema_inf'>
                        <p>Cinema A</p> <p2>C5</p2>
                    </div>
                    <div className='ticket_cost'>
                        <p>Cost</p> <p2>Order ID</p2>
                    </div>
                    <div className='cost'>
                        <p>$26,99</p> <p2>12345678</p2>
                    </div>
                </div>
                <div className='barcode'>
                    <img src="../src/storage/img/Barcode.svg" alt="" />
                </div>
            </section>
        </div>
    );
};

export default Ticket;