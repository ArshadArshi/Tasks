import React from 'react'
import Hoc from './Hoc'

const App20 = ({name}) => {
  return (
    <div>Welcome user!!! {name}</div>
  )
}

export default Hoc(App20)