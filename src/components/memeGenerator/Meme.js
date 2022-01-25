import React from 'react';
import { useState } from 'react/cjs/react.development';
import "./meme.css";
import memesData from './memesData';

const Meme = () => {

  
    

    const [memeImage, setMemeImage] = useState("")

    function getMemeImage() {
      const memes = memesData["data"]["memes"]
      const randomMemeUrl = memes[Math.floor(Math.random() * memes.length)].url
      console.log(randomMemeUrl)
      setMemeImage(randomMemeUrl)
    }
  

  return (
      <main>
        <div className='form'>
            <input 
                type="text" 
                className='form--inputs' 
                placeholder='Top text' 
            />
            <input 
                type="text" 
                className='form--inputs' 
                placeholder='Bottom text' 
            />
            
            <button onClick={getMemeImage} className='form--button'>Get a new meme image</button>

        </div>
        <img src={memeImage} className="meme--image" />
      </main>
  );
};

export default Meme;
