import React from 'react'

import Iphone from '../Assets/Images/1-landing/iPhone 13 Mockup label.png'
import App from '../Assets/Images/1-landing/image 22.png'
import Play from '../Assets/Images/1-landing/image 23.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="iphone"><img src={Iphone} alt="" /></div>

      <div className="footer-text">
        <h1>Your all-in-one travel app.</h1>
        <p>
          Book flights, hotels, trains & rental cars anywhere in the world in just seconds. Get real-time flight updates, travel info,
          exclusive deals, and 30% more Trip Coins only on the app!
        </p>

        <form>
          <div className="email">
            <div className="buttons">
              <button type='button'>Mobile</button>
              <button type='button'>Email</button>
            </div>
            <div className="search-number">
              <p>Enter your phone number to receive a text with a link to download the app.</p>
              <div className="number">
                <input type="text" placeholder='+91 Mobile number'/>
                <button type='button'>Search</button>
              </div>
            </div>
          </div>
    
          <div className="or">
            <div className="hr"></div>
            <span>or</span>
            <div className="hr"></div>
          </div>
          <div className="download">
            <img src={Play} alt="" />
            <img src={App} alt="" />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Footer