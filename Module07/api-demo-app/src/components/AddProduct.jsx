import React, { useRef, useState } from 'react'

function AddProduct() {
    const titleRef = useRef()
    const categoryRef = useRef()
    const priceRef = useRef()
    const [error, setError] = useState(null)
    const [message, setMessage] = useState(null)

    const submitHandler = (event)=>{
        event.preventDefault()
        let title = titleRef.current.value;
        let category = categoryRef.current.value;
        let price = priceRef.current.value;

        if(title && category && price){
            setMessage("Form fields are valid")
            setError(null)
            console.log(title, category, price);            
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