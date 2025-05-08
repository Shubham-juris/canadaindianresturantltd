import './App.css';
import { Link, Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Home from './pages/Home/Home';
import Menu from './pages/Menu/Menu';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Footer from './components/Footer/Footer';
import logo from '../src/utils/images/logo.png'; // Replace with your new logo path

function App() {
  return (
    <div id='app'>
      <Navbar expand='lg' className='fixed-top bg-white shadow-sm py-2'>
        <Container>
          <Navbar.Brand>
            <Link to='/' className='navbar-brand text-success d-flex align-items-center'>
              <img src={logo} alt="Calgary Veg Logo" className='me-2 border-white logo-img' />
              <span className='lh-sm fw-bold'>
                Calgary  Veg 
                <br />
               Indian Restaurant
              </span>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse className='text-center' id='basic-navbar-nav'>
            <Nav className='me-auto justify-content-center w-100'>
              <Link to='/' className='nav-link text-uppercase text-success text-center fw-semibold'>Home</Link>
              <Link to='/menu' className='nav-link text-uppercase text-success text-center fw-semibold'>Menu</Link>
              <Link to='/about' className='nav-link text-uppercase text-success text-center fw-semibold'>About</Link>
              <Link to='/contact' className='nav-link text-uppercase text-success text-center fw-semibold'>Contact</Link>
            </Nav>
            <Link to='/contact'>
              <button type='button' className='btn btn-success rounded-0 text-capitalize my-3 my-lg-0 ms-lg-4 text-nowrap'>
                Book a Table
              </button>
            </Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
