import React,{useReducer} from 'react'

const second = 0;

function first(state=second,action){
  switch(action.type){
    case "increment" : return state + 1;
    case "decrement" : return state - 1;
    default : return state;
  }
}

const App11 = () => {
  const [state, dispatch] = useReducer(first, second)

return (
  <div>
    Count : {state}
    <button onClick={()=>dispatch({type:'increment'})}>+</button>
    <button onClick={()=>dispatch({type:'decrement'})}>-</button>
  </div>
)

}

export default App11