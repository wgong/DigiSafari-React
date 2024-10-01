import React from 'react'

function ProductDetail({title, category, price }) {
  // const {title, category, price } = props
  return (
    <div>
      <h3>Title: {title}</h3>
      <h4>Category: {category}</h4>
      <h3>Price: {price}</h3>
      <hr/>
    </div>
  )
}

export default ProductDetail