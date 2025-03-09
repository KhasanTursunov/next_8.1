"use client";
import React from "react";

const Gruhlarim = ({ payload }) => {
  return (
    <div className="container max-w-7xl mx-auto p-6 flex flex-wrap gap-8 justify-center">
      {payload?.map((todo) => (
        <div
          key={todo.id}
          className="w-[260px] p-4 border border-gray-300 rounded-lg shadow-md"
        >
          <h3 className="text-lg font-semibold mb-2">{todo.title}</h3>
          <p className="text-gray-600">
            Status: {todo.completed ? " Completed" : " Not Completed"}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Gruhlarim;
