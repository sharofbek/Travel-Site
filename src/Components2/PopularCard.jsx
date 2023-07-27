import React from "react";
import AliceCarousel from "react-alice-carousel";

import Swiss from '../Assets/Images/2-landing/Swiss.png'
import Hallstatt from '../Assets/Images/2-landing/Hallstatt.png'
import Island from '../Assets/Images/2-landing/Island.png'
import Innsbruck from '../Assets/Images/2-landing/Innsbruck.png'
import Fly from '../Assets/Images/2-landing/ic_baseline-flight.png'
import Hotel from '../Assets/Images/2-landing/ri_hotel-line.png'
import Car from '../Assets/Images/2-landing/cil_car-alt.png'
import Person from '../Assets/Images/2-landing/iconoir_trekking.png'
import Funes from './images/Funes.png'
import Ushuaia from './images/Ushuaia.png'
import Berchtes from './images/Berchtes.png'
import Fussen from './images/FUss.jfif'
import Bad from './images/Bad.png'
import Havelock from './images/havelock.png'
import Maur from './images/mauritius.png'
import Islands from './images/islands.png'

const PopularCard = () => {
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };

  const items1 = [
    <div className="popular-card" data-value='1'>
      <img className="img" src={Hallstatt} alt="" />
      <div className="star">
        <div>
          <h3>Hallstatt</h3>
          <p>3Days 4 Nights</p>
        </div>
        <p>⭐ 4.9</p>

      </div>

      <div className="card-icons">
        <div className="icon">
          <img src={Fly} alt="" />
          <p>2 Flights</p>
        </div>
        <div className="icon">
          <img src={Hotel} alt="" />
          <p>1 Hotel</p>
        </div>
        <div className="icon">
          <img src={Car} alt="" />
          <p>2 Transfers</p>
        </div>
        <div className="icon">
          <img src={Person} alt="" />
          <p>4 Activities</p>
        </div>


      </div>

      <ul>
        <li><p>Tour combo with return airport transfer</p></li>
        <li><p>City Tour</p></li>
        <li><p>Curioius Corner</p></li>
      </ul>
      <div className="price">
        <p>$8,952</p>
        <h2>$9,952 <sub>Per person</sub>  </h2>

      </div>
    </div>,
    <div className="popular-card" data-value='1'>
      <img className="img" src={Innsbruck} alt="" />
      <div className="star">
        <div>
          <h3>Innsbruck</h3>
          <p>3Days 4 Nights</p>
        </div>
        <p>⭐ 4.9</p>

      </div>

      <div className="card-icons">
        <div className="icon">
          <img src={Fly} alt="" />
          <p>2 Flights</p>
        </div>
        <div className="icon">
          <img src={Hotel} alt="" />
          <p>1 Hotel</p>
        </div>
        <div className="icon">
          <img src={Car} alt="" />
          <p>2 Transfers</p>
        </div>
        <div className="icon">
          <img src={Person} alt="" />
          <p>4 Activities</p>
        </div>


      </div>

      <ul>
        <li><p>Tour combo with return airport transfer</p></li>
        <li><p>City Tour</p></li>
        <li><p>Curioius Corner</p></li>
      </ul>
      <div className="price">
        <p>$8,952</p>
        <h2>$9,952 <sub>Per person</sub>  </h2>

      </div>
    </div>,
    <div className="summer-card" data-value='1'>
      <h2>Summer Bonanza!</h2>
      <p>Enjoy confortable transfers in shared coaches</p>
      <p>Choose from 5 flights per week</p>
      <p>Get a free Rapid Antigen Test at selected hotels</p>
    </div>
  ]

  const items2 = [
    <div className="popular-card" data-value='1'>
      <img className="img" src={Funes} alt="" />
      <div className="star">
        <div>
          <h3>Val di Funes</h3>
          <p>3Days 4 Nights</p>
        </div>
        <p>⭐ 4.7</p>

      </div>

      <div className="card-icons">
        <div className="icon">
          <img src={Fly} alt="" />
          <p>2 Flights</p>
        </div>
        <div className="icon">
          <img src={Hotel} alt="" />
          <p>1 Hotel</p>
        </div>
        <div className="icon">
          <img src={Car} alt="" />
          <p>2 Transfers</p>
        </div>
        <div className="icon">
          <img src={Person} alt="" />
          <p>4 Activities</p>
        </div>


      </div>

      <ul>
        <li><p>Tour combo with return airport transfer</p></li>
        <li><p>City Tour</p></li>
        <li><p>Curioius Corner</p></li>
      </ul>
      <div className="price">
        <p>$8,952</p>
        <h2>$9,952 <sub>Per person</sub>  </h2>

      </div>
    </div>,
    <div className="popular-card" data-value='1'>
      <img className="img" src={Ushuaia} alt="" />
      <div className="star">
        <div>
          <h3>Ushuaia</h3>
          <p>3Days 4 Nights</p>
        </div>
        <p>⭐ 4.9</p>

      </div>

      <div className="card-icons">
        <div className="icon">
          <img src={Fly} alt="" />
          <p>2 Flights</p>
        </div>
        <div className="icon">
          <img src={Hotel} alt="" />
          <p>1 Hotel</p>
        </div>
        <div className="icon">
          <img src={Car} alt="" />
          <p>2 Transfers</p>
        </div>
        <div className="icon">
          <img src={Person} alt="" />
          <p>4 Activities</p>
        </div>


      </div>

      <ul>
        <li><p>Tour combo with return airport transfer</p></li>
        <li><p>City Tour</p></li>
        <li><p>Curioius Corner</p></li>
      </ul>
      <div className="price">
        <p>$8,952</p>
        <h2>$9,952 <sub>Per person</sub>  </h2>

      </div>
    </div>,
    <div className="popular-card" data-value='1'>
      <img className="img" src={Berchtes} alt="" />
      <div className="star">
        <div>
          <h3>Berchtesgaden</h3>
          <p>3Days 4 Nights</p>
        </div>
        <p>⭐ 4.5</p>

      </div>

      <div className="card-icons">
        <div className="icon">
          <img src={Fly} alt="" />
          <p>2 Flights</p>
        </div>
        <div className="icon">
          <img src={Hotel} alt="" />
          <p>1 Hotel</p>
        </div>
        <div className="icon">
          <img src={Car} alt="" />
          <p>2 Transfers</p>
        </div>
        <div className="icon">
          <img src={Person} alt="" />
          <p>4 Activities</p>
        </div>


      </div>

      <ul>
        <li><p>Tour combo with return airport transfer</p></li>
        <li><p>City Tour</p></li>
        <li><p>Curioius Corner</p></li>
      </ul>
      <div className="price">
        <p>$8,952</p>
        <h2>$9,952 <sub>Per person</sub>  </h2>

      </div>
    </div>,
    <div className="popular-card" data-value='1'>
      <img className="img" style={{height:'228px'}} src={Fussen} alt="" />
      <div className="star">
        <div>
          <h3>Fussen</h3>
          <p>3Days 4 Nights</p>
        </div>
        <p>⭐ 4.9</p>

      </div>

      <div className="card-icons">
        <div className="icon">
          <img src={Fly} alt="" />
          <p>2 Flights</p>
        </div>
        <div className="icon">
          <img src={Hotel} alt="" />
          <p>1 Hotel</p>
        </div>
        <div className="icon">
          <img src={Car} alt="" />
          <p>2 Transfers</p>
        </div>
        <div className="icon">
          <img src={Person} alt="" />
          <p>4 Activities</p>
        </div>


      </div>

      <ul>
        <li><p>Tour combo with return airport transfer</p></li>
        <li><p>City Tour</p></li>
        <li><p>Curioius Corner</p></li>
      </ul>
      <div className="price">
        <p>$8,952</p>
        <h2>$9,952 <sub>Per person</sub>  </h2>

      </div>
    </div>,
  ];
  const items = [
    <div className="popular-card" data-value='1'>
      <img className="img" src={Swiss} alt="" />
      <div className="star">
        <div>
          <h3>Swiss Apls</h3>
          <p>3Days 4 Nights</p>
        </div>
        <p>⭐ 4.7</p>

      </div>

      <div className="card-icons">
        <div className="icon">
          <img src={Fly} alt="" />
          <p>2 Flights</p>
        </div>
        <div className="icon">
          <img src={Hotel} alt="" />
          <p>1 Hotel</p>
        </div>
        <div className="icon">
          <img src={Car} alt="" />
          <p>2 Transfers</p>
        </div>
        <div className="icon">
          <img src={Person} alt="" />
          <p>4 Activities</p>
        </div>


      </div>

      <ul>
        <li><p>Tour combo with return airport transfer</p></li>
        <li><p>City Tour</p></li>
        <li><p>Curioius Corner</p></li>
      </ul>
      <div className="price">
        <p>$8,952</p>
        <h2>$9,952 <sub>Per person</sub>  </h2>

      </div>
    </div>,
    <div className="popular-card" data-value='1'>
      <img className="img" src={Hallstatt} alt="" />
      <div className="star">
        <div>
          <h3>Hallstatt</h3>
          <p>3Days 4 Nights</p>
        </div>
        <p>⭐ 4.9</p>

      </div>

      <div className="card-icons">
        <div className="icon">
          <img src={Fly} alt="" />
          <p>2 Flights</p>
        </div>
        <div className="icon">
          <img src={Hotel} alt="" />
          <p>1 Hotel</p>
        </div>
        <div className="icon">
          <img src={Car} alt="" />
          <p>2 Transfers</p>
        </div>
        <div className="icon">
          <img src={Person} alt="" />
          <p>4 Activities</p>
        </div>


      </div>

      <ul>
        <li><p>Tour combo with return airport transfer</p></li>
        <li><p>City Tour</p></li>
        <li><p>Curioius Corner</p></li>
      </ul>
      <div className="price">
        <p>$8,952</p>
        <h2>$9,952 <sub>Per person</sub>  </h2>

      </div>
    </div>,
    <div className="popular-card" data-value='1'>
      <img className="img" src={Island} alt="" />
      <div className="star">
        <div>
          <h3>Foroe Island</h3>
          <p>3Days 4 Nights</p>
        </div>
        <p>⭐ 4.5</p>

      </div>

      <div className="card-icons">
        <div className="icon">
          <img src={Fly} alt="" />
          <p>2 Flights</p>
        </div>
        <div className="icon">
          <img src={Hotel} alt="" />
          <p>1 Hotel</p>
        </div>
        <div className="icon">
          <img src={Car} alt="" />
          <p>2 Transfers</p>
        </div>
        <div className="icon">
          <img src={Person} alt="" />
          <p>4 Activities</p>
        </div>


      </div>

      <ul>
        <li><p>Tour combo with return airport transfer</p></li>
        <li><p>City Tour</p></li>
        <li><p>Curioius Corner</p></li>
      </ul>
      <div className="price">
        <p>$8,952</p>
        <h2>$9,952 <sub>Per person</sub>  </h2>

      </div>
    </div>,
    <div className="popular-card" data-value='1'>
      <img className="img" src={Innsbruck} alt="" />
      <div className="star">
        <div>
          <h3>Innsbruck</h3>
          <p>3Days 4 Nights</p>
        </div>
        <p>⭐ 4.9</p>

      </div>

      <div className="card-icons">
        <div className="icon">
          <img src={Fly} alt="" />
          <p>2 Flights</p>
        </div>
        <div className="icon">
          <img src={Hotel} alt="" />
          <p>1 Hotel</p>
        </div>
        <div className="icon">
          <img src={Car} alt="" />
          <p>2 Transfers</p>
        </div>
        <div className="icon">
          <img src={Person} alt="" />
          <p>4 Activities</p>
        </div>


      </div>

      <ul>
        <li><p>Tour combo with return airport transfer</p></li>
        <li><p>City Tour</p></li>
        <li><p>Curioius Corner</p></li>
      </ul>
      <div className="price">
        <p>$8,952</p>
        <h2>$9,952 <sub>Per person</sub>  </h2>

      </div>
    </div>,
  ];
  const items4 = [
    <div className="popular-card" data-value='1'>
      <img className="img" src={Maur} alt="" />
      <div className="star">
        <div>
          <h3>Mauritius</h3>
          <p>3Days 4 Nights</p>
        </div>
        <p>⭐ 4.7</p>

      </div>

      <div className="card-icons">
        <div className="icon">
          <img src={Fly} alt="" />
          <p>2 Flights</p>
        </div>
        <div className="icon">
          <img src={Hotel} alt="" />
          <p>1 Hotel</p>
        </div>
        <div className="icon">
          <img src={Car} alt="" />
          <p>2 Transfers</p>
        </div>
        <div className="icon">
          <img src={Person} alt="" />
          <p>4 Activities</p>
        </div>


      </div>

      <ul>
        <li><p>Tour combo with return airport transfer</p></li>
        <li><p>City Tour</p></li>
        <li><p>Curioius Corner</p></li>
      </ul>
      <div className="price">
        <p>$8,952</p>
        <h2>$9,952 <sub>Per person</sub>  </h2>

      </div>
    </div>,
    <div className="popular-card" data-value='1'>
      <img className="img" src={Havelock} alt="" />
      <div className="star">
        <div>
          <h3>Havelock</h3>
          <p>3Days 4 Nights</p>
        </div>
        <p>⭐ 4.9</p>

      </div>

      <div className="card-icons">
        <div className="icon">
          <img src={Fly} alt="" />
          <p>2 Flights</p>
        </div>
        <div className="icon">
          <img src={Hotel} alt="" />
          <p>1 Hotel</p>
        </div>
        <div className="icon">
          <img src={Car} alt="" />
          <p>2 Transfers</p>
        </div>
        <div className="icon">
          <img src={Person} alt="" />
          <p>4 Activities</p>
        </div>


      </div>

      <ul>
        <li><p>Tour combo with return airport transfer</p></li>
        <li><p>City Tour</p></li>
        <li><p>Curioius Corner</p></li>
      </ul>
      <div className="price">
        <p>$8,952</p>
        <h2>$9,952 <sub>Per person</sub>  </h2>

      </div>
    </div>,
    <div className="popular-card" data-value='1'>
      <img className="img" src={Islands} alt="" />
      <div className="star">
        <div>
          <h3>Whitsunday Islands</h3>
          <p>3Days 4 Nights</p>
        </div>
        <p>⭐ 4.5</p>

      </div>

      <div className="card-icons">
        <div className="icon">
          <img src={Fly} alt="" />
          <p>2 Flights</p>
        </div>
        <div className="icon">
          <img src={Hotel} alt="" />
          <p>1 Hotel</p>
        </div>
        <div className="icon">
          <img src={Car} alt="" />
          <p>2 Transfers</p>
        </div>
        <div className="icon">
          <img src={Person} alt="" />
          <p>4 Activities</p>
        </div>


      </div>

      <ul>
        <li><p>Tour combo with return airport transfer</p></li>
        <li><p>City Tour</p></li>
        <li><p>Curioius Corner</p></li>
      </ul>
      <div className="price">
        <p>$8,952</p>
        <h2>$9,952 <sub>Per person</sub>  </h2>

      </div>
    </div>,
    <div className="popular-card" data-value='1'>
      <img className="img" src={Bad} alt="" style={{height:'228px'}} />
      <div className="star">
        <div>
          <h3>Maldives</h3>
          <p>3Days 4 Nights</p>
        </div>
        <p>⭐ 4.9</p>

      </div>

      <div className="card-icons">
        <div className="icon">
          <img src={Fly} alt="" />
          <p>2 Flights</p>
        </div>
        <div className="icon">
          <img src={Hotel} alt="" />
          <p>1 Hotel</p>
        </div>
        <div className="icon">
          <img src={Car} alt="" />
          <p>2 Transfers</p>
        </div>
        <div className="icon">
          <img src={Person} alt="" />
          <p>4 Activities</p>
        </div>


      </div>

      <ul>
        <li><p>Tour combo with return airport transfer</p></li>
        <li><p>City Tour</p></li>
        <li><p>Curioius Corner</p></li>
      </ul>
      <div className="price">
        <p>$8,952</p>
        <h2>$9,952 <sub>Per person</sub>  </h2>

      </div>
    </div>,
  ];

  return (
    <div>
      <div className="popular">
        <h1>Popular Beach Destinations</h1>
        <div className="popular-cards">
          <AliceCarousel mouseTracking items={items} responsive={responsive} controlsStrategy="alternate" />
        </div>
      </div>
      <div className="popular" style={{marginTop:'100px'}}>
        <h1  style={{color:'black',}}>Recently Viewed</h1>
        <div className="popular-cards">
          <AliceCarousel mouseTracking items={items1} responsive={responsive} controlsStrategy="alternate" />
        </div>
      </div>
      <div className="popular" style={{marginTop:'100px'}}>
        <h1  style={{color:'black',}}>All Inclusive Packages!</h1>
        <div className="popular-cards">
          <AliceCarousel mouseTracking items={items2} responsive={responsive} controlsStrategy="alternate" />
        </div>
      </div>
      <div className="popular" style={{marginTop:'100px', marginBottom:'100px'}}>
        <h1  style={{color:'black',}}>Honeymoon Freebies Special</h1>
        <div className="popular-cards">
          <AliceCarousel mouseTracking items={items4} responsive={responsive} controlsStrategy="alternate" />
        </div>
      </div>

    </div>
  );
};

export default PopularCard;
