import React from 'react'
import './Navbax.css'
import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import Cookies from 'js-cookie'

const Navbar = () => {
  const {cartItems} = useCart()
  const usenavigate = useNavigate()

  const handleLogout = () => {
    const jwtToken = Cookies.remove("jwt")
    if (jwtToken === undefined) {
      usenavigate('/login')
    }
  }

  return (

    <nav className='nav-bg fixed-top'>
      <Link to='/'><img className='logo-img' src="https://cdn.iconscout.com/icon/free/png-256/free-flipkart-226594.png?f=webp" alt='logo' /></Link>
      <input className='input' type='text' placeholder='Search'/>
      <ul className='list-item'>
        <Link to='/mens'><li>Mens</li></Link>
        <Link to='/womens'><li>womens</li></Link>
        <Link to='/kids'><li>Kids</li></Link>
        <Link to="/register"><li>Register</li></Link>
        <Link to="/login"><li>Login</li></Link>
        <li onClick={handleLogout}>Logout</li>
        <Link to='/cart'><li>Cart <span className='span'>{cartItems.length}</span>
          </li></Link>
      </ul>
    </nav>

  )
}

export default Navbar
