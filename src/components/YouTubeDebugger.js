// Code YouTubeDebugger Component Here
import React from 'react'

class YouTubeDebugger extends React.Component {
  constructor() {
    super()

    this.state = {
       errors: [],
       user: null,
       settings: {
         bitrate: 8,
         video: {
           resolution: '1080p'
         }
       }
    }
  }
  hanleBitrateClick = () => {
    console.log("bitrate!")
  }

  hanleResolutionClick = () => {
    console.log("resolution!")
  }

  render() {
    return (
      <button className="bitrate" onClick={}>Hello World</button>
      <button className="resolution" onClick={}>Hello World</button>
    )
  }
}

export default YouTubeDebugger
