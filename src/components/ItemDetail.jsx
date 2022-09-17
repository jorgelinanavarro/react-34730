import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount'
import { useCartContext } from '../context/CartContext';

const ItemDetail = ({data}) => {
  const [goToCart,setGoToCart] = useState(false);
  const {addProduct} = useCartContext();


  const onAdd = (quantity) => {
    setGoToCart(true);
    addProduct(data, quantity);
  }


  return (
    <div>
        <div>
          <img src="{data.img}" alt="" />
        </div>
        <div>
          <h1>{data.title}</h1>
          <h3>{data.price}</h3>
          {
            goToCart 
            ? <Link to='/cart'>Terminar Compra</Link> 
            : <ItemCount initial={3} stock={5} onAdd={onAdd}/>
          }
        </div>
        
    </div>
  )
}

export default ItemDetail