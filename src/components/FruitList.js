import React, { Component } from 'react'
import { connect } from 'react-redux'

import Fruit from './Fruit'

class FruitList extends Component {
  render() {
    const listOfFruits = this.props.fruits.map(fruit => <Fruit key={fruit._id} fruit={fruit} />)
    return (
      <div className="fruit-list">
        {listOfFruits}
      </div>
    )
  }
}

function mapStateToProps(state){
  return {fruits: state.fruits}
}

export default connect(mapStateToProps)(FruitList)
