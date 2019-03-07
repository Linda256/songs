import {combineReducers} from 'redux';

export const selectedSongReducer = (currentSong={
    Title: "Love you forever",
    Length:"2:57"
},action)=>{
    switch (action.type){
        case "SONG_SELECTED": 
            return action.payload;
    }
    return currentSong;
}

export const songsReducer = () =>{
    return (
        [
            {
                Title: "Love you forever",
                Length:"2:57"
            },
            {
                Title: "Raining days",
                Length:"3:17"
            },
            {
                Title: "Rose, rose,I love you",
                Length:"4:08"
            },
            
        ]
    )
    
}

export default combineReducers({
    selectedSong:selectedSongReducer,
    songs:songsReducer
})