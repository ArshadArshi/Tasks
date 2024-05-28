import React, { useEffect, useState } from 'react'

const App13 = () => {
    const[count,setCount] = useState(0)
    useEffect(()=>{
        if(count === 5){
            throw new Error ("Component crashed as count reached to 5")
        }
    },[count])
  return (
    <div>
     <p>{count}</p>
        <button onClick={()=>setCount(count + 1)}>increment</button>
    </div>
  )
}

export default App13