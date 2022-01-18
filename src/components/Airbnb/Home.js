import React from "react";

import Navbar from "./Navbar";
import Hero from "./Hero";
import Card from "./Card";
import Challenge from "./Challenge";
import data from "./data";

const Home = () => {
  console.log(data);
  const cards = data.map((item) => {
    return (
      <Card
        key={item.id}
        img={item.coverImg}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        location={item.location}
        title={item.title}
        price={item.price}
        openSpots={item.openSpots}
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
