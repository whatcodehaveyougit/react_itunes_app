import React, {Component, Fragment} from 'react';
import SongList from '../components/SongList.js'
import SongSelected from '../components/SongSelected'
import './SongContainer.css'

class SongsContainer extends Component{
    constructor(props) {
        super(props);
        this.state = {
            topSongs: [],
            selectedSong: ''
        }
        this.songSelected = this.songSelected.bind(this)
        // this.getSelectedSong = this.getSelectedSong.bind(this)
    }

    songSelected(songID){
        this.setState({selectedSong: songID})
    }

    // getSelectedSong(){
    //     const selectedSong = this.state.topSongs.find(song => 
    //         {return song.id.attributes["im:id"] === this.state.selectedSong})
    //         return selectedSong
    // }

    componentDidMount(){
        fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
        .then(res => res.json())
        .then(songs => this.setState({topSongs: songs.feed.entry}))
        .catch(err => console.error)
    }

    render(){
        const selectedSong = this.state.topSongs.find(song => 
            {return song.id.attributes["im:id"] === this.state.selectedSong})


        return(
            <Fragment>
                <h1>Top 20 songs:</h1> 
                <section>
                    <SongList topSongs={ this.state.topSongs } songSelected={this.songSelected}/>
                    <SongSelected selectedSong={selectedSong} />
                </section>
            </Fragment>
            

        )
    }

} 

export default SongsContainer;