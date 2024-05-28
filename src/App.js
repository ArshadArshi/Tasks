import React from 'react'
import Home from './Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Test from './Test'



const App = () => {
  return (
    <div className='App'>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/test' element={<Test />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App