import React from 'react'
import CardItem from './CardItem'
import './Cards.css';
import img from '../img-13.jpg';
import img1 from '../img-12.jpg';
import logo from '../logo195.png';
import img2 from '../img-03.png';

function Cards() {
    return (
        <div className='cards'>
        <h1>BIG DATA CENTER OF EXCELLENCE</h1>
        <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                    <CardItem 
                        src={logo}
                        text="About Us"
                        // label="SERVICES"
                        path='/about'
                    />
                    <CardItem 
                        src={img}
                        text="BDCoE Events"
                        // label="SERVICES"
                        path='/event'
                    />
                    <CardItem 
                        src={img1}
                        text="Recruitment DRiVE"
                        // label="SERVICES"
                        path='/procedure'
                    />
                    <CardItem 
                        src={img2}
                        text="Photo Gallery"
                        // label="SERVICES"
                        path='/pics'
                    />
              
                </ul>
               
            </div>
        </div>
            
        </div>
    )
}

export default Cards
