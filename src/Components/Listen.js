import React, { Component } from 'react'
import SpotifyPlayer from 'react-spotify-player';

export class Listen extends Component {
    render() {
        const size = {
            width: '100%',
            height: 300,
          };
          const view = 'list'; // or 'coverart'
          const theme = 'black'; // or 'white'
        return (
            <div>
                <h1>Spotify Playlist Link </h1>
                <SpotifyPlayer
                    uri="spotify:playlist:1mlxtlCPgbDDvUHwx9xFK4"
                    size={size}
                    view={view}
                    theme={theme} />
            </div>
        )
    }
}

export default Listen
