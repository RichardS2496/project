import React, { useState } from 'react';

function BookingForm(props) {
    const { availableTimes, setAvailableTimes, submitForm } = props;
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("");
  const [occasion, setOccasion] = useState("");

  function updateAvailableTimes(newTimes) {
    props.setAvailableTimes(newTimes);
  }
  function updateTimes(state, action) {
    switch (action.type) {
      case 'UPDATE_TIMES':
        return state;
      default:
        return state;
    }
  }
  const handleSubmit = (event) => {
    submitForm({date, time, guests, occasion});
    event.preventDefault();
  };

  return (
    <div id='booking' className='form-container'>
      <form onSubmit={handleSubmit} style={{display: "grid", maxWidth: "200px", gap: "20px"}}>
  <label htmlFor="res-date">Elige la fecha</label>
  <input type="date" id="res-date" value={date} onChange={(e) => setDate(e.target.value)} required />

  <label htmlFor="res-time">Elige el tiempo</label>
  <select id="res-time" value={time} onChange={(e) => setTime(e.target.value)} required>
    {availableTimes.map(time => (
      <option key={time} value={time}>
        {time}
      </option>
    ))}
  </select>

  <label htmlFor="guests">Número de invitados</label>
  <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={(e) => setGuests(e.target.value)} required />

  <label htmlFor="occasion">Ocasión</label>
  <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)} required>
    <option>Cumpleaños</option>
    <option>Aniversario</option>
  </select>

  <input className='btn-form' type="submit" value="Haz tu reservación" />
</form>
    </div>
  );
}

export default BookingForm;