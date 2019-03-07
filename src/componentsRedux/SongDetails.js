import React from 'react';
import {connect} from 'react-redux'

const SongDetails=(props)=>{
    return(
        <div>
            <h3>Details For</h3>
            <p>Title: {props.currSong.Title}</p>
            <p>Length: {props.currSong.Length}</p>
        </div>
    )
}

const mapStateToProps=(state)=>{
    return {currSong:state.selectedSong}
}

export default connect(mapStateToProps)(SongDetails);

