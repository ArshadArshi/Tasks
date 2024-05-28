import { jwtDecode } from 'jwt-decode';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Note = ({ setRefresh }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  console.log(token);
  const decoded = jwtDecode(token)
  console.log(decoded);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setRefresh(prev => prev + 1);
    navigate('/');
  };

  return (
    <div>
      <h1>Welcome {decoded?.username} {decoded?.lastName}</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Note;
