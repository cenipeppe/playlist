import playList from '../playlist'

function Controls(props){

    const {id, title, artist, year, imgUrl} = playList[props.traccia];
    return(
        <div className="containerControls">
            <img id="imgAlbumControls" src={imgUrl} alt={title} />
            <div className="controlsTitle">
                <h5 id="title">{title} {year}</h5>
                <p id="artist">{artist}</p>
            </div>
            <div className="arrows">
                <i className="fa fa-step-backward" onClick={() => props.back(id)} />
                <i className="fa fa-pause" />
                <i className="fa fa-step-forward" onClick={() => props.next(id)} />
                <i className="fa fa-redo-alt" />
            </div>
        </div>
    )
}

export default Controls;