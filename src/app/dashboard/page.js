import React from 'react'

const Posts = () => {
  return (
    <div className="bg-white shadow-2xl rounded-lg p-5 w-[370px] ">
      <h2 className="text-lg font-bold mb-3">
        Khasan Tursunov Adminstrator 😁
      </h2>

      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="text-gray-600 text-base">
          Bosqich: <strong>3</strong>
        </p>
        <div className="w-full bg-gray-300 rounded-full h-4 mt-2">
          <div
            className="bg-green-500 h-4 rounded-full"
            style={{ width: "80%" }}
          ></div>
        </div>
        <p className="text-green-600 text-sm font-semibold mt-2">877 / 1100</p>
      </div>

      {/* XP */}
      <p className="text-black font-bold mt-4 text-lg">XP: 877</p>

      {/* Ratings */}
      <div className="mt-5 text-black">
        <p className="font-bold text-lg mb-3">Reyting</p>

        <div className="space-y-2 text-[15px]">
          <p>
            <span className="font-semibold">Umumiy:</span>
            <span className="text-black"> 421 - o'rin</span>
          </p>
          <p className="font-semibold">
            Bootcamp Frontend N17:
            <span className="text-black font-normal"> 4 - o'rin</span>
          </p>
          <p className="font-semibold">
            Frontend ReactJS:
            <span className="text-black font-normal"> 6 - o'rin</span>
          </p>
          <p className="font-semibold">
            (Standard) N83:
            <span className="text-black font-normal"> o'rin</span>
          </p>
          <p className="font-semibold">
            Bootcamp Frontend N14:
            <span className="text-black font-normal"> 7 - o'rin</span>
          </p>
          <p className="font-semibold">
            Bootcamp Foundation:
            <span className="text-black font-normal"> 4 - o'rin</span>
          </p>
          <p className="font-semibold">
            N97:
            <span className="text-black font-normal"> o'rin</span>
          </p>
          <p className="font-semibold">
            English for IT N10 (Pre):
            <span className="text-black font-normal"> 6 - o'rin</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Posts