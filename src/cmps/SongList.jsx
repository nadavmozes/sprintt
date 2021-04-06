import { SongPreview } from "./SongPreview"

export function SongList({ songs }) {
    return (<section>
        {songs && songs.map(song => {
            return <SongPreview key={song.playlist_id} song={song} />
        })}
    </section>
    )
}
