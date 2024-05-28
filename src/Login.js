import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom' 

const Login = ({setRefresh}) => {
    const storedMail = JSON.parse(localStorage.getItem('user_mail')) || [];
    const[input,setInput] = useState('')
    const[pass,setPass] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        if(input.length){
            const updatedMail = [...storedMail,{email:input}]
            localStorage.setItem('user_mail',JSON.stringify(updatedMail))
            fetch("https://dummyjson.com/auth/login",{
                method:'POST',
                headers: {'Content-type' : 'application/json'},
                body: JSON.stringify({
                    username:input,
                    password:pass
                })
            })
            .then(res => res.json())
            .then(response => {localStorage.setItem('token',response.token);console.log(response);navigate('/');setRefresh(prev=>prev+1)})
            .catch(err =>console.log(err))
        }
    }

    return (
        <div>
            <input type="text" placeholder='username' value={input} onChange={(e) => setInput(e.target.value)} />
            <p></p>
            <input type="password" placeholder='password' value={pass} onChange={(e) => setPass(e.target.value)} />
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}

export default Login