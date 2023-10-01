import './App.css';
import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';
import { Hero } from './Hero';
import { Highlights } from './Highlights';
import { Testimonials } from './Testimonials';
import 'bootstrap/dist/css/bootstrap.min.css';


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
    </Main>
      <Footer></Footer>
    </>
  );
}

export default App;
