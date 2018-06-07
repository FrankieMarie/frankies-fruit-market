import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addToOrder } from '../actions/orders'
import { deleteFruit } from '../actions/fruits'

const Fruit = (props) => {
  let {_id, name, price, description, fruitImage} = props.fruit
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
        onClick={() => props.addToOrder(_id)}
      >
        Add to Cart
      </button>

      {props.admin.isAuthed ? <button
        className="edit-fruit-btn"
      > Edit</button> : null}

      {props.admin.isAuthed ? <button
        className="delete-fruit-btn"
        onClick={() => props.deleteFruit(_id)}
      > Delete</button> : null}

    </div>
  )
}

const mapStateToProps = (state) => ({
  admin: state.admin
})

const mapDispatchToProps = dispatch => bindActionCreators({
  addToOrder,
  deleteFruit
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Fruit)
