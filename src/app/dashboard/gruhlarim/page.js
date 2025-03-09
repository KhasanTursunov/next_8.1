import Todos from "@/components/Gruhlarim";
import React from "react";

const Gruhlarim = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/todos");
  const payload = await data.json();
  console.log(payload);

  return (
    <div>
      <Todos payload={payload} />
    </div>
  );
};

export default Gruhlarim;
