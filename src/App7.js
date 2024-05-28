import React, { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Note from './Note';
import Login from './Login';


const App7 = () => {
  const token = localStorage.getItem('token')
  const[refresh,setRefresh] = useState(0);
  useEffect(()=>{
    setRefresh(prev=>prev +1)
  },[token])


  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={
          token?.length > 0 ? <Note setRefresh={setRefresh}/> : <Login setRefresh={setRefresh}/>
        }/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App7