import React from "react";

import Navbar from "./Navbar";
import Hero from "./Hero";
import Card from "./Card";
import Challenge from "./Challenge";
import data from "./data";

const Home = () => {
  const cards = data.map((item) => {
    return (
      <Card
        key={item.id}
        item = {item}
      />
    );
  });

  return (
    <div>
      <Navbar />

      <Hero />
      <h3>Cards!!</h3>
      <section className="cards-list">
      {cards}
      </section>
    </div>
  );
};

export default Home;
