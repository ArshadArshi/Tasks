import React, { useEffect, useState } from 'react'
import { FaCartArrowDown } from 'react-icons/fa';
import './App.css'

function useDebounce (value,delay){
    const[debounceValue,setDebounceValue] = useState(value);
    useEffect(()=>{
        const timerId = setTimeout(()=>{
            setDebounceValue(value)
        },delay)
        return () => {
            clearTimeout(timerId);
        }
    },[value,delay])
    return debounceValue
}

const App5 = () => {
    const[items,setItems] = useState([]);
    const[search,setSearch] = useState('');
    const debounceTerm = useDebounce(search,500);
    const[filters,setFilters] = useState([]);
    const[total,setTotal] = useState(0)
    const[cartCount,setCartCount] = useState(0)
    const[showButtons,setShowButtons] = useState(true)

    useEffect(()=>{
        const fetchData = async () => {
            try{
                const response = await fetch(debounceTerm ? `https://dummyjson.com/products/search?q=${debounceTerm}` : "https://dummyjson.com/products")
                const data = await(response.json())
                setItems(data.products)
                console.log(data.products);
            }
            catch(err) {
                console.log(err);
            }
        }
        fetchData();
    },[debounceTerm])

    useEffect(()=>{
        if(debounceTerm){
            const filtered = items.filter(item => item.title.toLowerCase().includes(debounceTerm.toLowerCase()))
            setFilters(filtered)
            console.log('filter item :',debounceTerm);
        }
        else{
            setFilters(items)
        }
    },[debounceTerm,items])

    const handleClick = (price) => {
        setCartCount(1)
        setTotal(currentTotal=>currentTotal+price)
    }

    const handleIncrement = (price) => {
        setCartCount(prevCount=>prevCount + 1)
        setTotal(currentTotal=>currentTotal + price)
    }

    const handleDecrement = (price) => {
        setCartCount(prevCount=>prevCount -1)
        setTotal(currentTotal=>currentTotal - price)
    }
    
  return (
    <><div className='icn'>
    <center>< FaCartArrowDown className='ico' style={{fontSize:'30px'}}/></center><span className='sup'>{cartCount}</span></div>
    <center><h1>$ {total} /-</h1></center>
    <input type="search" placeholder='search item' value={search} onChange={(e)=>setSearch(e.target.value)}/>
    <div className='products'>
        {
            filters.map(({id,thumbnail,price,title}) => (
                <li className='product-item' key={id}>
                    <img src={thumbnail} alt={title} />
                    <p>{title}</p>
                    <p>$ {price} /-</p>
                   {
                    cartCount ? (
                        <div>
                        <button onClick={()=>handleIncrement(price)}>+</button>
                        <button onClick={()=>handleDecrement(price)}>-</button>
                        </div>
                    ) : (
                        <button onClick={()=>handleClick(price)}>Add</button>
                    )
                   }
                </li>
            ))
        }
    </div>
    </>
  )
}

export default App5





