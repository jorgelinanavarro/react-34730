import React from 'react'
import CartWidget from './CartWidget'


const NavBar = () => {
  return (
    <div className='navBar'>
        <img src="./nubeLogo.png" alt="logo" className='img'/>
        <a href='#' className='navEnlace'>Inicio</a>
        <a href='#' className='navEnlace'>Productos</a>
        <a href='#' className='navEnlace'>Sobre Mi</a>
        <a href='#' className='navEnlace'>Contacto</a>
        <CartWidget/>
    </div>
  )
}

export default NavBar