"use client";
import React from "react";
import { useRouter } from "next/navigation";

const Tolovlarim = ({ payload }) => {
  const router = useRouter();

  return (
    <div className="container max-w-7xl mx-auto p-6 flex flex-wrap gap-8 justify-center">
      {payload?.map((post) => (
        <div
          className="w-[300px] p-4 border border-gray-200 rounded-lg shadow-md"
          key={post.id}
        >
          <h3 className="text-xl font-bold mb-2">{post.title}</h3>
          <p className="text-gray-600">{post.body}</p>
          <button
            onClick={() => router.push(`/post/${post.id}`)}
            className="mt-3 cursor-pointer bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Read More
          </button>
        </div>
      ))}
    </div>
  );
};

export default Tolovlarim;
