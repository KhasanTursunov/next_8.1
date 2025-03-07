"use client"
import Image from 'next/image';
import React from 'react'
import { useRouter } from 'next/navigation';
import { FaRegStar } from "react-icons/fa";

const Products = ({payload}) => {
    const router = useRouter()
  return (
    <div className="container max-w-7xl mx-auto p-6 flex flex-wrap gap-8 justify-center">
      {payload?.products?.map((product) => (
        <div className="w-[260px]  p-2" key={product.id}>
          <div>
            <Image
              className="bg-[#EFEFEF] rounded-xl mb-2 cursor-pointer"
              onClick={() => router.push(`/product/${product.id}`)}
              src={product.thumbnail}
              alt={product.title}
              width={500}
              height={500}
            />
          </div>
          <div className="div_for_text flex flex-col gap-2">
            <h3 className="line-clamp-1 ">{product.title}</h3>
            {/*  */}
            <div className="flex items-center gap-4">
              <div className="flex gap-1">
                {typeof product.rating === "number" && (
                  <>
                    {Math.floor(product.rating) === 1 && (
                      <FaRegStar style={{ color: "yellow" }} />
                    )}
                    {Math.floor(product.rating) === 2 && (
                      <>
                        <FaRegStar style={{ color: "yellow" }} />
                        <FaRegStar style={{ color: "yellow" }} />
                      </>
                    )}
                    {Math.floor(product.rating) === 3 && (
                      <>
                        <FaRegStar style={{ color: "yellow" }} />
                        <FaRegStar style={{ color: "yellow" }} />
                        <FaRegStar style={{ color: "yellow" }} />
                      </>
                    )}
                    {Math.floor(product.rating) === 4 && (
                      <>
                        <FaRegStar style={{ color: "yellow" }} />
                        <FaRegStar style={{ color: "yellow" }} />
                        <FaRegStar style={{ color: "yellow" }} />
                        <FaRegStar style={{ color: "yellow" }} />
                      </>
                    )}
                    {Math.floor(product.rating) === 5 && (
                      <>
                        <FaRegStar style={{ color: "yellow" }} />
                        <FaRegStar style={{ color: "yellow" }} />
                        <FaRegStar style={{ color: "yellow" }} />
                        <FaRegStar style={{ color: "yellow" }} />
                        <FaRegStar style={{ color: "yellow" }} />
                      </>
                    )}
                  </>
                )}
              </div>
              <div>
                <h3 className="line-clamp-1 font-normal text-[12.8px] leading-[15.36px] text-[#1F2026]">
                  {product.rating}
                </h3>
              </div>
            </div>
            <div>
              <h3 className=" font-normal text-[12.8px] leading-[15.36px] text-[#1F2026] bg-[#FFFF00] p-2 rounded">
                {product.price}0 so'm / oyiga
              </h3>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Products