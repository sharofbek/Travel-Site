import React from 'react'

import Plane from '../Assets/Images/1-landing/plane.png'
import House from '../Assets/Images/1-landing/house.png'

const Offers = () => {
  return (
    <div className='offers'>
        <h1 >Offers</h1>
        <div className="card-group">
            <div className="Card">
                <img src={Plane} alt="" />
                <div className="card-text">
                    <span>Domestic Flights</span>
                    <h2>Huge savings on flight with trxvl.</h2>
                    <p>Book domestic flights starting @ just ₹1459</p>
                    <button>Book Now</button>
                </div>
            </div>
            <div className="Card">
                <img src={House} alt="" />
                <div className="card-text">
                    <span>International Hotels</span>
                    <h2>Enjoy upto 20% off on International Hotels</h2>
                    <p>Make the most of  this deal on your first booking with trxvl.</p>
                    <button>Book Now</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Offers