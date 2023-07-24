import React from 'react'
import '../App.scss'

const Nav = () => {
  return (
    <div className='nav'>
        <div className="logo"> <h2>trxvl.</h2> </div>
        <div className="menu">
            <a href="#">Home</a>
            <a href="#">Stays</a>
            <a href="#">Flights</a>
            <a href="#">Packages</a>
            <a href="#"><button>Sign Up</button></a>
        </div>
    </div>
  )
}

export default Nav