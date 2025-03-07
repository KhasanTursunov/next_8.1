import Image from "next/image";
import Link from "next/link";
import React from "react";
import uzumImg from "@/assets/svg/withtext.svg";
const Header = () => {
  return (
    <div className="container max-w-7xl mx-auto p-6 flex justify-between items-center top-0 left-0 sticky bg-white">
      <div>
        <Link href={"/"}>
          <Image className="cursor-pointer" src={uzumImg} alt="uzum img" />
        </Link>
      </div>
      <div>
        <button
          className="font-medium text-[14px] leading-[18px] tracking-[0.08px] text-center 
           text-[#7F4DFF] w-[120px] h-[40px] rounded-[4px] bg-[#E5E5FF] cursor-pointer"
        >
          Katalog
        </button>
      </div>
      <div>
        <input
          type="text"
          placeholder="Mahsulotlar va turkumlar izlash"
          className=" font-normal text-[14px] leading-[100%]   
           text-[#757575] w-[527.94px] h-[40px]  
           rounded-[4px] border bg-white p-4 outline-none"
        />
      </div>
      <div className="flex gap-6">
        <Link className="text-[#7F4DFF]" href={"/"}>
          Reciepe
        </Link>
        <Link className="text-[#7F4DFF]" href={"/user"}>
          User
        </Link>
        <Link className="text-[#7F4DFF]" href={"/contact"}>
          Products
        </Link>

      </div>
    </div>
  );
};

export default Header;
