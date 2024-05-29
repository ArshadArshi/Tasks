import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const ViewCart = ({cartItems,total}) => {
const  cartArray = Object.values(cartItems)
const navigate = useNavigate()

  return (
    <div>
      <h2>Cart products</h2>
      <p>Grand Total : $ {total} /-</p>
      {cartArray.length === 0 ?
      <p>No items added</p>
      :
      <>
      <center>
        {cartArray.map(item=>(
          <div style={{gap:'20px',display:'flex',justifyContent:'left',alignItems:'center',margin:'10px'}}>
            <img src={item.thumbnail} width={200} height={150} alt="" />
            <p style={{fontSize:'15px',fontWeight:'bold'}}>{item.title}</p>
            <p  style={{fontSize:'10px'}}>Quantity : {item.quantity}</p>
            <p  style={{fontSize:'10px'}}>Price : $ {Math.round(item.price*item.quantity)} /-</p>
          </div>
        ))}
      </center>
      </>  
    }
    <div>
    <button onClick={()=>navigate('profile')}>hi</button>
      <Outlet/>
    </div>
    </div>
  )
}

export const Profile = () => {
  return (
    <div>Hi Arshad The React Developer</div>
  )
}

export default ViewCart