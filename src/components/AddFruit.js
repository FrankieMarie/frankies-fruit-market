import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addFruit } from '../actions/fruits'

class AddFruit extends Component {
  state = {
    name: '',
    price: '',
    description: '',
    fruitImage: ''
  }
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addFruit(this.state)
  }
  render() {
      return (
        <div>
          <h1 id="add-fruit-header">Add a Fruit:</h1>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="name" className="label-text">Name</label>
            <input
              className="add-fruit-form"
              type="text"
              name="name"
              value={this.state.name}
              onChange={(e)=> this.setState({name: e.target.value})}
            /><br/>
            <label htmlFor="price" className="label-text">Price</label>
            <input
              className="add-fruit-form"
              type="number"
              name="price"
              value={this.state.price}
              onChange={(e)=> this.setState({price: e.target.value})}
            /><br/>
            <label htmlFor="description" className="label-text">Description</label>
            <input
              className="add-fruit-form"
              type="text"
              name="description"
              value={this.state.description}
              onChange={(e)=> this.setState({description: e.target.value})}
            /><br/>
            <label htmlFor="fruitImage" className="label-text">Image</label>
            <input
              className="add-fruit-form"
              type="file"
              name="fruitImage"
              onChange={(e)=> this.setState({fruitImage: e.target.files[0]})}
            /><br/><br/>
            <button className="btn" type="submit" >Submit</button>
          </form>
          <button className="hbtn"><a href="/" className="home-btn" >Home</a></button>
        </div>
      )
  }
}

const mapStateToProps = (state) => ({
  admin: state.admin
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  addFruit
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(AddFruit)
