import React, { Component } from 'react'
import { connect } from 'react-redux'

class AddFruit extends Component {
  render() {
    const admin = this.props.admin
    if (admin.isAuthed) {
      return (
        <div>
          <h1 id="add-fruit-header">Add a Fruit:</h1>
          <form>
            <label htmlFor="name" className="label-text">Name</label>
            <input
              className="add-fruit-form"
              type="text"
              name="name"
            /><br/>
            <label htmlFor="price" className="label-text">Price</label>
            <input
              className="add-fruit-form"
              type="number"
              name="price"
            /><br/>
            <label htmlFor="description" className="label-text">Description</label>
            <input
              className="add-fruit-form"
              type="text"
              name="description"
            /><br/>
            <label htmlFor="fruitImage" className="label-text">Image</label>
            <input
              className="add-fruit-form"
              type="file"
              name="fruitImage"
            />
          </form>
          <button className="hbtn"><a href="/" className="home-btn" >Home</a></button>
        </div>
      )
    } else {
      return (
        <div>
          <h1 style={{textAlign: 'center'}}>ACCESS DENIED</h1>
          <button className="hbtn"><a href="/" className="home-btn" >Home</a></button>
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => ({
  admin: state.admin
})

export default connect(mapStateToProps)(AddFruit)
