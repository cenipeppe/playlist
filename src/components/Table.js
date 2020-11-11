import playList from "../playlist";


function Table(props) {
  
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
            <div key={id} id="trackRow" className={!(id % 2) && "evidenziato"} 
            style={props.traccia == id ? {backgroundColor: 'red'} : {}}>
              <p>{id + 1}</p>
              <p>{title}</p>
              <p>{artist}</p>
              <p>{minutes}</p>
              <button
                className="buttonImp"
                onClick={()=> {
                  // setTable(track);
                  props.statoApp(id)
                }}
              >
                {props.traccia == id ? 'Pause' : 'Play'}
              </button>
            </div>
          );
        })}
      </div>
  );
  
}

export default Table;
