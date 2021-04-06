import React from 'react'
import { songService } from "../services/songsService"
import { SongList } from "../cmps/SongList";

export class Home extends React.Component {
  state = {
    song: {
      "description": "Listen to the best songs from the 60's",
      "image_url": "https://i.scdn.co/image/ab67706f000000035337e18dc6803780d806efba",
      "name": "Best of 60's",
      "playlist_id": "3533"
    },
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
        <SongList songs={songs} />
        <h2>Recently played</h2>
        <h2>Featured playlists</h2>
        <h2>Mood</h2>
      </div>
    )
  }
}
