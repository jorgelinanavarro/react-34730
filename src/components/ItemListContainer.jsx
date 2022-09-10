
import React, { useEffect, useState } from 'react'
import productsJson from "../datos.json"
import ItemList from './ItemList';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  const getProducts = (data,time) => 
    new Promise((resolve, reject) => {
     setTimeout(() => {
      if(data){
        resolve(data);
      }else{
        reject("Error");
      }
     },time)
    
  });

  useEffect(() => {
    getProducts(productsJson, 3000)
    .then((resolve)=>{
      setProducts(resolve)
    })
    .catch((err)=>console.log(err, "no hay productos"))
  }, []);


  return (
    <div>
      <ItemList products={products}/>
    </div>
  )
}

export default ItemListContainer