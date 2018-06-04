import React, { Component } from 'react'
import { connect } from 'react-redux'

class TopNav extends Component {
  render() {
    return (
      <nav className="main-nav">
        <div className="one">
          <a href="/"><div className="logo"></div></a>
        </div>
        <div id="search">
          <input type="search" className="search" name="search" placeholder="Search fruits"/>
        </div>
        <div className="cart">
          <a href="/cart" className="nav-links">
          <i className="fas fa-shopping-cart"></i> Cart ({this.props.orders.length})
          </a>
        </div>
      </nav>
    )
  }
}

function mapStateToProps(state){
  return {orders: state.orders}
}

export default connect(mapStateToProps)(TopNav)
