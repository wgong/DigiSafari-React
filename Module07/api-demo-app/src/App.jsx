import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Products from './components/Products'
import AddProduct from './components/AddProduct'

function App() { 

  return (
    <div className='container'>
      <h1>Working with Products API</h1>
      <div className='row'>
        <div className='col-md-8'>
          <Products />
        </div>
        <div className='col-md-4'>
          <AddProduct />
        </div>
      </div>
      
    </div>
  )
}

export default App
