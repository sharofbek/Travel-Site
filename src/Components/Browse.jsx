import React from 'react'

import Hotel from '../Assets/Images/1-landing/image 18 (4).png'

const Browse = () => {
    return (
        <div className='browse'>
            <h1>Browse by property type</h1>
            <div className="browse-card">
                <div className='card' data-value='1'>
                    <img src={Hotel} alt="" />
                    <h1 className='cardTitle'>
                        Hotels 
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default Browse