import React from 'react'
import ItemCount from './ItemCount'



const Item = ({ title, img, price, description}) => {
  return (
    <article className='cards'>
      <h3>{title}</h3>
      <h3>{price}</h3>
      <img src={img} alt="" style={{width: "15rem"}} />
      <h4>{description}</h4>
      <ItemCount/>
      <div>
        <button>Ver descripción</button>
      </div>
      
    </article>
  )
}

export default Item