import React from 'react'
import Banner from './components/Banner'
import Content from './components/Content'
import Navbar from './components/Navbar'
import Services from './components/Services'
import Follow_Us from './components/Follow_Us'

export default function Home() {
  return (
    
    <main>
      <div className='w-full bg-banner-bg bg-center bg-cover'>
        <div className='w-full bg-black opacity-75 text-white'>
          <Navbar/>
          <Banner/>
        </div>
      </div>

      <div className='w-full bg-content-bg bg-center bg-cover'>
        <div className='w-full bg-black opacity-75 text-white'>
          <Content/>
        </div>
      </div>

      <div className='w-full bg-services-bg bg-center bg-cover'>
        <div className='w-full bg-black opacity-75 text-white'>
          <Services/>
        </div>
      </div>
      <div>
        <Follow_Us/>
      </div>
    </main>
  )
}
