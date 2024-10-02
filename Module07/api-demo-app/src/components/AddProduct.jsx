import axios from 'axios'
import React, { useRef, useState } from 'react'

function AddProduct({getAllProducts}) {
    const titleRef = useRef()
    const categoryRef = useRef()
    const priceRef = useRef()
    const [error, setError] = useState(null)
    const [message, setMessage] = useState(null)

    const insertProduct= async (newProduct)=>{
        try{
            const {data, status} = await axios.post('http://localhost:3000/products', newProduct)
            if(status == 201 && data.id){
                titleRef.current.value = ''
                categoryRef.current.value = ''
                priceRef.current.value = ''
                setMessage('Product created successfully')
                getAllProducts()
            }else{
                setError('Something went wrong, Please try again')
            }
        }catch(err){
            setError("API Error: ", err.message)
        }
    }


    const submitHandler = (event)=>{
        event.preventDefault()
        let title = titleRef.current.value;
        let category = categoryRef.current.value;
        let price = priceRef.current.value;

        if(title && category && price){
            // setMessage("Form fields are valid")
            setError(null)
             const newProduct = {title, category, price}
             console.log(newProduct);             
            insertProduct(newProduct)         
        }else{
            setMessage(null)
            setError("Title, category and price are required")
        }
    }
  return (
    <div>
        <h1>Add New Product</h1>
        <form onSubmit={submitHandler}>
            <div className='form-group'>
                <label className='form-label'>Product title</label>
                <input type='text' className='form-control' ref={titleRef} placeholder='Enter product title' />
            </div>
            <div className='form-group'>
                <label className='form-label'>Product category</label>
                <input type='text' className='form-control' ref={categoryRef} placeholder='Enter product category' />
            </div>
            <div className='form-group'>
                <label className='form-label'>Product price</label>
                <input type='text' className='form-control' ref={priceRef} placeholder='Enter product price' />
            </div>
            <br />
            <button type='submit' className='btn btn-primary'>Add Product</button>
            {error && <p className='text-danger'>{error}</p>}
            {message && <p className='text-success'>{message}</p>}
        </form>
    </div>
  )
}

export default AddProduct