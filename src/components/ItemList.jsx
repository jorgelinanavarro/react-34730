import React from 'react'
import Item from './Item'

const ItemList = ({products}) => {
  return (
    <div>
      {products.length ? products.map((product) => <Item key={product.id} {...product}/>) : <h2>Cargando....</h2>}
    </div>
    )
}

export default ItemList