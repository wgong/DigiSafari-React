import React from 'react'
import { useContext } from 'react'
import { Discount } from '../App'

function ProductDetail({title, category = "Unknown", price, promo }) {
  // const {title, category, price } = props
  const flatDiscount = useContext(Discount)
  return (
    <div>
      <h3>Title: {title}</h3>
      <h4>Category: {category}</h4>
      <h3>Price: {price - flatDiscount}</h3>
      {promo}
      <hr/>
    </div>
  )
}

export default ProductDetail