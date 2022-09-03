import React from 'react'
import Item from './Item'

const ItemList = ({products}) => {
  return (
    <div>{products.map(p => <Item key={p.id}/>)}</div>
    
  )
}

export default ItemList