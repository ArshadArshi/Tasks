import React, { createContext, useState } from 'react';
import './App.css';
import Count from './Count';
import Display from './Display';

export const stored = createContext('')



function App() {
  const [count, setCount] = useState([{
    id: 1,
    brand: 'Redmi'
  },
  {
    id: 2,
    brand: 'Nokia'
  },
  {
    id: 3,
    brand: 'Oppo'
  }
  ]);

  return (
    <div className="App">
      <stored.Provider value={[count, setCount]}>
        <Count />
        <Display />
      </stored.Provider>
    </div>
  );
}

export default App;
