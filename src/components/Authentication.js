import React, { Component } from 'react'
import { connect } from 'react-redux'

export default function(ComposedComponent) {
  class Authentication extends Component {

    componentWillMount() {
      if (!localStorage.getItem('admin') && !this.props.admin.isAuthed) {
        this.props.history.push('/')
      }
    }

    componentWillUpdate(nextProps) {
      if (!localStorage.getItem('admin') && !nextProps.admin.isAuthed) {
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
