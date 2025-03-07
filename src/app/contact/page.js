import Products from "@/components/Products";
import React from "react";

const Contact = async () => {
  const data = await fetch("https://dummyjson.com/products");
  const payload = await data.json();
  console.log(payload);
  return (
    <div>
      <Products payload={payload}/>
      
    </div>
  );
};

export default Contact;
