import React from 'react'

export const Hero = () => {
  return (
    <>
    <div className='hero-container'>
    <div className='hero-sec01'>
        <h2 className='title-01'>Little Lemon</h2>
        <h4>Chicago</h4>
        <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        <button type='button' className='btn-hero'>Reserve a table</button>
    </div>
    <div>
        <img className='hero-img' src="https://littlelemonrestaurantankitamwebsiteproject.netlify.app/static/media/restaurantFood.088c3dd386b046ca6ce7.jpg"/>
    </div>
    </div>
    </>
  )
}
