import Comandi from './Comandi';
import playList from '../playlist'



function Anteprima(props){
    
    const {id, title, artist, minutes, album, year, imgUrl} = playList[props.parametro]
    return(
        <div className="containerAnteprima">
            <img id="imgAlbum" src={imgUrl} alt="" />
            <div className="textAlbum">
                <h2 id="title">{title} {year}</h2>
                <p id="artist">{artist}</p>
                <p id="album">{album}</p>
                <Comandi />
            </div>
        </div>
    )
}

export default Anteprima;


