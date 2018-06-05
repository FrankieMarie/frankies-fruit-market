import React from 'react'
import { connect } from 'react-redux'

const SingleFruit = ({fruit, history}) => {
  if(fruit){
    return (
      <div className="single-fruit">
        <button className="btn back" onClick={() => history.goBack()}>Go back</button><br/>
        <img className="single-fruit-img" src={"http://localhost:8000/"+fruit.fruitImage} alt=""/>
        <div className="single-fruit-content">
          <h2>{fruit.name}</h2>
          <small>$ {fruit.price} / box</small>
          <p>{fruit.description}</p>
          <small><i>Each box contains 10-20 pounds of fruit. Amount varies depending on fruit density, size, and type of fruit being packaged. Boxes are shipped through USPS priority mail.</i></small><br/><br/>
          <button className="btn">Add to Cart</button>
        </div>
      </div>
    )
  } else {
    return <div>Loading...</div>
  }
}

const mapStateToProps = (state, props) => ({
  fruit: state.fruits.filter(fruit => fruit._id === props.match.params.id)[0]
})

export default connect(mapStateToProps)(SingleFruit)
