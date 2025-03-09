import Link from 'next/link';
import React from 'react'

const Dashboard = ({children}) => {
  return (
    <div className="flex">
      <div className="w-[250px] h-screen bg-[#af906d] text-white p-4 scroll-auto sticky top-0">
        <h2 className='text-2xl'>Najot Ta'lim</h2>
        <div className="my-6">
          <Link className='block p-2 border rounded my-2' href={"/dashboard"}>Bosh Sahifa</Link>
          <Link className='block p-2 border rounded my-2' href={"/dashboard/tolovlarim"}>To'lovlarim</Link>
          <Link className='block p-2 border rounded my-2' href={"/dashboard/gruhlarim"}>Gruhlarim</Link>
          <Link className='block p-2 border rounded my-2' href={"/dashboard/korsatgichlarim"}>Ko'rsatgichlarim</Link>
          <Link className='block p-2 border rounded my-2' href={"/dashboard/reyting"}>Reyting</Link>
          <Link className='block p-2 border rounded my-2' href={"/dashboard/dokon"}>Do'kon</Link>
          <Link className='block p-2 border rounded my-2' href={"/dashboard/qoshimchadarslar"}>Qo'shimcha Darslar</Link>
          <Link className='block p-2 border rounded my-2' href={"/dashboard/sozlamalar"}>Sozlamalar</Link>
          <Link className='block p-2 border rounded my-2' href={"/"}>Asosiy Sahifaga O'tish</Link>
          
        </div>
      </div>

      <main className="flex-1 p-4 overflow-auto">{children}</main>
    </div>
  );
}

export default Dashboard;