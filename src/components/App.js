import React from 'react';

import SongList from './SongList';
import SampleSongs from '../SampleData';


class App extends React.Component{
    constructor(){
        super();
        this.state={
            songs:SampleSongs
        }
    }
    render(){
       return (
            <div>
                <SongList songs={this.state.songs}/>
            </div>
       )
    }
}

export default App;