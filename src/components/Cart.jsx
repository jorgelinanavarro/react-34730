import React from 'react'
import { Link } from 'react-router-dom';
import { addDoc, collection, getFirestore} from 'firebase/firestore';
import { useCartContext } from '../context/CartContext'
import ItemCart from './ItemCart';


const Cart = () => {
  const { cart, totalPrice} = useCartContext();

// orden de compra
 const order = {
    buyer: {
      name: "Jorgelina",
      email: "jornavarro@gmail.com",
      phone: "3533477685",
      address: "S.M. Laspiur"
    },
    items: cart.map(product => ({id:product.id, title: product.title, price: product.price, quantity: product.quantity})),
    total: totalPrice(),
 }

// funcion para crear datos
 const handleClick = () => {
    const db = getFirestore();
    const ordersCollection = collection (db,'orders');
    addDoc(ordersCollection, order)
    .then(({id}) => console.log(id))
  }

  if (cart.length === 0) {
    return (
      <>
      <p>No hay elementos en el carrito</p>
      <Link to='/'>Hacer Compras</Link>
      </>
    )
  }



  return (
    <>
    {
      cart.map(product => <ItemCart key={product.id} product={product}/>)
    }
    <p>
      total: {totalPrice()}
    </p>
    <button onClick={handleClick}>Realizar Compra</button>
    </>
  )
}

export default Cart