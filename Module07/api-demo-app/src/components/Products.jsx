import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'

function Products() {
    const [productList, setProductList] = useState([])

    const getAllProducts = () =>{
        axios.get('http://localhost:3000/products').then((response)=>{
            // console.log(response)
            setProductList(response.data)
        }).catch((error)=>{
            console.log(error);            
        })
    }

    useEffect(()=>{
        getAllProducts()
    }, [])

  return (
    <div>
        <h1>List of Products</h1>
        <table className='table'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Category</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {
                    productList.map((product)=> (<tr key={product.id}>
                                                    <td>{product.id}</td>
                                                    <td>{product.title}</td>
                                                    <td>{product.category}</td>
                                                    <td>{product.price}</td>
                                                </tr>))
                }
            </tbody>
        </table>
    </div>
  )
}

export default Products