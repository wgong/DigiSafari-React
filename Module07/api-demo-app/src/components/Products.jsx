import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import AddProduct from './AddProduct'

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

    const deleteProduct = async (id) => {
        try{
            await axios.delete('http://localhost:3000/products/'+id)
            getAllProducts()
        }catch(err){
            console.log(err);
            
        }
    }

    const deleteHandler = (id)=>{
        const result = window.confirm('Are you sure, want to delete the product?')
        if(result){
            deleteProduct(id)
        }
    }

  return (

    <div>
        <div className='row'>
            <div className='col-md-8'>
            <h1>List of Products</h1>
            <table className='table'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        productList.map((product)=> (<tr key={product.id}>
                                                        <td>{product.id}</td>
                                                        <td>{product.title}</td>
                                                        <td>{product.category}</td>
                                                        <td>{product.price}</td>
                                                        <td>
                                                            <button onClick={()=>deleteHandler(product.id)} className='btn btn-danger'>Delete</button>
                                                        </td>
                                                    </tr>))
                    }
                </tbody>
            </table>
        </div>
        <div className='col-md-4'>
          <AddProduct getAllProducts={getAllProducts}/>
        </div>
      </div>        
    </div>
  )
}

export default Products