import { Button } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FaCartArrowDown } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const App30 = ({ cartCount, cartItems, total, setCartCount, setCartItems, setTotal }) => {
    const [data, setData] = useState([])
    const [popup, setPopup] = useState(false)
    const navigate = useNavigate()

    async function fetchData() {
        try {
            const response = await axios.get("https://dummyjson.com/products")
            console.log(response.data.products);
            setData(response.data.products)
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchData()
    })

    const Add = (product, price) => {
        setCartItems(prev => ({
            ...prev, [product.id]: {
                ...product,
                quantity: (prev[product.id]?.quantity || 0) + 1
            }
        }))
        setCartCount(prevCount => prevCount + 1)
        setTotal(currentTot => Math.round(currentTot + price))
    }

    const Inc = (id, price) => {
        setCartItems(prev => ({
            ...prev, [id]: {
                ...prev[id],
                quantity: prev[id]?.quantity + 1
            }
        }))
        setCartCount(prevCount => prevCount + 1)
        setTotal(currentTot => Math.round(currentTot + price))
    }

    const Dec = (id, price) => {
        if (cartItems[id].quantity > 1) {
            setCartItems(prev => ({
                ...prev, [id]: {
                    ...prev[id],
                    quantity: prev[id]?.quantity - 1
                }
            }))
            setCartCount(prevCount => prevCount - 1)
            setTotal(currentTot => Math.round(Math.max(currentTot - price, 0)))
        }
        else {
            const { [id]: _, ...rest } = cartItems
            setCartItems(rest)
            setCartCount(prevCount => prevCount - 1)
            setTotal(currentTot => Math.round(Math.max(currentTot - price, 0)))
        }
        setTimeout(() => {
            if (Object.values(cartItems).every(item => item.quantity === 0)) {
                setTotal(0);
            }
        }, 0);
    }

    return (
        <>
            <div><FaCartArrowDown onClick={() => navigate('viewCart')} /><div className='_9xfy'>{cartCount}</div></div>
            <div>$ {total} /-</div>
            <button onClick={() => setPopup(true)}>popup</button>
            <div className='products'>
                {data.map(product => (
                    <div className='product-item' key={product.id}>
                        <img src={product.thumbnail} alt="" />
                        <p>{product.title}</p>
                        <p>${Math.round(product.price)}/-</p>
                        {
                            cartItems[product.id] ? (
                                <div style={{ display: 'flex', gap: '15px' }}>
                                    <Button variant='contained' color='success' onClick={() => Inc(product.id, product.price)}>+</Button>
                                    <Button variant='contained' color='error' onClick={() => Dec(product.id, product.price)}>-</Button>
                                </div>
                            )
                                :
                                (
                                    <Button variant='contained' color='info' onClick={() => Add(product, product.price)}>Add to Cart</Button>
                                )
                        }
                    </div>
                ))}
            </div>
            {popup &&
                <div style={{ position: 'fixed', width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.5)', top: '0px', left: '0px' }}>
                    <button onClick={() => setPopup(false)} style={{ borderRadius: '40%', height: '20px', border: '1px solid #323232', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>x</button>
                    <div style={{ boxShadow: '2px 2px 2px 2px', backgroundColor: 'white', width: '400px', height: '200px', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 'bold', marginLeft: '500px', marginTop: '200px' }}>Hi Arshi💝Salma</div>
                </div>
            }
        </>
    )
}

export default App30