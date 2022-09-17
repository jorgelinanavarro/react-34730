import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from './ItemCount'
import { CartContext } from '../context/CartContext'





const Item = ({ title, img, price, description}) => {
  const nombre = useContext(CartContext);

  

  return (
    <article className='cards'>
      <h3>{title}</h3>
      <h3>{price}</h3>
      <img src={img} alt="" style={{width: "15rem"}} />
      <h4>{description}</h4>
      <ItemCount/>
      <div>
        <button><Link to={'/detalle/detalleId'}>Ver descripcion</Link></button>
      </div>
      
    </article>
  )
}

export default Item