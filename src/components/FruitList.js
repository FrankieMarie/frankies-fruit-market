import React, { Component } from 'react'
import { connect } from 'react-redux'

import Fruit from './Fruit'

class FruitList extends Component {
  render() {
    const displayFruits = this.props.fruits.filter(fruit => fruit.name.toLowerCase().indexOf(this.props.searchText.toLowerCase()) !== -1);
    const listOfFruits = displayFruits.map(fruit => <Fruit key={fruit._id} fruit={fruit} />)
    return (
      <div className="fruit-list">
        {listOfFruits}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  fruits: state.fruits
})

export default connect(mapStateToProps)(FruitList)
