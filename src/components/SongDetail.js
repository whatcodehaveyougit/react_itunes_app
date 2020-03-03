import React from 'react';

function SongDetail(props) {
    // if(!props.songs) return null;

    function handleSelectSong(event) {
        // call song Selected function in song container
        props.songSelected(event.target.value);
    }

    return(
        // <li>{props.song.category.attributes.label}</li>


        <li>
            <header> {props.song["im:artist"].label} </header>
            <main> {props.song["im:name"].label} </main>
            <button value={props.song.id.attributes["im:id"]} onClick={handleSelectSong}>See details</button>
            
        </li>
    )

}
export default SongDetail
