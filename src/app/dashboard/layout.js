import Link from 'next/link';
import React from 'react'

const Dashboard = ({children}) => {
  return (
    <div className="flex">
      <div className="w-[250px] h-screen bg-slate-900 text-white p-4">
        <h2>Dashboard</h2>
        <div className="my-6">
          <Link className='block p-2 border rounded my-2' href={"/dashboard"}>Bosh Sahifa</Link>
          <Link className='block p-2 border rounded my-2' href={"/dashboard/tolovlarim"}>To'lovlarim</Link>
          <Link className='block p-2 border rounded my-2' href={"/dashboard/gruhlarim"}>Gruhlarim</Link>
          <Link className='block p-2 border rounded my-2' href={"/dashboard/korsatgichlarim"}>Ko'rsatgichlarim</Link>
          <Link className='block p-2 border rounded my-2' href={"/dashboard/reyting"}>Reyting</Link>
          <Link className='block p-2 border rounded my-2' href={"/dashboard/dokon"}>Do'kon</Link>
          <Link className='block p-2 border rounded my-2' href={"/dashboard/qoshimchadarslar"}>Qo'shimcha Darslar</Link>
          <Link className='block p-2 border rounded my-2' href={"/Sozlamalar"}>Sozlamalar</Link>
        </div>
      </div>

      <main className="flex-1 p-4">{children}</main>
    </div>
  );
}

export default Dashboard;