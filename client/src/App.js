import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Landing from './components/layout/Landing/index'
import Navbar from './components/layout/Navbar/Navbar'
import About from './components/About'
import Gallery from './components/Gallery/index'
import Contact from './components/Contact/index'
import FooterIndex from './components/layout/Footer/Index';
import './App.css';


const App = () => {
  return (
    <Router>
    <Fragment>
    <Navbar />
      <Routes>
        <Route exact path="/" element={ <Landing /> }/>
        <Route path="/about" element={ <About /> } />
        <Route path="/gallery" element={ <Gallery /> } />
        <Route path="/contact" element={ <Contact /> } />
      </Routes>
    <FooterIndex />
    </Fragment>
    </Router>
  );
}

export default App;
