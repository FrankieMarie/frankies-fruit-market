import React from 'react'

const CartItem = ({item, fruit}) => {
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
          </div>
        </li>
      </ul>
    </div>
  )
}

export default CartItem
