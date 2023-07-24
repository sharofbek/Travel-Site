import React from 'react'
import './App.scss'

import Nav from './Components/Nav'
import Block from './Components/Block'
import Offers from './Components/Offers'
import Browse from './Components/Browse'
import Plan from './Components/Plan'
import Community from './Components/Community'

const App = () => {
  return (
    <div className='container'>
      <Nav/>
      <Block/>
      <Offers/>
      <Browse/>
      <Plan/>
      <Community/>
    </div>
  )
}

export default App