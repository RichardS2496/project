import React from 'react';

function Footer() {
  return (
    <footer className='footer-container'>
      <img className='header-img' src="https://littlelemonrestaurantankitamwebsiteproject.netlify.app/static/media/Logo.370f832fad423c516d56.png" alt="Logo de Little Lemon" />
      <p>2023 Little Lemon</p>
      <ul>
        <li><a href="/terminos">Términos de uso</a></li>
        <li><a href="/privacidad">Política de privacidad</a></li>
      </ul>
    </footer>
  );
}

export default Footer;