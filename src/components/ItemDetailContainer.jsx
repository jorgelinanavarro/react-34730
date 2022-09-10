import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from "./ItemDetail"
import products from "./ProductsData"

const ItemDetailContainer = () => {

    const [item, setItem] = useState({});
     const { id } = useParams()

    useEffect(() => {
      getItem().then(data => {
        setItem(data)
      })
    }, [])
    
    const getItem = () => {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(products.find(p => p.id == id))
            }, 2000);
            
        })
    }


  return (
    <div><ItemDetail/></div>
  )
}

export default ItemDetailContainer