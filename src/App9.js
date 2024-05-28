import React, { useState, useEffect } from 'react'
import axios from 'axios'

const App9 = () => {
    const api = axios.create({ baseURL: "https://fakestoreapi.com" })
    const [item, setItem] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get("/products")
                setItem(response.data)
                console.log(response.data);
            }
            catch (err) {
                console.log(err);
            }
        }
        fetchData()
    }, [])

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            {
                item.map(({ image, title }, id) => (
                    <li style={{ listStyle: 'none', fontSize: '10px' }} key={id}>
                        <img style={{ height: '50px' }} src={image} alt={title} />
                        <p>{title}</p>
                    </li>
                ))
            }
        </div>
    )
}

export default App9