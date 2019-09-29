import React from 'react'
import { Paper, TextField } from '@material-ui/core'

class SearchBar extends React.Component{
  state = {
      searchTerm: ''
  }

  handleSubmit = (e) => {
    e.preventDefault()  
    const { searchTerm } = this.state
    const { onSubmitForm } = this.props 
    onSubmitForm(searchTerm)
   
}

  handleChange = (e) => {
    let val = e.target.value
    this.setState({ searchTerm : val})
  }

  render(){
    return (
        <Paper elevation={6} style={{ padding: '25px' }} >
            <form onSubmit={this.handleSubmit}>
                <TextField fullWidth label="Search..."  onChange={this.handleChange}/>
            </form>
        </Paper>
    )
  }
}

export default SearchBar