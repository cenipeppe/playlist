import './App.css';
import Anteprima from './components/Anteprima';
import Header from './components/Header';
import playList from './playlist';
import Table from './components/Table';


function App(){
  return(
    <div className="container">
      <Header />
      <Table />
    </div>
  )
}


export default App;