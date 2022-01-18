import React from 'react';
import "./airbnb.css"

const Card = (props) => {
    return (
        <div className='card'>
            <div className='card-badge'>SOLD OUT</div>
            <img src={props.img} className='card-image' />
            <div className='card-stats'>
                <span>{props.rating}</span>
                <span className='gray'>({props.reviewCount}) </span>
                <span className='gray'>{props.location}</span>
            </div>
            <p className='card-title'>{props.title}</p>
            <p><span className='bold'>From ${props.price}</span> / person</p>
        </div>
    )
}

export default Card;
