import React, { useContext, useState } from 'react'
import { stored } from './App1'

const Display = () => {
  const [count, setCount] = useContext(stored)
  const [name, setName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    setCount([...count, { brand: name }])
  }

  return (
    <div>
      {count.map(item => <h3 key={item.id}>{item.brand}</h3>)}
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='enter your brand' onChange={(e) => setName(e.target.value)} />
        <input type="submit" value='Add' />
      </form>
    </div>
  )
}

export default Display