import React, { useReducer } from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import './block.css'
import Calendar from '../Assets/Images/1-landing/akar-icons_calendar.png'
import Person from '../Assets/Images/1-landing/fontisto_male.png'
import Ostrov from '../Assets/Images/1-landing/image 4.png'
import Desert from '../Assets/Images/1-landing/image 16.png'
import Mountain from '../Assets/Images/1-landing/image 3.png'
import Cities from '../Assets/Images/1-landing/image 13.png'
import Boat from '../Assets/Images/1-landing/image 17.png'
import Countryside from '../Assets/Images/1-landing/image 10.png'
import Camp from '../Assets/Images/1-landing/image 5.png'
import Castle from '../Assets/Images/1-landing/image 12.png'
import Skiing from '../Assets/Images/1-landing/image 15.png'
import Tropic from '../Assets/Images/1-landing/image 8.png'
import Paris from '../Assets/Images/1-landing/Paris.jpg'
import Sydney from '../Assets/Images/1-landing/image 18 (1).png'
import Kerry from '../Assets/Images/1-landing/image 18 (2).png'
import Bali from '../Assets/Images/1-landing/image 18 (3).png'
import Bali1 from '../Assets/Images/1-landing/image 18.png'



const Block = () => {

    const intialReducer = [
        {
            img: Ostrov,
            text: 'Beaches'
        },
        {
            img: Desert,
            text: 'Deserts'
        },
        {
            img: Mountain,
            text: 'Mountains'
        },
        {
            img: Cities,
            text: 'Iconic Cities'
        },
        {
            img: Boat,
            text: 'HouseBoats'
        },
        {
            img: Countryside,
            text: 'Countryside'
        },
        {
            img: Camp,
            text: 'Camping'
        },
        {
            img: Castle,
            text: 'Castles'
        },
        {
            img: Skiing,
            text: 'Skiing'
        },
        {
            img: Tropic,
            text: 'Tropical'
        },
    ]
    const intialCard = [
        {
            imgCard: Bali,
            cardText: 'Bali, Indonesia'
        },
        {
            imgCard: Kerry,
            cardText: 'Kerry, Ireland'
        },
        {
            imgCard: Sydney,
            cardText: 'Sydney, Australia'
        },
        {
            imgCard: Paris,
            cardText: 'Paris, France'
        },


    ]

    const reducer = () => {

    }
    const [state, dispatch] = useReducer(reducer, intialReducer)
    const [card, dispatch1] = useReducer(reducer, intialCard)

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
        <div className='block'>
            <h1 className='whole'>The whole world awaits.</h1>
            <div className="search">
                <div className="inputSearch">
                    <img src={require('../Assets/Images/1-landing/akar-icons_search.png')} alt="" />
                    <input type="text" placeholder='Search destinations, hotels' />
                </div>

                <div className='icons'>
                    <div className='chek'>
                        <img src={Calendar} alt="" />
                        <span>Check in</span>
                    </div>
                    <div className='chek'>
                        <img src={Calendar} alt="" />
                        <span>Check Out</span>
                    </div>
                    <div className="chek">
                        <img src={Person} alt="" />
                        <span>1 room, 2 adults</span>
                    </div>

                    <button>Search</button>

                </div>
            </div>
            <div className="categories">
                <h1>Top categories</h1>
                <div className="categories-img">
                    {
                        state.map((item, index) => <div className='top' key={index}>
                            <img src={item.img} alt="" />
                            <p>{item.text}</p>
                        </div>)
                    }

                </div>
            </div>

            <h1 className='h1'>Top Vacation Destinations</h1>
            <div className="vacation">
                {/*                 
                {
                    card.map((card, index) => <div className='card' key={index}>
                        <img src={card.imgCard} alt="" />
                        <h2 className='cardTitle'>{card.cardText}</h2>
                    </div>)
                } */}
                <AliceCarousel mouseTracking items={items} responsive={responsive} controlsStrategy="alternate" />


            </div>
        </div>
    )
}

export default Block