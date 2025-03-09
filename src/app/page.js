import Header from "@/components/Header";
import Recipes from "@/components/Recipes";
import React from "react";
import Showcase from "@/components/Showcase";

const Home = async () => {
  const data = await fetch("https://dummyjson.com/recipes");
  const RecipesPayload = await data.json();
  console.log(RecipesPayload);
  return (
    <div>
      <Header/>
      <Showcase/>
      <Recipes RecipesPayload={RecipesPayload} />
    </div>
  );
};

export default Home;
