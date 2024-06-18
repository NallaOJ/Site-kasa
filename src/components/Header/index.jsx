import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import './header.css'

function Header() {
  return (
    <div className='header'>
      <Link to='/'>
        <img src={logo} alt="Logo kasa" className="logo-kasa" />
      </Link>
      <nav className='nav-header'>
        <Link to='/'>Accueil</Link>
        <Link to='/about'>A Propos</Link>
      </nav>
    </div>
  );
}

export default Header;
