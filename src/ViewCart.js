import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const ViewCart = ({ cartItems,total }) => {
  const cartArray = Object.values(cartItems);
  const navigate = useNavigate()

  return (
    <div>
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


