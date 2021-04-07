import React from 'react'
import { songService } from "../services/songsService"
import { SongList } from "../cmps/SongList";
import RightArrow from "../assets/imgs/right-arrow.svg";
import LeftArrow from "../assets/imgs/left-arrow.svg"

export class Home extends React.Component {
  state = {
    songs: [],
  }
  componentDidMount() {
    this.loadSongs()
  }
  loadSongs = () => {
    console.log('songs', this.songs)
    songService.query()
      .then(songs => this.setState({ songs }))
  };


  render() {
    return (
      <div className="main-playlist">
        <div className="flex space-between">
          <h2>Recently played</h2>
          <div>
            <img src={LeftArrow} alt="left-arrow" className="left-arrow" onClick />
            <img src={RightArrow} alt="right-arrow" className="right-arrow" onClick />
          </div>
        </div>
        <SongList songs={this.state.songs} />
        <div className="flex space-between">
          <h2>Featured playlists</h2>
          <div>
            <img src={LeftArrow} alt="left-arrow" className="left-arrow" />
            <img src={RightArrow} alt="right-arrow" className="right-arrow" />
          </div>
        </div>
        <SongList songs={this.state.songs} />
        <div className="flex space-between">
          <h2>Mood</h2>
          <div>
            <img src={LeftArrow} alt="left-arrow" className="left-arrow" />
            <img src={RightArrow} alt="right-arrow" className="right-arrow" />
          </div>
        </div>
          <SongList songs={this.state.songs} />
      </div>
    )
  }
}
