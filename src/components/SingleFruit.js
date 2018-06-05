import React, { Component } from 'react'
import { connect } from 'react-redux'

import TopNav from './TopNav'

class SingleFruit extends Component {
  render() {
    let fruit = this.props.fruit
    const fruitImages = this.props.images.map(img => <img key={img._id} src={"http://localhost:8000/"+img.image} alt=''/>)
    if(fruit){
      return (
        <div>
          <TopNav /><br/>
          <div className="single-fruit">
            <button className="btn back" onClick={() => this.props.history.goBack()}>Go back</button><br/>
            <img className="single-fruit-img" src={"http://localhost:8000/"+fruit.fruitImage} alt=""/>
            <div className="single-fruit-content">
              <h2>{fruit.name}</h2>
              <small>$ {fruit.price} / box</small>
              <p>{fruit.description}</p>
              <small><i>Each box contains 10-20 pounds of fruit. Amount varies depending on fruit density, size, and type of fruit being packaged. Boxes are shipped through USPS priority mail.</i></small><br/><br/>
              <button className="btn">Add to Cart</button>
              <div className="fruit-imgs">
                {fruitImages}
              </div>
            </div>
          </div>
        </div>
      )
    } else {
      return <div>Loading...</div>
    }
  }
}

const mapStateToProps = (state, props) => ({
  fruit: state.fruits.filter(fruit => fruit._id === props.match.params.id)[0],
  images: state.images.filter(image => image.fruit._id === props.match.params.id)
})

export default connect(mapStateToProps)(SingleFruit)
