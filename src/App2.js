import React, { useEffect, useState } from 'react';

const App2 = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then(res => res.json())
      .then(old => {
        setData(old)

        const newTodo = {
          userId: 1,
          title: 'Nightingale of India',
          Completed: false,
        }

        return fetch("https://jsonplaceholder.typicode.com/todos", {
          method: 'POST',
          body: JSON.stringify(newTodo),
          headers: {
            'Content-type': 'application/json ; charset=UTF-8'
          }
        })

      })
      .then(res => res.json())
      .then(newTodo => {
        setData(current => [...current, newTodo])
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <div>

      {data.map(item => <li style={{ fontSize: '15px', listStyle: 'none', margin: '30px' }} key={item.id}>{item.title}</li>)}

    </div>
  );
};

export default App2;
