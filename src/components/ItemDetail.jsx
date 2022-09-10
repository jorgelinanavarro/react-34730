import React from 'react'

const ItemDetail = ({item: {title, price, description, img}}) => {
  return (
    <div>
        <div>{title}</div>
        <div>{price}</div>
        <div>{description}</div>
        <div>{img}</div>
        
    </div>
  )
}

export default ItemDetail