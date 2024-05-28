import './All.css'
import { Link, Outlet } from 'react-router-dom'
import React from 'react'
import Sidebar from './Sidebar'
import './All.css'
import arshi from './arshi.jpg'

const Bio = () => { 
    

    return (
        <div >
            <div className="side">
                <Sidebar />
            </div>
            <div className='bio'>
                <Link className='b' style={{ textDecoration: 'inherit', color: 'black', fontWeight: 'bold' }} to='/Bio'> <p className='p'>Home</p> </Link>
                <Link className='b' style={{ textDecoration: 'inherit', color: 'black', fontWeight: 'bold' }} to='/Bio/About'> <p className='p'>About</p> </Link>
                <Link className='b' style={{ textDecoration: 'inherit', color: 'black', fontWeight: 'bold' }} to='/Bio/Products'> <p className='p'>Products</p> </Link>
                <Link style={{ textDecoration: 'inherit', color: 'white', fontWeight: 'bold' }} to='/'><button className='btn'>Logout</button> </Link>
                <img src={arshi} alt="" />
            </div>
            <div style={{ marginLeft: '70px', marginTop: '60px' }}>
                <center>
                    <h3>  Welcome to the BIOGRAPHY of MOHAMMAD ARSHAD MUBARAK....! </h3>
                    <Outlet />
                </center>
            </div>
        </div>
    )
}


export default Bio