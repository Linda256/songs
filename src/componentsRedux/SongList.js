import React from 'react';
import {connect} from 'react-redux';

import {selectSong} from "../actions"

//import SongItem from './SongItem'

class SongList extends React.Component{
    renderList(){
        return this.props.songs.map(song=>{
            return (
                <div className="item" key={song.Title}>
                    <div className="right floated content">
                        <button className="ui button primary" onClick={()=>this.props.dispatch(selectSong(song))}>
                            Select
                        </button>
                    </div>
                    <div className="content">{song.Title}</div>
                </div>
                
            )
        })
    }
    
    render(){
        console.log("this.props",this.props);
  
        return(
            <div className="ui divided list">
                {this.renderList()}
            </div>
        )
    }

}

const mapStateToProps = (state)=>{
    console.log("state songs",state.songs);
    return {songs:state.songs};
}
export default connect(mapStateToProps)(SongList);