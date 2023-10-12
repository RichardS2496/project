import React, {useState} from 'react';
import BookingForm from './BookingForm';
import {useNavigate} from 'react-router-dom'



function Main({children}) {
  const navigate = useNavigate()
  const [availableTimes, setAvailableTimes] = useState(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]);
  function submitForm (data) {
    navigate("/confirmed")
    fetch("https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js")
    .then(res=>res.json())
    .then(data=>console.log(data))
  }
  return (
    <main>
      {children}
      <BookingForm setAvailableTimes={setAvailableTimes} submitForm={submitForm} availableTimes={availableTimes} />
    </main>
  );
}

export default Main;