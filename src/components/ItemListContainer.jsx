
import React, { useEffect, useState } from 'react'
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import ItemList from './ItemList';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const querydb = getFirestore();
    const queryCollection = collection(querydb,'products');
    getDocs(queryCollection)
        .then(res => setProducts(res.docs.map(product => ({id: product.id, ...product.data()}))));
  }, []);


  return (
    <div>
      <ItemList products={products}/>
    </div>
  )
}

export default ItemListContainer