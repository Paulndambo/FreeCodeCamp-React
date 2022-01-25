import React from 'react';
import "./airbnb.css"

const Card = (props) => {

    let badgeText 
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE"
    } else if (!props.item.location === "Online" && !props.item.openSpots === 0) {
        badgeText = ""
    }

    console.log(props.item)

    return (
        <div className='card'>
            { badgeText && <div className='card-badge'>{badgeText}</div>}
            <img src={props.item.coverImg} className='card-image' />
            <div className='card-stats'>
                <span>{props.item.stats.rating}</span>
                <span className='gray'>({props.item.stats.reviewCount}) </span>
                <span className='gray'>{props.item.location}</span>
            </div>
            <p className='card-title'>{props.item.title}</p>
            <p><span className='bold'>From ${props.item.price}</span> / person</p>
        </div>
    )
}

export default Card;
