import playList from '../playlist';

function Controls(){

    const {id, title, artist, minutes, album, year, imgUrl} = playList[0];
    return(
        <div className="containerControls">
            <img id="imgAlbumControls" src={imgUrl} alt="" />
            <div className="controlsTitle">
                <h5 id="title">{title} {year}</h5>
                <p id="artist">{artist}</p>
            </div>
            <div className="arrows">
                <i class="fa fa-step-backward" />
                <i className="fa fa-play" />
                <i class="fa fa-step-forward" />
                <i class="fa fa-redo-alt" />
            </div>
        </div>
    )
}

export default Controls;