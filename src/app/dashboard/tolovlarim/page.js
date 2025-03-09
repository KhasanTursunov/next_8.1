import Posts from "@/components/Tolovlarim";
import React from "react";

const Tolovlarim = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  const payload = await data.json();
  console.log(payload);
  
  return (
    <div>
      <Posts payload={payload} />
    </div>
  );
};

export default Tolovlarim;
