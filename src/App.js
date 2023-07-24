import React from 'react'
import './App.scss'

import Nav from './Components/Nav'
import Block from './Components/Block'
import Offers from './Components/Offers'
import Browse from './Components/Browse'

const App = () => {
  return (
    <div className='container'>
      <Nav/>
      <Block/>
      <Offers/>
      <Browse/>
    </div>
  )
}

export default App