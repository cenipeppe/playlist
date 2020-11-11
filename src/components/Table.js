import { useState } from "react";
import playList from "../playlist";
import Anteprima from './Anteprima';

function Table() {
  
  function handleClick(e) {
    setTable(playList[e.target.value]);
    console.log(playList[e.target.value]);
  }

  const [table, setTable] = useState(playList[0]);

  return (
    <div className="containerApp">
      <Anteprima parametro={table} />
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
                value={id - 1}
                onClick={(handleClick)}>
                impostazioni
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Table;
