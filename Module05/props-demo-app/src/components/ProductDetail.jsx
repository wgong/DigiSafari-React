import React from 'react'

function ProductDetail(props) {
  return (
    <div>
      <h3>Title: {props.title}</h3>
      <h4>Category: {props.category}</h4>
      <h3>Price: {props.price}</h3>
      <hr/>
    </div>
  )
}

export default ProductDetail