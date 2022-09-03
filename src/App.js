
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';




function App() { 

  return (
    <div className='container'>
      <NavBar/>
      <ItemCount/>
      <ItemListContainer greeting={'Bienvenidos a nuestra tienda online'}/>
    </div>
  );
}

export default App;
