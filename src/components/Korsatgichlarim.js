"use client";
import React from "react";

const Korsatgichlarim = ({ payload }) => {
  return (
    <div className="container max-w-7xl mx-auto p-6 flex flex-wrap gap-8 justify-center">
      {payload?.map((user) => (
        <div
          key={user.id}
          className="w-[260px] p-4 border border-gray-300 rounded-lg shadow-md"
        >
          <h3 className="text-lg font-semibold mb-2">{user.name}</h3>
          <p className="text-gray-600">@{user.username}</p>
          <p className="text-gray-600">{user.email}</p>
          <p className="text-gray-500 text-sm">{user.company.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Korsatgichlarim;
