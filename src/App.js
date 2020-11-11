import './App.css';
import Anteprima from './components/Anteprima';
import Header from './components/Header';
import playList from './playlist';
import Table from './components/Table';
import Controls from './components/Controls';
import { useState } from 'react'


function App(){

  // GESTIAMO LO STATO DA APP SIA PER PASSARLO IN CONTROLS CHE IN TABLE E ANTEPRIMA
  const [stato, setStato] = useState(playList[0].id);
  const [isPlay, setIsPlay] = useState(true);
  function selectTrack(newObj){
    setStato(newObj)
  }
  // Funzione per selezionare la traccia precedente -  passata in Controls
  function backTrack(id){
    id>0 ? setStato(id - 1) : setStato (playList.length - 1)
  }
  // Funzione per selezionare la traccia successiva -  passata in Controls
  function nextTrack(id) {
    id < playList.length - 1 ? setStato(id + 1) : setStato(0)
  }

  return(
    <>
    <div className="container">
      <Header />
        <div className="containerApp">
          <Anteprima parametro={stato} />
          <Table traccia={stato} statoApp={selectTrack}/>
        </div>
    </div>

      <Controls traccia={stato} back={backTrack} next={nextTrack} />
    </>
  )
}



export default App;