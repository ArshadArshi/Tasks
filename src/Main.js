import React, { useState } from 'react'
import App30 from './App30'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ViewCart, { Profile } from './ViewCart'

const Main = () => {
  const [cartCount, setCartCount] = useState(0)
  const [cartItems, setCartItems] = useState({})
  const [total, setTotal] = useState(0)

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App30 cartCount={cartCount} setCartCount={setCartCount} cartItems={cartItems} setCartItems={setCartItems} total={total} setTotal={setTotal} />} />
          <Route path='/viewCart' element={<ViewCart cartCount={cartCount} cartItems={cartItems} total={total} />} >
          <Route path='profile' element={<Profile/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Main