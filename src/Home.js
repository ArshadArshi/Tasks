import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Home = () => {
    const [time, setTime] = useState('');

    useEffect(() => {
        const updatedTime = () => {
            const date = new Date();
            setTime(date.toLocaleString('en-US', { hour12: true }))
        }
        updatedTime();
        const interval = setInterval(updatedTime, 1000)
        return () => {
            clearInterval(interval)
        }
    }, [])

    console.log(time);
    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/test')
    }
    return (
        <div style={{ margin: '50px' }}>
            {time} <br />
            <button style={{ marginTop: '20px' }} onClick={handleClick}>Go to next page</button>
        </div>
    )
}

export default Home