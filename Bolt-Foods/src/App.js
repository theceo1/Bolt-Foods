import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HeadlinesCard from "./components/HeadlinesCard";
import Food from "./components/Food";
import Category from "./components/Category";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <HeadlinesCard />
      <Food />
      <Category />
    </div>
  );
}

export default App;
