import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import CartProvider, { CartContext } from './context/CartContext';









function App() { 

  return (
    <div className='container'>
      <BrowserRouter>
      <CartProvider value=''>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/detalle/:detalleId' element={<ItemDetailContainer/>}/>
      </Routes>
      </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
