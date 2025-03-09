import Header from '@/components/Header'
import Showcase from '@/components/Showcase'
import React from 'react'

const MainLayout = ({children}) => {
  return (
    <div>
        <Header/>
        <Showcase/>
        {children}
    </div>
  )
}

export default MainLayout