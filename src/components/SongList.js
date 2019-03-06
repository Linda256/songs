import React from 'react';
import SongItem from './SongItem'

class SongList extends React.Component{
    render(){
        const songCollection=this.props.songs.map(song=><SongItem song={song} handleSelect={this.props.handleSelect}/>)
        return(
            <div>
                {songCollection}
            </div>
        )
    }

}

export default SongList