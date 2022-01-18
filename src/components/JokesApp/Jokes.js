import React from 'react';
import Joke from "./Joke";
import jokesData from "./jokesData";

const Jokes = () => {
    const jokeElements = jokesData.map(joke => {
        return <Joke joke={joke.joke} punchline={joke.punchline} />
    })
    return (
        <div>
            <h3>Jokes App</h3>
            <hr/>
            {jokeElements}
        </div>
    )
}

export default Jokes
