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
          <input
            type="search"
            className="search"
            placeholder="Search fruits"
            name="searchText"
            value={this.searchText}
            onChange={this.props.onTextChange}
          />
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

const mapStateToProps = (state) => ({
  orders: state.orders
})

export default connect(mapStateToProps)(TopNav)
