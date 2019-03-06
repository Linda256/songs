import React from 'react';

const SongDetails=(props)=>{
    return(
        <div>
            <h3>Details For</h3>
            <p>Title: {props.currSong.Title}</p>
            <p>Length: {props.currSong.Length}</p>
        </div>
    )
}

export default SongDetails;

