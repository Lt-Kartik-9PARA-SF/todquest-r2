import React from 'react';
//import Logo from '../logo.svg'

function Navbar() {
  return (
    <div className='nav-container'>
    <div className='logo-container'>
      <img src={require('./logo.jpg')} alt='logo' style={{width:'70px'}} />
      </div>
      <div className='links'>
        <a href='#' >Home</a>
        <a href='#' >About</a>
        <a href='#' >How it works</a>
        <a href='#' >Contact</a>
        <button>Request Quote</button>
      </div>
      
    </div>
  )
}

export default Navbar;
