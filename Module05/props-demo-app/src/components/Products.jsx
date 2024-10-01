import React from 'react'
import ProductDetail from './ProductDetail'

function Products({productList, children, categories = []}) {
  return (
    <div>
        <h1>Product List</h1>            
      {
        productList.map((product)=>(
          <ProductDetail key={product.id} title={product.name} category={product.category} price={product.price} promo = {product.category == 'Laptop'? children : <></>} />
        ))
      }
      <hr/>
      <h2>Categories</h2>
      {
        categories.map((cat)=><p>{cat}</p>)
      }
      {/* {children}
      <hr/> */}
    </div>
  )
}

export default Products