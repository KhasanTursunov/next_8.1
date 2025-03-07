"use client";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";
import { FaRegStar } from "react-icons/fa";

const Recipes = ({ RecipesPayload }) => {
  const router = useRouter();
  return (
    <div className="container max-w-7xl mx-auto p-6 flex flex-wrap gap-8 justify-center">
      {RecipesPayload?.recipes?.map((recipe) => (
        <div className="w-[260px]  p-2" key={recipe.id}>
          <div>
            <Image
              className="bg-[#EFEFEF] rounded-xl mb-2 cursor-pointer"
              onClick={() => router.push(`/recipe/${recipe.id}`)}
              src={recipe.image}
              alt={recipe.firstName}
              width={500}
              height={500}
            />
          </div>
          <div className="div_for_text flex flex-col gap-2">
            <div className="flex gap-2 flex-col">
              <div className="flex gap-2">
                <h3 className="line-clamp-1 text-xl">{recipe.name}</h3>
              </div>
              <h3 className="line-clamp-1 ">Where: {recipe.cuisine}</h3>

              <div className="flex items-center gap-4">
                <div className="flex gap-1">
                  {typeof recipe.rating === "number" && (
                    <>
                      {Math.floor(recipe.rating) === 1 && (
                        <FaRegStar style={{ color: "yellow" }} />
                      )}
                      {Math.floor(recipe.rating) === 2 && (
                        <>
                          <FaRegStar style={{ color: "yellow" }} />
                          <FaRegStar style={{ color: "yellow" }} />
                        </>
                      )}
                      {Math.floor(recipe.rating) === 3 && (
                        <>
                          <FaRegStar style={{ color: "yellow" }} />
                          <FaRegStar style={{ color: "yellow" }} />
                          <FaRegStar style={{ color: "yellow" }} />
                        </>
                      )}
                      {Math.floor(recipe.rating) === 4 && (
                        <>
                          <FaRegStar style={{ color: "yellow" }} />
                          <FaRegStar style={{ color: "yellow" }} />
                          <FaRegStar style={{ color: "yellow" }} />
                          <FaRegStar style={{ color: "yellow" }} />
                        </>
                      )}
                      {Math.floor(recipe.rating) === 5 && (
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
                    {recipe.rating}
                  </h3>
                </div>
              </div>

              <div>
                <h3 className="line-clamp-1 ">For: {recipe.mealType}</h3>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Recipes;


