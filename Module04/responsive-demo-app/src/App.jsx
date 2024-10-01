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
      <div className='display-3'>Working with Responsive design</div>
      <div className="row">
        <div className="col">
          <img src="/src/assets/images/image1.jpg" className='img-fluid' alt="Image 1" />
        </div>
        <div className="col">
          <img src="/src/assets/images/image2.jpg" className='img-fluid' alt="Image 2" />
        </div>
        <div className="col">
          {/* <video className='ratio ratio-16x9' controls>
            <source src="/src/assets/videos/sample-video.mp4" type='video/mp4'></source>
          </video> */}
          <div className="ratio ratio-4x3">
              <iframe title='Working with YouTube Videos' src="https://www.youtube.com/embed/5kozt0uDa4c?si=maroeYK0KyupXl4s" allowfullscreen></iframe>
            </div>
        </div>
      </div>
      <hr />
      <Footer />
    </div>
  )
}

export default App
