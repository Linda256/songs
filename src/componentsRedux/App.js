import React from 'react';

import SongList from './SongList';
import SongDetails from './SongDetails'


class App extends React.Component{
    constructor(){
        super();
    }

    handleSelect=(currSong)=>{
        this.setState({currentSong:currSong})
    }
    render(){
       return (
           <div className="ui container grid">
                <div className="ui row">
                    <div className="eight wide column">
                        <SongList />
                    </div>
                    <div className="six wide column">
                        <SongDetails className="eight wide column"  />
                    </div>
                </div>
            </div>
       )
    }
}

export default App;