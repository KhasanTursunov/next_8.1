import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='flex gap-8 p-5 bg-slate-300'>
        <h2>Header</h2>
        <Link href={"/"} >Home</Link>
        <Link href={"/about"} >About</Link>
        <Link href={"/contact"} >Contact</Link>
        <Link href={"/login"} >Login</Link>
    </div>
  )
}

export default Header