"use client"
import Image from 'next/image';
import React from 'react'
import { useRouter } from 'next/navigation';

const Products = ({payload}) => {
    const router = useRouter()
  return (
    <div className="flex flex-wrap gap-2">
      {payload?.products?.map((product) => (
        <div className="w-[260px] border" key={product.id}>
          <Image
            src={product.thumbnail}
            alt={product.title}
            width={500}
            height={500}
          />
          <h3>{product.title}</h3>
          <button onClick={() => router.push(`/product/${product.id}`)}>go to detail</button>
        </div>
      ))}
    </div>
  );
}

export default Products