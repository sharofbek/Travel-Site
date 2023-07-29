import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import { Fade, Bounce, Zoom } from 'react-reveal';

import App from '../App'

const Support = () => {
    return (
        <div className='Support'>
           <Fade left> <div className="logo">
                <h1>Trxvl.</h1>
            </div></Fade>
           <Bounce right cascade> <div className='support'>
                <div className="help">
                    <p>Seslendirme ve Alt Jazz</p>
                    <p>Media Market</p>
                    <p>Gillie</p>
                    <p>Size Last</p>
                </div>
                <div className="help">
                    <p>Self Betimes</p>
                    <p>Yatırımcı İlişkileri</p>
                    <p>Basal Himmler</p>
                </div>
                <div className="help">
                    <p>Yard Market</p>
                    <p>Is İmkanları</p>
                    <p>Car Tercihleri</p>
                </div>
                <div className="help">
                    <p>Hedge Karla</p>
                    <p>Mullein Koşulları</p>
                    <p>Autumnal Bulgier</p>
                </div>
            </div></Bounce>
            <div className="social">
                <div className="p">
                    <button>Helmet KOD</button>
                    <p>© 1997-2021 Netflix, Inc.  (i-062d573a0ee099242)</p>

                </div>
                <div className="socials">
                    <Link to={'https://www.facebook.com/sharofbek.xadjimatov.1'}><img src={require('../Assets/Images/1-landing/facebook.png')} alt="" /></Link>
                    <Link to={'https://www.instagram.com/_.sharofbek._366/'}> <img src={require('../Assets/Images/1-landing/instagram.png')} alt="" /> </Link>
                    <Link to={'https://twitter.com/_alisher0v1ch__'}> <img src={require('../Assets/Images/1-landing/twitter.png')} alt="" /> </Link>
                    <Link to={'https://www.youtube.com/channel/UC1XAu8U0bXteioEY5gp8P6Q'}> <img src={require('../Assets/Images/1-landing/youtube.png')} alt="" /> </Link>
                </div>
            </div>
        </div>
    )
}

export default Support