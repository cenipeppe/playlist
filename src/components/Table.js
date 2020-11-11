import { useState } from "react";
import playList from "../playlist";
import Anteprima from './Anteprima';


function Table(props) {

  // const [table, setTable] = useState(props.traccia);
  
  return (
    
      <div id="containerTable">
        <div id="trackRow2">
          <p>#</p>
          <p>titolo canzone</p>
          <p>artista</p>
          <p>minuti</p>
          <button className="buttonImp2">impostazioni</button>
        </div>

        {playList.map((track) => {
          const { id, title, artist, minutes, album, year, imgUrl } = track;
          return (
            <div id="trackRow" className={id % 2 && "evidenziato"}>
              <p>{id}</p>
              <p>{title}</p>
              <p>{artist}</p>
              <p>{minutes}</p>
              <button
                className="buttonImp"
                onClick={()=> {
                  // setTable(track);
                  props.statoApp(track)
                }}
              >
                Play
              </button>
            </div>
          );
        })}
      </div>
      
  );
  
}

export default Table;
