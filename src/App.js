
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';





function App() { 

  return (
    <div className='container'>
      <NavBar/>
      <ItemListContainer greeting={'Bienvenidos a nuestra tienda online'}/>
    </div>
  );
}

export default App;
