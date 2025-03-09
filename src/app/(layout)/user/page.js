import Users from "@/components/Users"
import React from 'react'

const User = async () => {
  const data = await fetch("https://dummyjson.com/users");
  const payload = await data.json();
  console.log(payload);
  return (
    <div>
      <Users payload={payload} />
    </div>
  );
};

export default User;