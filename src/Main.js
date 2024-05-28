import React,{useState} from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App30 from './App30'
import ViewCart, { Profile } from './ViewCart'

const Main = () => {
    const[cartCount,setCartCount] = useState(0)
    const[cartItems,setCartItems] = useState({})
    const[total,setTotal] = useState(0)
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<App30 total={total} setTotal={setTotal} cartCount={cartCount} setCartCount={setCartCount} cartItems={cartItems} setCartItems={setCartItems} />} />
            <Route path='viewCart' element={<ViewCart total={total} cartCount={cartCount} cartItems={cartItems} />} >
                <Route path='profile' element={<Profile/>}/>
                </Route>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Main