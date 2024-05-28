import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div>
        <Link className='a' style={{ textDecoration: 'inherit', color: 'black', fontWeight: 'bold' }} to='Details'><h2>Details</h2></Link>
        <br />
        <br />
        <br />
        <br />
        <br />
        <Link className='a' style={{ textDecoration: 'inherit', color: 'black', fontWeight: 'bold' }} to='Projects'><h2>Projects</h2></Link>
    </div>
  )
}

export default Sidebar