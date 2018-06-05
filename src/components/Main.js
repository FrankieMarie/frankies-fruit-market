import React, { Component } from 'react'

import FruitList from './FruitList'
import TopNav from './TopNav'

class Main extends Component {
  state = {
    searchText: ''
  }

  onTextChange = e => {
    this.setState({searchText: e.target.value});
  }
  render() {
    return (
      <div>
        <TopNav onTextChange={this.onTextChange} />
        <FruitList searchText={this.state.searchText} />
      </div>
    )
  }
}

export default Main
