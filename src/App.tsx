import React from 'react'
import Plyr from './videoPlayer'
import './videoPlayer/sass/plyr.scss'

// import Plyr from 'plyr-react'
// import 'plyr-react/dist/plyr.css'

function App() {
  const source: any = {
    type: 'video',
    sources: [
      {
        src: 'http://localhost:4000/download',
        type: 'video/mp4',
        size: 720,
      },
      {
        src: 'http://localhost:4000/download',
        type: 'video/mp4',
        size: 1080,
      },
    ],
    tracks: [
      {
        kind: 'captions',
        label: 'VN1',
        src: 'http://localhost:4000/vid.vtt',
        srcLang: 'vn',
      },
    ],
  }
  const options: any = {
    controls: [
      'play-large',
      'play',
      'progress',
      'current-time',
      'mute',
      'volume',
      'captions',
      'settings',
      'pip',
      'airplay',
      'fullscreen',
    ],
    settings: ['speed', 'quality', 'captions'],
    // captions: { active: true, language: 'auto', update: true },
    speed: { selected: 1, options: [0.5, 1, 1.5, 2] },
  }

  return <Plyr source={source} options={options} />
}

export default App
