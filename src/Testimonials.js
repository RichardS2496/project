import React from 'react'

export const Testimonials = () => {
  return (
    <div className='testimonials-container'>
        <div className='title-testimonials'>
            <h2>Testimonials</h2>
            <h5>Because they love and trust us</h5>
        </div>
        <div className='testimonials-cards-container'>
            <div className='testimonial-card'>
                <div>
                    <img className='img-testi' src='https://littlelemonrestaurantankitamwebsiteproject.netlify.app/static/media/profile2-copy-0.6055557532ec417e5819.jpg'/>
                </div>
                <div className='texts-testi'>
                    <h3>John Travolta</h3>
                    <p>"I loved Little Lemon and their specials"</p>
                    <img className='rating' src='https://littlelemonrestaurantankitamwebsiteproject.netlify.app/static/media/rating.33edb6d38b2d41f4bba0.png'/>
                </div>
            </div>
            <div className='testimonial-card'>
                <div>
                    <img className='img-testi' src='https://littlelemonrestaurantankitamwebsiteproject.netlify.app/static/media/profile2.9b517ae64c4b6bab8ee8.jpg'/>
                </div>
                <div className='texts-testi'>
                    <h3>Diana Nielsen</h3>
                    <p>"I'm pretty sure I'll try the Greek salad again."</p>
                    <img className='rating' src='https://littlelemonrestaurantankitamwebsiteproject.netlify.app/static/media/rating.33edb6d38b2d41f4bba0.png'/>
                </div>
            </div>
            <div className='testimonial-card'>
                <div>
                    <img className='img-testi' src='https://littlelemonrestaurantankitamwebsiteproject.netlify.app/static/media/profile3.368a476e22b04c93c00f.jpg'/>
                </div>
                <div className='texts-testi'>
                    <h3>Peter Pan</h3>
                    <p>"I've received the best attention here"</p>
                    <img className='rating' src='https://littlelemonrestaurantankitamwebsiteproject.netlify.app/static/media/rating.33edb6d38b2d41f4bba0.png'/>
                </div>
            </div>
        </div>
    </div>
  )
}
