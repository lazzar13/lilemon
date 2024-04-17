import '../App.css';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';
import { BrowserRouter as Router } from 'react-router-dom';


function HomePage() {
    return (
      <div><Nav></Nav>
      <Main></Main>
      <Footer></Footer>
      </div>
    );
  }
  export default HomePage;