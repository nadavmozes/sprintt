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
    redner() {
        const { song } = this.props
        return <article>
            <img src={song.image_url} alt="" />
            <p>{song.name}</p>
            <p>{song.description}</p>
        </article>
    }
}