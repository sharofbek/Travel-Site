import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css';

import Villas from '../Assets/Images/1-landing/image 18 (4).png'
import Resorts from '../Assets/Images/1-landing/image 18 (5).png'
import Apartments from '../Assets/Images/1-landing/image 18 (6).png'
import Hotel from '../Assets/Images/1-landing/image 18 (7).png'

const Browse = () => {

    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 3 },
    };

    const items = [
        <div className='card' data-value='1' > <img src={Hotel} alt="" /> <h1 className='cardTitle'> Hotels </h1> </div>,
        <div className='card' data-value='2' > <img src={Apartments} alt="" /> <h1 className='cardTitle'> Apartments </h1> </div>,
        <div className='card' data-value='3' > <img src={Resorts} alt="" /> <h1 className='cardTitle'> Resorts </h1> </div>,
        <div className='card' data-value='4' > <img src={Villas} alt="" /> <h1 className='cardTitle'> Villas </h1> </div>,
    ]
    return (
        <div className='browse'>
            <h1>Browse by property type</h1>
            <div className="browse-card">
                <AliceCarousel className='AliceCarousel' mouseTracking responsive={responsive} items={items} />
            </div>
        </div>
    )
}

export default Browse