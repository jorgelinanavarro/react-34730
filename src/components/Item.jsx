import React from 'react'
import ItemCount from './ItemCount'

const Item = ({ title, img, price}) => {
  return (
    <article className='cards'>
      <h3>{title}</h3>
      <h3>{price}</h3>

      <img src={img} alt="" style={{width: "15rem"}} />
      <ItemCount/>
    </article>
  )
}

export default Item