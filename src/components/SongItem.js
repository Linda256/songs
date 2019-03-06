import React from 'react';

const SongItem=(props)=>{
    return(
        <div>
            <p>{props.song.Title}</p>
            <button>Select</button>
        </div>
    )
}

export default SongItem;