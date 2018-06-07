import React, { Component } from 'react'
import { connect } from 'react-redux'

export default function(ComposedComponent) {
  class Authentication extends Component {

    componentWillMount() {
      if (!localStorage.getItem('admin') || (JSON.parse(localStorage.getItem('admin')).expires < Date.now() / 1000)) {
        this.props.history.push('/')
      }
    }

    componentWillUpdate(nextProps) {
      if (!localStorage.getItem('admin') || (JSON.parse(localStorage.getItem('admin')).expires < Date.now() / 1000)) {
        this.props.history.push('/')
      }
    }

    render() {
      console.log('this.props', this.props)
      return <ComposedComponent {...this.props} />
    }
  }

  function mapStateToProps(state) {
    return { admin: state.admin}
  }

  return connect(mapStateToProps)(Authentication)
}
