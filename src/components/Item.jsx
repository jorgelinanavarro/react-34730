import React from 'react'

const Item = ({name, price, image}) => {
  return (
    <div>
        <h1>{name}</h1>
        <h3>{price}</h3>
        <img src={image} alt="" />
    </div>
  )
}

export default Item