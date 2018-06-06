import React, { Component } from 'react'
import { connect } from 'react-redux'
import CartItem from './CartItem'
import TopNav from './TopNav'

class Cart extends Component {
  render() {
    let orderList = this.props.orders.map(item => <CartItem key={item._id} item={item} fruit={item.fruit}/>)
    let itemTotals = this.props.orders.map(item => item.fruit.price)
    let total = itemTotals.length > 0 ? itemTotals.reduce((acc, cv) => acc + cv) : 0
    return (
      <div>
        <TopNav /><br/>
        <div className="cart-items">
          {orderList}
        </div>
        <hr/>
        <p>Grand Total: $ {total}</p>
        <button className="btn">Checkout</button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {orders: state.orders}
}

export default connect(mapStateToProps)(Cart)
