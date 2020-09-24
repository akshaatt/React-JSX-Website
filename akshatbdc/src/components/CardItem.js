import React from 'react'
import { Link } from 'react-router-dom'
import img from '../img-13.jpg';
import img1 from '../img-12.jpg';
import logo from '../logo194.png';

function CardItem(props) {
    return (
        <>
        <li className='cards__item'>
            <Link className='cards__item__link' to={props.path}>
                <figure className='cards__item__pic-wrap' data-cateogary={props.label}>
                    <img src={props.src} alt="SERVICES" className='cards__item__img' />
                </figure>
                <div className='cards__item__info'>
                    <h5 className='cards__item__text'>{props.text}
                    </h5>
                </div>
            </Link>
        </li>

        </>
    )
}

export default CardItem
