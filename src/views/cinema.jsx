import React, { useState } from 'react';
import '../styles/cinema.css';
import { useNavigate } from 'react-router-dom';

const Cinema = () => {
    const [selectedSeats, setSelectedSeats] = useState([]); // Estado para asientos seleccionados
    const navigate = useNavigate();

    // Maneja el clic en los asientos
    const handleSeatClick = (seatNumber) => {
        setSelectedSeats((prevSelectedSeats) =>
            prevSelectedSeats.includes(seatNumber)
                ? prevSelectedSeats.filter(seat => seat !== seatNumber) // Deseleccionar asiento
                : [...prevSelectedSeats, seatNumber] // Seleccionar asiento
        );
    };

    // Renderiza un asiento (sin número visible)
    const renderSeat = (seatNumber) => {
        return (
            <div
                key={seatNumber}
                className={`seat ${selectedSeats.includes(seatNumber) ? 'selected' : ''}`} // Añade la clase 'selected' si está seleccionado
                onClick={() => handleSeatClick(seatNumber)} // Maneja el clic del asiento
            >
                {/* La caja del asiento sin contenido numérico */}
            </div>
        );
    };

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
                    {renderSeat(1)}
                    {renderSeat(2)}
                    {renderSeat(3)}
                    {renderSeat(4)}
                    {renderSeat(5)}
                </div>
                <div className='row2'>
                    <p>B</p>
                    {renderSeat(6)}
                    {renderSeat(7)}
                    {renderSeat(8)}
                    {renderSeat(9)}
                    {renderSeat(10)}
                    {renderSeat(11)}
                    {renderSeat(12)}
                </div>
                <div className='row3'>
                    <p>C</p>
                    {renderSeat(13)}
                    {renderSeat(14)}
                    {renderSeat(15)}
                    {renderSeat(16)}
                    {renderSeat(17)}
                    {renderSeat(18)}
                    {renderSeat(19)}
                    {renderSeat(20)}
                    {renderSeat(21)}
                </div>
                <div className='row4'>
                    <p>D</p>
                    {renderSeat(22)}
                    {renderSeat(23)}
                    {renderSeat(24)}
                    {renderSeat(25)}
                    {renderSeat(26)}
                    {renderSeat(27)}
                    {renderSeat(28)}
                    {renderSeat(29)}
                    {renderSeat(30)}
                </div>
                <div className='row5'>
                    <p>E</p>
                    {renderSeat(31)}
                    {renderSeat(32)}
                    {renderSeat(33)}
                    {renderSeat(34)}
                    {renderSeat(35)}
                    {renderSeat(36)}
                    {renderSeat(37)}
                    {renderSeat(38)}
                    {renderSeat(39)}
                </div>
                <div className='row6'>
                    <p>F</p>
                    {renderSeat(40)}
                    {renderSeat(41)}
                    {renderSeat(42)}
                    {renderSeat(43)}
                    {renderSeat(44)}
                    {renderSeat(45)}
                    {renderSeat(46)}
                    {renderSeat(47)}
                    {renderSeat(48)}
                </div>
            </section>
            <section className='info_seat'>
                <img src="../src/storage/img/Group 18105.svg"/>
            </section>
            <section className='date2'>
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
                <a href="./order" className="buy_ticket_link">
                    <div className='buy_ticket'>
                        <p>Buy Ticket</p>
                    </div>
                </a>
            </section>

        </div>
    );
};

export default Cinema;
