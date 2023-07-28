import React from 'react'
import './App.scss'
import './Root.scss'
import './AppMedia.scss'
import { Route, Routes } from 'react-router'

import Nav from './Components/Nav'
import Block from './Components/Block'
import PopularCard from './Components2/PopularCard'
import Support from './Components/Support'
import FooterMedia from './Components/FooterMedia'


const Root = () => {
  return (
    <div className='container1'>
      <Nav />
      <Block />
      <PopularCard />
      <Support />
      <FooterMedia/>
    </div>
  )
}

export default Root;
