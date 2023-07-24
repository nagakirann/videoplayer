import './index.css'

import ReactPlayer from 'react-player'

const VideoPlayer = () => (
  <div className="video-container">
    <h1 className="heading">Video Player</h1>
    <div className="responsive-container">
      <ReactPlayer
        controls="true"
        width="900px"
        height="400px"
        url="https://www.youtube.com/watch?v=Y6aYx_KKM7A&pp=ygULcmVhY3QgaW50cm8%3D"
      />
    </div>
  </div>
)

export default VideoPlayer
