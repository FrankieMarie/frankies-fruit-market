import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addToOrder } from '../actions/orders'

const Fruit = ({ fruit, addToOrder}) => {
  let {_id, name, price, description, fruitImage} = fruit
  let desc = {description}
  return (
    <div className="card">
      <img src={"http://localhost:8000/"+fruitImage} alt="" className="fruit-image"/>
      <div className="card-content">
        <h3 className="card-title">{name}</h3>
        <p>$ {price} / <small>box</small></p>
        <p>{desc.description.substring(0, 160)}...&nbsp;
          <a href={"/fruit/"+_id} className="read-more">
          <small>Read more</small>
          </a>
        </p>
      </div>
      <button
        className="btn"
        onClick={() => addToOrder(_id)}
      >
        Add to Cart
      </button>
    </div>
  )
}

const mapDispatchToProps = dispatch => bindActionCreators({
  addToOrder
}, dispatch)

export default connect(null, mapDispatchToProps)(Fruit)
