import React, { useContext } from 'react'
import { stored } from './App1'

const Count = () => {
  const [count] = useContext(stored)

  return (
    <div>Count : {count.length} </div>
  )
}

export default Count