import React, { Component } from 'react'

import FruitList from './FruitList'
import TopNav from './TopNav'
import Footer from './Footer'

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
        <Footer />
      </div>
    )
  }
}

export default Main
