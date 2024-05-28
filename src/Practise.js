import React from 'react'

const Practise = () => {
  
  let values = {
    name:'Arshad',
    age:24,
    designation:'React Developer'
  }
  const{name,age,designation} = values

  let set1 = [1, 2, 3]
  let set2 = [...set1, 4, 5, 6]
  console.log(set2);

  let arr = [10, 20, 30, 40, 50]
  arr.push(60)
  console.log(arr);
  arr.pop()
  console.log(arr);
  arr.shift()
  console.log(arr);

  let a=[1,2]
  a.unshift(4,5)
  console.log(a);
  

  return (
    <div>
        <p>{name}</p>
        <p>{age}</p>
        <p>{designation}</p>
    </div>
  )
}

export default Practise