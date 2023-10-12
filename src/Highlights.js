import React from 'react'

export const Highlights = () => {
  return (
    <div className='highlights-container'>
    <h2 className='title-02'>Specials</h2>
    <div className='special-container'>
        <div className='card'>
            <div>
                <img className='img-spc' src='https://littlelemonrestaurantankitamwebsiteproject.netlify.app/static/media/greek-salad1.da4153859902e076458c.jpg'/>
            </div>
            <div className='content-card'>
                <div className='title-sec-card'>
                    <h4>Greek Salad</h4>
                    <h5>$12.99</h5>
                </div>
                <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                <button className='btn-card'>Order Delivery</button>
            </div>
        </div>
        <div className='card'>
            <div>
                <img className='img-spc' src='https://littlelemonrestaurantankitamwebsiteproject.netlify.app/static/media/bruchetta.40310f42c67ccfe9571e5e5127e98059.svg'/>
            </div>
            <div className='content-card'>
                <div className='title-sec-card'>
                    <h4>Greek Salad</h4>
                    <h5>$9.99</h5>
                </div>
                <p>Our Bruschetta is made from homemade grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Topped with fresh vegetables.</p>
                <button className='btn-card'>Order Delivery</button>
            </div>
        </div>
        <div className='card'>
            <div>
                <img className='img-spc' src='https://littlelemonrestaurantankitamwebsiteproject.netlify.app/static/media/bruchetta.40310f42c67ccfe9571e5e5127e98059.svg'/>
            </div>
            <div className='content-card'>
                <div className='title-sec-card'>
                    <h4>Greek Salad</h4>
                    <h5>$14.99</h5>
                </div>
                    <p>This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                    <button className='btn-card'>Order Delivery</button>
            </div>
        </div>
    </div>
    </div>
  )
}
