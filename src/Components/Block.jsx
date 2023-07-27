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
import Beach from '../Assets/Beach.png'
import Deset from '../Assets/Desert.png'
import Mount from '../Assets/mountain.png'
import Pizza from '../Assets/pizza.png'
import House from '../Assets/boat.png'


const Block = () => {

    const intialReducer = [
        {
            img: Ostrov,
            img1:Beach,
            text: 'Beaches',
            text1: 'Beaches'
        },
        {
            img: Desert,
            img1:Deset,
            text: 'Deserts',
            text1: 'Deserts',
        },
        {
            img: Mountain,
            img1:Mount,
            text: 'Mountains',
            text1: 'Mountains',
        },
        {
            img: Cities,
            img1: Pizza,
            text: 'Iconic Cities',
            text1: 'Iconic ',
        },
        {
            img: Boat,
            img1:House,
            text: 'HouseBoats',
            text1: 'HouseBoats',
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


    const reducer = () => {

    }
    const [state, dispatch] = useReducer(reducer, intialReducer)





    return (
        <div className='block'>
            <h1 className='whole'>The whole world awaits.</h1>
            <div className="search">
                <div className="inputSearch">
                    <img src={require('../Assets/Images/1-landing/akar-icons_search.png')} className='searchIcon' alt="" />
                    <input type="text" placeholder='Search destinations' />
                </div>

                <div className='icons'>
                    <div className='mediaIcon'>
                        <div className='chek chek-1'>
                            <img src={Calendar} alt="" />
                            <span>Check in</span>
                        </div>
                        <div className='chek'>
                            <img src={Calendar} alt="" />
                            <span>Check Out</span>
                        </div>
                    </div>
                    <div className="chek person">
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
                            <img src={item.img} alt="" className='img' />
                            <img src={item.img1} alt="" className='img1' />
                            <p className='text1'>{item.text1}</p>
                            <p className='text'>{item.text}</p>
                        </div>)
                    }

                </div>
            </div>


        </div>
    )
}

export default Block