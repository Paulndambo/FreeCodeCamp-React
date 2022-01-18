import React from 'react'

const Challenge = (props) => {
    const date = new Date()
    const hours = date.getHours()

    let timeOfDay

    if (hours < 12) {
        timeOfDay = "Morning"
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = "Afternoon"
    } else {
        timeOfDay = "Night"
    }

    return (
        <div className='contacts'>
            <div className='contact-card'>
                <h3>{props.name}</h3>
                <div className='info-group'>
                    <p>{props.phone}</p>
                </div>
                <div className='info-group'>
                    <p>{props.email}</p>
                </div>
            </div>
            
        </div>
    )
}

export default Challenge
