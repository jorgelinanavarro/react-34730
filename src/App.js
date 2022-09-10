
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';





function App() { 

  return (
    <div className='container'>
      <BrowserRouter>
      <NavBar/>
       <Routes>
        <Route path='/item' element={<ItemListContainer/>}/>
        <Route path='/item/:id' element={<ItemDetailContainer/>} />
        
       </Routes>
      </BrowserRouter>
      <ItemListContainer greeting={'Bienvenidos a nuestra tienda online'}/>
    </div>
  );
}

export default App;
