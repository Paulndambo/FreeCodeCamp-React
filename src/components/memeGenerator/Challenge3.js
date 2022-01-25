import React, { useState } from 'react';


const Challenge3 = () => {
    const [contact, setContact] = useState({
        firstName: "Paul",
        lastName: "Ndambo",
        phone: "+2547894782592",
        email: "hellenwain@gmail.com",
        isFavorite: false
    })

    let friendBadge = contact.isFavorite ? "Family" : "Friend"
   
    function toggleFavorite() {
        setContact(prevContact => ({
            ...prevContact,
            isFavorite: !prevContact.isFavorite
        }))
        

    }

   

  return (
  <div>
      <h2 key={contact.firstName}>Name: {contact.firstName} {contact.lastName}</h2>
        <h3>Phone: {contact.phone}</h3>
        <h3>email: {contact.email}</h3>
        <button onClick={toggleFavorite}>{friendBadge}</button>
  </div>
  );
};

export default Challenge3;
