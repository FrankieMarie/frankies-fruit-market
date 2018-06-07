import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
      <a href='/login' className="admin-login">Admin Login <i className="fas fa-sign-in-alt"></i></a>
      <a href='/addfruit' className="add-fruit">Add a Fruit <i className="fas fa-plus"></i></a>
    </div>
  )
}

export default Footer
