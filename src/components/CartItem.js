import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { deleteFromOrder } from '../actions/orders'

// const CartItem = ({item, fruit, deleteFromOrder, props}) => {
//   console.log('props', props)
//   return (
//     <div>
//       <ul>
//         <li className="cart-item-li">
//           <img src={"http://localhost:8000/"+fruit.fruitImage} alt="" className="cart-item-image"/>
//           <div className="cart-item-info">
//             <p>Fruit: {fruit.name}</p>
//             <p>Price: $ {fruit.price} / <small>box</small></p>
//             <p>Quantity: {item.quantity} <small>box</small></p>
//             <p>Item Total: $ {item.quantity * fruit.price}</p>
//             <button
//               className="remove-button"
//               onClick={() => deleteFromOrder(props.orders._id)}
//               >
//               <i><i className="fas fa-times"></i> Remove</i>
//             </button>
//           </div>
//         </li>
//       </ul>
//     </div>
//   )
// }

class CartItem extends Component {
  render() {
    const fruit = this.props.fruit
    const item = this.props.item
    const order = this.props.orders
    console.log(this.props.orders)
    return (
      <div>
        <ul>
          <li className="cart-item-li">
            <img src={"http://localhost:8000/"+fruit.fruitImage} alt="" className="cart-item-image"/>
            <div className="cart-item-info">
              <p>Fruit: {fruit.name}</p>
              <p>Price: $ {fruit.price} / <small>box</small></p>
              <p>Quantity: {item.quantity} <small>box</small></p>
              <p>Item Total: $ {item.quantity * fruit.price}</p>
              <button
                className="remove-button"
                onClick={() => this.props.deleteFromOrder(order._id)}
                >
                <i><i className="fas fa-times"></i> Remove</i>
              </button>
            </div>
          </li>
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  orders: state.orders
})

const mapDispatchToProps = dispatch => bindActionCreators({
  deleteFromOrder
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(CartItem)
