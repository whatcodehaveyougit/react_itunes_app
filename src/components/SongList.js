import React from 'react';
import SongDetail from './SongDetail.js'

function SongList(props) {

    const songObjects = props.topSongs.map(song => {
        return(
            <SongDetail key={song.id.attributes["im:id"]} song={song} songSelected={props.songSelected} ></SongDetail>
        )
    })

    return(
        <ol>
            {songObjects}
        </ol>
    )
}

export default SongList