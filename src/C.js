import React from 'react'
import { store } from './App'

const C = () => {

  return (
    <div>
      <store.Consumer>
        {value => <div>{value}</div>}
      </store.Consumer>
    </div>
  )
}

export default C