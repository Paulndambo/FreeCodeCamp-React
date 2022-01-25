import React from "react";
import Header from "./Header";
import Meme from "./Meme";
import Challenge from "./Challenge";
import Challenge2 from "./Challenge2";
import Challenge3 from "./Challenge3";


const Home = () => {
    const name = "Paul Ndambo"
    return(
        <div>
            <Header />
            <Meme />
            <Challenge3 />
        </div>
    )
}

export default Home;