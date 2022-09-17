import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from "./ItemDetail";
import products from "./ProductsData";



const ItemDetailContainer = () => {

    const [data, setData] = useState({});
    const { detalleId } = useParams();

     

    useEffect(() => {
      const getData = new Promise(resolve => {
        setTimeout(() => {
          resolve(products);
        }, 3000);
      });
      getData.then(res => setData(res.find(product => product.id === parseInt(detalleId))));
    }, [])
    


  return (
    <div><ItemDetail data={data}/></div>
  )
}

export default ItemDetailContainer