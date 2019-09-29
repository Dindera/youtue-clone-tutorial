import React from 'react'
import { Grid, Paper, Typography } from '@material-ui/core'

const VideoItem = ({ video, onSelectVideo }) => {
    return(
     <Grid item xs={12}>
       <Paper style={{ alignItems: 'center', padding: '15px', cursor: 'pointer'}} onClick={() => onSelectVideo(video)}>
        <img alt="thumbnail"  src={video.snippet.thumbnails.medium.url}/>
        <Typography variant="subtitle1"><b>{video.snippet.title}</b></Typography>
       </Paper>       
     </Grid>

    )
}

export default VideoItem