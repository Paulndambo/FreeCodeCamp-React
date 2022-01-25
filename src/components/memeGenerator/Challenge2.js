import React, { useState } from 'react';

const Challenge2 = () => {
    const [names, setNames] = useState(["Paul", "Hellen"])

    function newName() {
        setNames(namesArray => [...namesArray, `Name ${namesArray.length + 1}`])
    }

    const mappedNames = names.map(name => <h5>{name}</h5>)
  return (
  <div>
      <button onClick={newName}>New Name</button>
      {mappedNames}
  </div>);
};

export default Challenge2;
