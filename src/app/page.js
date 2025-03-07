import Recipes from "@/components/Recipes";
import React from "react";

const Home = async () => {
  const data = await fetch("https://dummyjson.com/recipes");
  const RecipesPayload = await data.json();
  console.log(RecipesPayload);
  return (
    <div>
      <Recipes RecipesPayload={RecipesPayload} />
    </div>
  );
};

export default Home;
