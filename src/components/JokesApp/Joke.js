import React from 'react'

const Joke = (props) => {
    return (
        <div>
                    
                {props.joke && <p>Joke: {props.joke}</p>}
                <p>Punchline: {props.punchline}</p>
                <p>Upvotes: {props.upvotes} <span>DownVotes: {props.downvotes}</span></p>
                <p>Is Funny: {props.isFun}</p>
                <p>Composers: {props.composers}</p>
                <hr/>
            
        </div>
    )
}

export default Joke
