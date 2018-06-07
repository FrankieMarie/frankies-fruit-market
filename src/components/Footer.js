import React from 'react'
import { connect } from 'react-redux'

const Footer = (props) => {
  return (
    <div className="footer">
      <a href='/login' className="admin-login">Admin Login <i className="fas fa-sign-in-alt"></i></a>
      <a href='/addfruit' className="add-fruit">{props.admin.isAuthed ? 'Add a Fruit +' : null} </a>
    </div>
  )
}

const mapStateToProps = (state) => ({
  admin: state.admin
})

export default connect(mapStateToProps)(Footer)
