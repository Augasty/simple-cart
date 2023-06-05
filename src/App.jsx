import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Components/Header'
import Home from './Components/Home'
import Cart from './Components/Cart'
import { useState } from 'react'

function App() {
  
  const [cart,setCart] = useState([])
  return (
    <BrowserRouter>
      <Header />
      <Routes className='App'>
        <Route path='/' element={<Home cart={cart} setCart={setCart}/>}/>
        <Route path='/cart' element={<Cart cart={cart} setCart={setCart}/>}/>
      </Routes>
    </BrowserRouter>

  )
}

export default App
