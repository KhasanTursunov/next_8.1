"use client"
import Image from 'next/image';
import React from 'react'

const Showcase = () => {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="w-[1300px] h-[500px] justify-center text-center items-center flex">
        <Image
          src={
            "https://images.uzum.uz/cv385rdpb7f9qcnfjedg/main_page_banner.jpg"
          }
          className='w-[1300px] h-[500px]'
          width={900}
          height={400}
          alt="showcase"
        />
      </div>
    </div>
  );
}

export default Showcase