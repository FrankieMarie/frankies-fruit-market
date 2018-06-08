import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { editFruit } from '../actions/fruits'

class EditFruit extends Component {
  state = {
    name: '',
    price: '',
    description: '',
    fruitImage: ''
  }

  render() {
    let thisFruit = this.props.fruits.filter(fruit => fruit._id === this.props.match.params.id)
    return (
      <div>
        <h1 id="add-fruit-header">Edit Fruit:</h1>
        <form >
          <label htmlFor="name" className="label-text">Name</label>
          <input
            className="add-fruit-form"
            type="text"
            name="name"
            value={thisFruit[0] !==undefined ? thisFruit[0].name : undefined}
          /><br/>
          <label htmlFor="price" className="label-text">Price</label>
          <input
            className="add-fruit-form"
            type="number"
            name="price"
            value={thisFruit[0] !== undefined ? thisFruit[0].price : undefined}
          /><br/>
          <label htmlFor="description" className="label-text">Description</label>
          <input
            className="add-fruit-form"
            type="text"
            name="description"
            value={thisFruit[0] !== undefined ? thisFruit[0].description : undefined}
          /><br/>
          <label htmlFor="fruitImage" className="label-text">Image</label>
          <input
            className="add-fruit-form"
            type="file"
            name="fruitImage"
            //value={thisFruit[0] !== undefined ? thisFruit[0].fruitImage : null}
          /><br/><br/>
          <button className="btn" type="submit" >Submit</button>
        </form>
        <button className="hbtn"><a href="/" className="home-btn" >Home</a></button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  fruits: state.fruits
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  editFruit
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(EditFruit)
