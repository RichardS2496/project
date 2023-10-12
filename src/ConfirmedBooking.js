import React from 'react'
import {useNavigate} from 'react-router-dom'

function ConfirmedBooking(){
    const navigate = useNavigate()
    function goHome(){
        navigate ("/")
        
    }
    return(
        <>
        <h2>The booking has been confirmed</h2>
        <button type='button' className='btn-hero' onClick={goHome} >Done</button>
        
        </>
    )
}

export default ConfirmedBooking;