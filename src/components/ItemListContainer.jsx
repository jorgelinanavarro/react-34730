import React from 'react'
import ItemList from './ItemList'
import { useEffect, useState} from 'react'
import productsJson from '../datos.json'

const ItemListContainer = ( {greeting}) => {
  const [products, setProducts] = useState([]);

  const getProducts = (data,time) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if(data){
        resolve(data)
      }else{
        reject('Error')
      }
      },time);
  })

  useEffect(() => {
    getProducts(productsJson,2000)
    .then((resolve) => {
      setProducts(resolve)
    }).catch((err) => console.log(err, ": no hay productos"))
    },[])
  
  
    return (
    <>
     <div> {greeting} </div>
    <ItemList products={products}/>
    </>
   
  )
}

export default ItemListContainer