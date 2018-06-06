import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { adminLogin } from '../actions/admin'

class Login extends Component {
  state = {
    email: '',
    password: ''
  }
  handleSubmit = e => {
    e.preventDefault()
    this.props.adminLogin(this.state, this.props.history)
  }
  render() {
    return (
      <div>
        <div className="logo-login"></div>

        <form onSubmit={this.handleSubmit}>

          <label htmlFor="email" className="label-text">Email</label>
          <input
            className="login-form"
            type="email"
            name="email"
            onChange={e => this.setState({ email: e.target.value })}
            value={this.state.email}
          />

          <label htmlFor="password" className="label-text">Password</label>
          <input
            className="login-form"
            type="password"
            name="password"
            onChange={e => this.setState({ password: e.target.value })}
            value={this.state.password}
          /><br/>

          <button type="submit" className="login-btn">LOGIN</button>

        </form>

        <button className="hbtn"><a href="/" className="home-btn" >Home</a></button>

      </div>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  adminLogin
}, dispatch)

export default connect(null, mapDispatchToProps)(Login)
