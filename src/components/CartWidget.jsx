
import React from 'react';
import { useCartContext } from '../context/CartContext';




const CartWidget = () => {
  const {totalProducts} = useCartContext();
  

  return (
    <div className='cart'>
      <img src="./iconCartShopping.png" alt="logo" className='icon'/>
      <span>{totalProducts() || ''}</span>  
    </div>
  )
}

export default CartWidget