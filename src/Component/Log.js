import React, { useState } from 'react'
import './All.css'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './Auth'




const Log = () => {
    const [input, setInput] = useState('')
    const [pass, setPass] = useState('')
    const [err, setErr] = useState('')
    const navigate = useNavigate();
    const{login} = useAuth();

    const handleClick = (e) => {
        e.preventDefault();
        if (!input && !pass) {
            setErr("please enter details")
        }

        else if (input.length == "") {
            setErr("please enter username")
        }
        else if (pass.length == "") {
            setErr("please enter password")
        }
        else if (input.length < 5) {
            setErr("username must contains atleast 5 letters")
        }
        else {
            setErr("")
            const storedMail = JSON.parse(localStorage.getItem('user')) || []
            const updatedMail = [...storedMail, input]
            localStorage.setItem('user', JSON.stringify(updatedMail))
            login()
            navigate('/Bio')
        }

    }

    return (
        <div className='log'>
            <center>
                <form className='form'>
                    <p>  <input style={{ padding: '20px' }} type="text" placeholder='USERNAME' value={input} onChange={(e) => setInput(e.target.value)} /> </p>
                    <p>  <input style={{ padding: '20px' }} type="password" placeholder='PASSWORD' value={pass} onChange={(e) => setPass(e.target.value)} /> </p>
                    <p>{err}</p>
                    <p> <button onClick={handleClick} style={{ width: '90px',borderRadius:'8px',marginTop:'15px' }}>Login</button> </p>
                </form>
            </center>
        </div>
    )
}

export default Log