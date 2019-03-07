import React, {Component} from 'react';
import { selectSong } from '../actions';

class SongItem extends Component{
   
    render(){
        const action=selectSong(this.props.song)
        return(
            <div>
                <p>{this.props.song.Title}</p>
                <button onClick={()=>store.dispatch(action)}>
                Select</button>
            </div>
        )
    }
    
}

export default SongItem;