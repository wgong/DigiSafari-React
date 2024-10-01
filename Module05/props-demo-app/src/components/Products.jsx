import React from 'react'
import ProductDetail from './ProductDetail'

function Products({productList, children}) {
  return (
    <div>
        <h1>Product List</h1>            
      {
        productList.map((product)=>(
          <ProductDetail key={product.id} title={product.name} category={product.category} price={product.price}/>
        ))
      }
      {children}
      <hr/>
    </div>
  )
}

export default Products