"use client";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";
import { FaRegStar } from "react-icons/fa";

const Users = ({ payload }) => {
  const router = useRouter();
  return (
    <div className="container max-w-7xl mx-auto p-6 flex flex-wrap gap-8 justify-center">
      {payload?.users?.map((user) => (
        <div className="w-[260px]  p-2" key={user.id}>
          <div>
            <Image
              className="bg-[#EFEFEF] rounded-xl mb-2 cursor-pointer"
              onClick={() => router.push(`/user/${user.id}`)}
              src={user.image}
              alt={user.firstName}
              width={500}
              height={500}
            />
          </div>
          <div className="div_for_text flex flex-col gap-2">
            <div className="flex gap-2 flex-col">
                <div className="flex gap-2">
              <h3 className="line-clamp-1 text-xl">{user.firstName}</h3>
              <h3 className="line-clamp-1 text-xl">{user.lastName}</h3>
                </div>
              <h3 className="line-clamp-1 ">Age:      {user.age}</h3>
              <h3 className="line-clamp-1 ">Gender:      {user.gender}</h3>
              <h3 className="line-clamp-1 ">Number:      {user.phone}</h3>
              <h3 className="line-clamp-1 ">{user.country}</h3>
              <h3 className="line-clamp-1 ">{user.state}</h3>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
