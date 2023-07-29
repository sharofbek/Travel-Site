import React, { useEffect, useState } from 'react'
import '../App.scss'
import { Link, } from 'react-router-dom'
import { Fade ,Bounce } from 'react-reveal';


import Root from '../Root'
import App from '../App'

const Nav = () => {

  const [value, setValue] = useState(new Date());




  return (
    <Fade top cascade><div className='nav'>


      <div className="logo"> <h2>trxvl.</h2> </div>
      <Bounce top cascade><div className="menu">
        <Link to={'/'}>Home</Link>
        <Link to={'/page_2'}>Stays</Link>
        <Link >Flights</Link>
        <Link >Packages</Link>
        <Link >Sign Up</Link>
      </div></Bounce>


    </div>
    </Fade>

  )
}

export default Nav