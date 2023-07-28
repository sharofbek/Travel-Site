import React from 'react'
import Nav from '../Components/Nav'
import Block from '../Components/Block'
import Vacation from '../Components/Vacation'
import Offers from '../Components/Offers'
import Browse from '../Components/Browse'
import Plan from '../Components/Plan'
import Community from '../Components/Community'
import Footer from '../Components/Footer'
import Support from '../Components/Support'
import FooterMedia from '../Components/FooterMedia'


export default function Home() {
    return (
        <div>
            <Nav />
            <Block />
            <Vacation />
            <Offers />
            <Browse />
            <Plan />
            <Community />
            <Footer />
            <Support />
            <FooterMedia />
        </div>
    )
}
