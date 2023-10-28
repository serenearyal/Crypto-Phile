import React from 'react'
import "./navbar.css"
import { useNavigate } from 'react-router-dom'


const Navbar = () => {

    const navigate = useNavigate()
    const home = ()=>{
      navigate("/")
    }
  return (
    <div className='navbar'>
      <h1 onClick={home}>Crypto-Phile</h1>
    </div>
  )
}

export default Navbar
