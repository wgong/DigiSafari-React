import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/shared/Navbar'
import Footer from './components/shared/Footer'

function App() {
  
  return (
    <div className='container'>
      <Navbar />
      <hr />
      <h1>Working with Responsive design</h1>
      <hr />
      <Footer />
    </div>
  )
}

export default App
