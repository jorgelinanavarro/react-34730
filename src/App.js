import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';


function App() {
  return (
    <div className='container'>
      <NavBar/>
      <ItemListContainer greeting={'Bienvenidos a este mundo magico'}/>
    </div>
  );
}

export default App;
