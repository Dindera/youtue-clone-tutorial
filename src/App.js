import React from 'react';
import './App.css'
import { Grid } from '@material-ui/core'
import youtube from './api/youtube'
import {VideoList, VideoDetail, SearchBar} from './components'

class App extends React.Component {
   state = {
      videos: [],
      selectedVideo: null,
   }
   componentDidMount(){
      this.handleSubmit('Programming')
   }

   handleSubmit = async (searchTerm) => {
     const response = await youtube.get('search', 
     { 
      params: {
      part: 'snippet',
      maxResults: 8,
      key: 'AIzaSyDalq6rvVMMQdBoLrfEP3PbD2t5rAUwwTE',
      q: searchTerm
        }
   }) 
    
    this.setState({
       videos: response.data.items, 
       selectedVideo: response.data.items[0]
      })
   }

   onSelectVideo = (video) => {
      this.setState({selectedVideo: video})
   }

  render() {
     const { videos, selectedVideo } = this.state
    return (
       <Grid justify="center" container spacing={10}>
         <Grid item xs={12}>
          <Grid container spacing={5}>
             <Grid item xs={12}>
                <SearchBar onSubmitForm={this.handleSubmit}/>
             </Grid>
             <Grid item xs={8}>
                <VideoDetail video={selectedVideo}/>
             </Grid>
             <Grid item xs={4}>
                <VideoList videos={videos} onSelectVideo={this.onSelectVideo}/>
             </Grid>
          </Grid>
         </Grid>
       </Grid>
    )
  }
}

export default App;
