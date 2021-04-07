import React from 'react'

export class SongPreview extends React.Component {
    state = {
        song: ''
    }
    componentDidMount() {
        this.loadSong()
    }
    loadSong = () => {
        this.setState({
            song: this.props.song
        })
    }
    render() {
        const { song } = this.props
        return <ul className="songs-list">
            <img src={song.image_url} alt="" />
            <p className="song-name">{song.name}</p>
            <p className="song-desc">{song.description}</p>
        </ul>
    }
}