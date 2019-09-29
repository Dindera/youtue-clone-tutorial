import React from 'react'
import { Paper, Typography } from '@material-ui/core'

const VideoList = ({video}) => {
   if(!video) return <div>Loading...</div>
   const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`

    return (
      <React.Fragment>
          <Paper elevation={6} style={{ height: '20%'}}>
            <iframe frameBorder="0" title="Video Player" height="100%" width="100%" src={videoSrc}/>
          </Paper>
          <Paper elevation={6} style={{ padding: '10px'}}>
            <Typography variant="h4">{video.snippet.title} - {video.snippet.channelTitle}</Typography>
            <Typography variant="subtitle1">{video.snippet.channelTitle}</Typography>
            <Typography variant="subtitle2">{video.snippet.description}</Typography>           
          </Paper>
      </React.Fragment>
    )
}

export default VideoList