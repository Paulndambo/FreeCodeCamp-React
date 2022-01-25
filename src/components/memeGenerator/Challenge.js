import React, { useState } from 'react';

const Challenge = () => {
    const [things, setThings] = useState(["Hello", "World", "Cooking", "Eating"])
   
    let item 
    function newThing() {
       item = `Thing ${things.length + 1}`
        setThings(prevState => [...prevState, item])
    }

    const thingsElement = things.map(thing => <p key={thing}>{thing}</p>)

    let message 
    let timeOfDay 
    const date = new Date();
    const hours = date.getHours();
    function greeting(name) {
        if (hours >= 4 && hours <= 11) {
            timeOfDay = "Morning"
            message = `Good ${timeOfDay}, ${name}!`
        } else {
            timeOfDay = "Day"
            message= `Good ${timeOfDay},${name}!`
        }

    }
    greeting("Ndambo")

    const [isImportant, setIsImportant] = useState("Yes")

    function handleClick() {
        setIsImportant("No")
    }

   const [count, setCount] = useState(0)

   const increase = () => {
       setCount(prevCount => prevCount + 1)
   }

   const decrease = () => {
       setCount(prevCount => prevCount - 1)
   }

   const isGoingOut = false;
   const isLoggedIn = true;

   let answer = isGoingOut ? "Yes" : "No"

   const [isAdmin, setAdmin] = useState(false);

   function flipAdmin() {
       setAdmin(prevState => !prevState)
   }

   const [thingsArray, setThingsArray] = useState(["Thing 1", "Thing 2"])

   
   function newItem() {
       setThingsArray(prevThingsArray => [...prevThingsArray, `Thing ${prevThingsArray.length + 1}`])
   }

   const mappedThings = thingsArray.map(mapThing => <h5 key={mapThing}>{mapThing}</h5>)



  return (
      <div className='container'>
         <button onClick={newItem}>Add Item</button>
         {mappedThings}
         <hr/>
      </div>
  );
};

export default Challenge;
