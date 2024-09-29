// seats.js
document.addEventListener("DOMContentLoaded", () => {
    const seats = document.querySelectorAll('.seat, .seat2, .seat3');
    
    seats.forEach(seat => {
        seat.addEventListener('click', () => {
            // Cambia el color de fondo del asiento clickeado a rojo
            seat.style.backgroundColor = 'red';
        });
    });
});
