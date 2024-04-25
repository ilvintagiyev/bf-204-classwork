

import { Main } from '../components/Main'
import './App.css'



function App() {
  const products = [
    { id:1 , name:"ilvin"},
    { id:2 , name:"elsen" }
  ]
  return (
    <>
    <Main products={products}/>
    </>
  )
}

export default App
