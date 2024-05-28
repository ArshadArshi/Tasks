import React from 'react'
import Log from './Component/Log'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Bio from './Component/Bio'
import Products from './Component/Products'
import About from './Component/About'
import Details from './Component/Details'
import Projects from './Component/Projects'
import Auth from './Component/Auth'
import ProtectedRoute from './Component/ProtectedRoute'



const Appi = () => {
    return (
        <Auth>
            <div className='App'>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<Log />} />
                        <Route path='/Bio' element={<ProtectedRoute><Bio/></ProtectedRoute>}>
                            <Route path='Details' element={<ProtectedRoute><Details/></ProtectedRoute>} />
                            <Route path='Projects' element={<ProtectedRoute><Projects/></ProtectedRoute>} />
                            <Route path='/Bio/About' element={<ProtectedRoute><About/></ProtectedRoute>} />
                            <Route path='/Bio/Products' element={<ProtectedRoute><Products/></ProtectedRoute>} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </div>
       </Auth>
    )
}

export default Appi
