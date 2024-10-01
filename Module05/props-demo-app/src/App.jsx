import './App.css'
import ProductDetail from './components/ProductDetail'

function App() {
 
  return (
    <>
      <h1>Working with Props</h1>
      <ProductDetail title="iPhone 15" category="Phone" price={1232}/>
    </>
  )
}

export default App
