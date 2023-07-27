import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import App from '../App'

const Support = () => {
    return (
        <div className='Support'>
            <div className="logo">
                <h1>Trxvl.</h1>
            </div>
            <div className='support'>
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
            </div>
            <div className="social">
                <div className="p">
                    <button>Helmet KOD</button>
                    <p>© 1997-2021 Netflix, Inc.  (i-062d573a0ee099242)</p>

                </div>
                <div className="socials">
                    <img src={require('../Assets/Images/1-landing/facebook.png')} alt="" />
                    <img src={require('../Assets/Images/1-landing/instagram.png')} alt="" />
                    <img src={require('../Assets/Images/1-landing/twitter.png')} alt="" />
                    <img src={require('../Assets/Images/1-landing/youtube.png')} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Support