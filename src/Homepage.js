import './App.css';
import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';
import { Hero } from './Hero';
import { Highlights } from './Highlights';
import { Testimonials } from './Testimonials';
import { About } from './About';


function App() {
  return (
    <>
      <Header>
        <Nav></Nav>
      </Header>
      <Main>
        <Hero/>
        <Highlights/>
        <Testimonials/>
        <About/>
    </Main>
      <Footer/>
    </>
  );
}

export default App;
