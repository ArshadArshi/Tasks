import React from 'react'
import { connect } from 'react-redux'
import { decAction, incAction } from './actions'


const App10 = ({number,incAction,decAction}) => {
  return (
    <div>
      <center>
      <h1>{number}</h1>
      <button onClick={()=>incAction(5)}>+</button>
      <button onClick={()=>decAction(5)}>-</button>
      </center>
    </div>
  )
}

const mapStateToProps = state => ({
  number : state,
})

// const mapDispatchToProps = dispatch => {
//   return {
//     incAction: ()=>dispatch({type:'increment'}),
//     decAction: ()=>dispatch({type:'decrement'})
//   }
// }

export default connect(mapStateToProps,{incAction,decAction})(App10)