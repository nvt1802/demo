import React from "react"
import "./styles/scss/video-react.scss"
import {
  Player,
  ControlBar,
  ForwardControl,
  ClosedCaptionButton,
  PlaybackRate,
  ReplayControl,
  VolumeMenuButton,
} from "./video"
import vid from "./source/vid.mp4"
import sub from "./source/vid.vtt"

function App() {
  return (
    <Player
      autoPlay
      poster="/assets/poster.png"
      // src={vid}
      // width={800}
      // height={387}
      // fluid={false}
    >
      <source src={vid} type="video/mp4" />
      <track
        kind="captions"
        src={sub}
        srcLang="en"
        label="Vietnamese"
        default
        style={{ marginBottom: "2em" }}
      />
      <ControlBar autoHide={false}>
        <ReplayControl seconds={5} order={3} />
        <ForwardControl seconds={5} order={5} />
        <ClosedCaptionButton order={7} />
      </ControlBar>
    </Player>
  )
}

export default App
