import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { deleteFromOrder } from '../actions/orders'

const CartItem = (props) => {
  return (
    <div>
      <ul>
        <li className="cart-item-li">
          <img src={"http://localhost:8000/"+props.fruit.fruitImage} alt="" className="cart-item-image"/>
          <div className="cart-item-info">
            <p>Fruit: {props.fruit.name}</p>
            <p>Price: $ {props.fruit.price} / <small>box</small></p>
            <p>Quantity: {props.item.quantity} <small>box</small></p>
            <p>Item Total: $ {props.item.quantity * props.fruit.price}</p>
            <button
              className="remove-button"
              onClick={() => props.deleteFromOrder(props.id)}
              >
              <i><i className="fas fa-times"></i> Remove</i>
            </button>
          </div>
        </li>
      </ul>
    </div>
  )
}

const mapStateToProps = state => ({
  orders: state.orders
})

const mapDispatchToProps = dispatch => bindActionCreators({
  deleteFromOrder
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(CartItem)
