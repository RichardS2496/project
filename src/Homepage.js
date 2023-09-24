import './App.css';
import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';
import { Hero } from './Hero';

function App() {
  return (
    <>
      <Header>
        <Nav></Nav>
      </Header>
      <Main>
        <Hero></Hero>
    </Main>
      <Footer></Footer>
    </>
  );
}

export default App;
