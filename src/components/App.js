import React from 'react';

import SongList from './SongList';
import SampleSongs from '../SampleData';
import SongDetails from './SongDetails'


class App extends React.Component{
    constructor(){
        super();
        this.state={
            songs:SampleSongs,
            currentSong:SampleSongs[0]
        }
    }

    handleSelect=(currSong)=>{
        this.setState({currentSong:currSong})
    }
    render(){
       return (
            <div>
                <SongList songs={this.state.songs} handleSelect={this.handleSelect}/>
                <SongDetails currSong={this.state.currentSong} />
            </div>
       )
    }
}

export default App;