import Users from "@/components/Users"
import React from 'react'

const User = async () => {
  const data = await fetch("https://dummyjson.com/users");
  const userPayload = await data.json();
  console.log(userPayload);
  return (
    <div>
      <Users userPayload={userPayload} />
    </div>
  );
};

export default User;