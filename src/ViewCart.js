import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const ViewCart = ({ cartItems,total }) => {
  const cartArray = Object.values(cartItems);
  const navigate = useNavigate()

  return (
    <div>import React from 'react'
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
              <div style={{border:'1px solid gray',width:'300px'}}>
                <img src={item.thumbnail} width={200} height={150} alt="" />
                <p style={{fontSize:'15px',fontWeight:'bold'}}>{item.title}</p>
                <p  style={{fontSize:'10px'}}>Quantity : {item.quantity}</p>
                <p  style={{fontSize:'10px'}}>Price : $ {item.price*item.quantity} /-</p>
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
      <center>
      <h2>Cart Items</h2>
      <p>Grand Total : {total}</p>
      {cartArray.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <ul>
          {cartArray.map(item => (
            <div style={{marginBottom:'5px'}} className='product-item' key={item.id}>
              <img src={item.thumbnail} alt={item.title} style={{ width: '50px', height: '50px' }} />
              <p>{item.title}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Price: $ {item.price*item.quantity} /-</p>
            </div>
          ))}
        </ul>
      )}
      </center>
      <button onClick={()=>navigate('profile')}>hi</button>
      <Outlet/>
    </div>
  );
}

export const Profile = () => {
  return (
    <div>HI arshad mubarak</div>
  )
}

export default ViewCart;


