import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'

function Products() {

    const getAllProducts = () =>{
        axios.get('http://localhost:3000/products').then((response)=>{
            console.log(response.data)
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
    </div>
  )
}

export default Products