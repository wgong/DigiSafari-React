import './App.css'
import Products from './components/Products'
import PromoOffer from './components/PromoOffer'


function App() {

  const productList = [
    {
      id: 1,
      name: "IPhone 14",
      category: "Smart Phone",
      price: 2343
    },
    {
      id: 2,
      name: "HP Pavilion",
      category: "Laptop",
      price: 3423
    },
    {
      id: 3,
      name: "Dell Vestro",
      category: "Laptop",
      price: 4564
    }
  ]

  // const categories = ["smart phone", "Laptop"]

  return (
    <>
      <h1>Working with Props</h1>
      <Products productList={productList} >
        <PromoOffer />
      </Products>
      
      {/* <ProductDetail title="iPhone 15" category="Phone" price={1232}/>
      <ProductDetail title="iPhone 14" category="Phone" price={4534}/>
      <ProductDetail title="iPhone 13" category="Phone" price={3452}/> */}
    </>
  )
}

export default App
