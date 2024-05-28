import React, { useContext } from 'react'
import { stored } from './App'


const A = () => {
  const [count, setCount] = useContext(stored)

  return (
    <div>
      Component {count}

    </div>
  )
}

export default A