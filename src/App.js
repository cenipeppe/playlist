import './App.css';
import Anteprima from './components/Anteprima';
import Header from './components/Header';
import playList from './playlist';
import Table from './components/Table';
import Controls from './components/Controls';
import { useState } from 'react'


function App(){

  // GESTIAMO LO STATO DA APP SIA PER PASSARLO IN CONTROLS CHE IN TABLE E ANTEPRIMA
  const [stato, setStato] = useState(playList[0]);
  function myFunc(newObj){
    setStato(newObj)
  }
 

  return(
    <>
    <div className="container">
      <Header />
        <div className="containerApp">
          <Anteprima parametro={stato} />
          <Table traccia={stato} statoApp={myFunc}/>
        </div>
    </div>

    <Controls traccia={stato}/>
    </>
  )
}



export default App;