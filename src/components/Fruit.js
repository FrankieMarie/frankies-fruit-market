import React from 'react'

const Fruit = ({fruit}) => {
  let {_id, name, price, description, fruitImage} = fruit
  let desc = {description}
  return (
    <div className="card">
      <img src={"http://localhost:8000/"+fruitImage} alt="" className="fruit-image"/>
      <div className="card-content">
        <h3 className="card-title">{name}</h3>
        <p>$ {price} / lb</p>
        <p>{desc.description.substring(0, 160)}...&nbsp;
          <a href={"/fruit/"+_id} className="read-more">
          <small>Read more</small>
          </a>
        </p>
      </div>
      <button className="btn">Add to Cart</button>
    </div>
  )
}

export default Fruit
