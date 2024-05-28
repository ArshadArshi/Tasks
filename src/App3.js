import React, { useEffect, useState } from 'react'

function useDebounce(value, delay) {
  const [debounceValue, setDebounceValue] = useState(value);
  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebounceValue(value)
    }, delay)
    return () => {
      clearTimeout(timerId)
    }
  }, [value, delay])
  return debounceValue
}


const App3 = () => {
  const [items, setItems] = useState([])
  const [search, setSearch] = useState('')
  const debouncedTerm = useDebounce(search, 500);
  const [filter, setFilter] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(debouncedTerm.trim() ? `https://dummyjson.com/products/search?q=${debouncedTerm}` : "https://dummyjson.com/products")
        const data = await response.json()
        console.log(data.products);
        setItems(data.products)
      }
      catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, [debouncedTerm])

  useEffect(() => {
    if (debouncedTerm) {
      const filtered = items.filter(item => item.title.toLowerCase().includes(debouncedTerm.toLowerCase()))
      setFilter(filtered)
      console.log('filtered term', debouncedTerm);
    }
    else {
      setFilter(items)
    }
  }, [debouncedTerm, items])



  return (
    <div>
      <input type="search" placeholder='search item' value={search} onChange={(e) => setSearch(e.target.value)} />
      <div className="products">
        {
          filter.map(({ id, title, category, description, price, thumbnail }) => (
            <div key={id} className="product-item">
              <li style={{ listStyle: 'none' }}>
                <img src={thumbnail} alt={category} />
                <p>{title}</p>
                <p>{description}</p>
                <p>{price}</p>
              </li>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default App3