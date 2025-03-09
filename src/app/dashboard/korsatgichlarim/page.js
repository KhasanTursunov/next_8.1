import Users from "@/components/Korsatgichlarim";
import React from "react";

const Korsatgichlarim = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/users");
  const payload = await data.json();
  console.log(payload);

  return (
    <div>
      <Users payload={payload} />
    </div>
  );
};

export default Korsatgichlarim;
