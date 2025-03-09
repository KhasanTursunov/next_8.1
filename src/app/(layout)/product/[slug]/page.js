import Image from 'next/image';
import React from 'react'

const Detail = async({params}) => {
  const {slug} = await params
  const data = await fetch(`https://dummyjson.com/products/${slug}`);
  const payload = await data.json();
  console.log(payload);
  return (
    <div>
        <div className='container mx-auto grid grid-cols-2 gap-4'>
          <div>
            <Image priority="5" alt={payload.title} src={payload.thumbnail} width={500}  height={400} />
          </div>
          <div>
            <h2>{payload.title}</h2>
            <h3>{payload.price}</h3>
          </div>
        </div>
    </div>
  )
}

export default Detail
