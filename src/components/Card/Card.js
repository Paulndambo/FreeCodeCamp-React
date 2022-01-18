import React from 'react';
import "./card.css";

function About() {
    return(
        <div style={{color: "white"}}>
            <h3>About</h3>
            <p>Am a student of Information Technology at the Masinde Muliro University of Science and Technology.
                Am not too dark-skinned, infact when i bath well people think am light skinned. I love being myself
                and doing whatever i like.
            </p>
        </div>
    )
}

function Interests() {
    return(
        <div style={{color: "white"}}>
            <h3>Interests</h3>
            <p>I find interest in quite a number of things in life. Some of them are;-</p>
            <ol>
                <li>Cooking and Eating</li>
                <li>Watching Movies</li>
                <li>Coding and Reviewing Code!</li>
                <li>Living my life</li>
            </ol>
        </div>
    )
}


function SocialLinks() {
    return(
        <div className='buttons'>
            <button>Twitter</button>
            <button className='button-2'>Linkedin</button>
        </div>
    )
}

function Top() {
    return(
        <div className='top'>
            <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--7Yv3UVau--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/257104/b744cc12-4d63-4f16-9dc5-298db032da10.jpeg" />
            <h1>Paul Ndambo</h1>
            <h6>FullStack Software Developer</h6>
            <SocialLinks/>
        </div>
    )
}

function Footer() {
    return(
        <div className='footer-icons'>
            <button>Facebook</button>
            <button>Instagram</button>
            <button>Twitter</button>
            <button>TikTok</button>
        </div>
    )
}

const Card = () => {
    return (
        <div className='card'>
            <Top/>
            <About/>
            <Interests/>
            <Footer/>
        </div>
    )
}

export default Card
