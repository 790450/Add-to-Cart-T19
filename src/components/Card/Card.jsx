import React from 'react'
import './Card.scss'
import Products from '../Products/Products'
import products from '../../data'
const Card = ({ item, addToCart ={} }) => {
  const{ id, title, price, description, category, image } = item;
  return (
    <div className="card">
      <div className="container" key={id}>
        <img src={image} alt=""/>
        <p>{category}</p>
        <h3>{title}</h3>
        <p>{description}</p>
        <p className="price">${price}</p>
        <button onClick={() => addToCart(item)}>Add To Cart</button>
      </div>
    </div>
  )
}

export default Card;
