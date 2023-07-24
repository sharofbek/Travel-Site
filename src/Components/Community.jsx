import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css';
import { Card } from 'antd';

import India from '../Assets/Images//1-landing/Frame 31 (3).png'
import Travel from '../Assets/Images//1-landing/Frame 31 (2).png'
import Beach from '../Assets/Images//1-landing/Frame 31 (1).png'

const Community = () => {
    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 3 },
    };


    const items = [
        <div className='CARD' data-value='1'>
            <img src={India} alt="" />
            <h3>India</h3>
            <p>Travel Community</p>
            <span>155,073 travelers</span>
        </div>,
        <div className='CARD' data-value='2'>
            <img src={Travel} alt="" />
            <h3>Travel Talk</h3>
            <p>Travel Community</p>
            <span>155,073 travelers</span>
        </div>,
        <div className='CARD' data-value='3'>
            <img src={Beach} alt="" />
            <h3>Beach</h3>
            <p>Travel Community</p>
            <span>155,073 travelers</span>
        </div>,
        <div className='CARD' data-value='4'>
            <img src={India} alt="" />
            <h3>India</h3>
            <p>Travel Community</p>
            <span>155,073 travelers</span>
        </div>,
    ]
    return (
        <div className='connect'>
            <h1>Connect with other travellers in our community</h1>
            <div className="connect-card">
                <AliceCarousel mouseTracking items={items} responsive={responsive} />   
            </div>
        </div>
    )
}

export default Community