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
           <div className="ui container">
                <div className="ui grid">
                    <div className="eight wide column">
                        <SongList songs={this.state.songs} handleSelect={this.handleSelect}/>
                    </div>
                    <div className="six wide column">
                        <SongDetails className="eight wide column" currSong={this.state.currentSong} />
                    </div>
                </div>
            </div>
       )
    }
}

export default App;