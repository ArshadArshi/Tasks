import { Button } from '@mui/material'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { FaCartArrowDown } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const App30 = ({cartCount,cartItems,setCartCount,setCartItems,total,setTotal}) => {
    const [data, setData] = useState([])
    const [popup, setPopup] = useState(false)
  
    const navigate = useNavigate()
   
    async function fetchData() {
        try {
            const response = await axios.get("https://dummyjson.com/products")
            console.log(response.data.products);
            setData(response.data.products)
        }
        catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    

    const Add = (product,price) => {
        setCartItems(prev=>({
            ...prev,[product.id]: {
                ...product,
                quantity : (prev[product.id]?.quantity || 0) + 1
            }
        }))
        setCartCount(prevCount=>prevCount+1)
        setTotal(tot=>tot+price)
        console.log(cartItems);
    }

    const Inc = (id,price) => {
        setCartItems(prev=>({
            ...prev,[id]:{
                ...prev[id],
                quantity : (prev[id]?.quantity + 1)
            }
        }))
        setCartCount(prevCount=>prevCount+1)
        setTotal(tot=>tot+price)
    }

    const Dec = (id,price) => {
        if(cartItems[id].quantity>1){
        setCartItems(prev=>({
            ...prev,[id] :{
            quantity : prev[id]?.quantity - 1
            }
        }))
        setCartCount(prevCount=>prevCount-1)
        setTotal(tot=>tot-price)
    }else{
        const{[id]: _ , ...rest} = cartItems
        setCartItems(rest)
        setCartCount(prevCount=>prevCount-1)
        setTotal(tot=>tot-price)
    }
    }    

    return (
        <>
        <div><FaCartArrowDown onClick={()=>navigate('viewCart')}/> <div className='_9xfy'> {cartCount} </div> </div>
        <div>$ {total} /-</div>
        <button onClick={()=>setPopup(true)}>Popup</button>
        <div className='products'>
            {data.map(product => (
                <div className='product-item'>
                    <li style={{ listStyle: 'none' }} key={product.id}>
                        <img src={product.thumbnail} alt="" />
                        <p>{product.title}</p>
                        <h6>$ {product.price} /-</h6>
                        {cartItems[product.id] ? (
                             <div>
                             <Button color='success' variant='contained' onClick={() => Inc(product.id,product.price)}>+</Button>
                             <Button color='error' variant='contained' onClick={() => Dec(product.id,product.price)}>-</Button>
                         </div>
                        ) : (
                            <Button color='primary' variant='contained' onClick={()=>Add(product,product.price)}>Add to cart</Button>
                        )} 
                    </li>
                </div>

            ))}
        </div>
        {
           
                popup && 
                <div style={{position:'absolute',top:'0px', backgroundColor: 'rgba(0,0,0,0.5)', width: '100vw', height: '100vh' }}>
                     <button style={{borderRadius:'30px',justifyContent:'center',alignItems:'center',display:'flex'}} onClick={()=>setPopup(false)}>x</button>
                   <div style={{display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:'#FFF',boxShadow:'2px 2px 2px 2px',width:'400px'
                ,height:'200px',marginTop:'210px',marginLeft:'500px',color:'#323232',fontWeight:'bold'}}> Hello Arshad </div>
                </div>
            }
        </>
    )
}

export default App30