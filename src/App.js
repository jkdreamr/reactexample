import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import Home from './components/pages/Home'
import Artists from './components/pages/Artists'
import Contact from './components/pages/Contact'
import SignUp from './components/pages/SignUp'

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/artists' exact element={<Artists/>} />
        <Route path='/contact' exact element={<Contact/>} />
        <Route path='/sign-up' exact element={<SignUp/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
