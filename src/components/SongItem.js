import React from 'react';

class SongItem extends React.Component{
   
    render(){
        return(
            <div>
                <p>{this.props.song.Title}</p>
                <button onClick={()=>this.props.handleSelect(this.props.song)}>
                Select</button>
            </div>
        )
    }
    
}

export default SongItem;