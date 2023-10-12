import './App.css';
import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';
import { Hero } from './Hero';
import BookingForm from './BookingForm'

function Bookingpage () {
  return (
    <>
      <Header>
        <Nav/>
      </Header>
      <BookingForm/>
      <Footer></Footer>
    </>
  );
}

export default Bookingpage;
