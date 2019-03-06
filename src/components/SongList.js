import React from 'react';
import SongItem from './SongItem'

class SongList extends React.Component{
    render(){
        const songCollection=this.props.songs.map(song=><SongItem song={song} />)
        return(
            <div>
                {songCollection}
            </div>
        )
    }

}

export default SongList