import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import '../App.scss'

import Paris from '../Assets/Images/1-landing/Paris.jpg'
import Sydney from '../Assets/Images/1-landing/image 18 (1).png'
import Kerry from '../Assets/Images/1-landing/image 18 (2).png'
import Bali from '../Assets/Images/1-landing/image 18 (3).png'

const Vacation = () => {
    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 3 },
    };

    const items = [
        <div className='card' data-value='1'>
            <img src={Bali} alt="" />
            <h1 className='cardTitle'>
                Bali, Indonesia
            </h1>
        </div>,
        <div className='card' data-value='2'>
            <img src={Kerry} alt="" />
            <h1 className='cardTitle'>
                Kerry, Ireland
            </h1>
        </div>,
        <div className='card' data-value='3'>
            <img src={Sydney} alt="" />
            <h1 className='cardTitle'>
                Sydney, Australia
            </h1>
        </div>,
        <div className='card' data-value='4'>
            <img src={Paris} alt="" />
            <h1 className='cardTitle'>
                Paris, France
            </h1>
        </div>,

    ];



    return (
        <div className='vacation1'>
            <h1 className='h1'>Top Vacation Destinations</h1>
            <div className="vacation">
                <AliceCarousel mouseTracking items={items} responsive={responsive} controlsStrategy="alternate" />
            </div>
        </div>
    )
}

export default Vacation