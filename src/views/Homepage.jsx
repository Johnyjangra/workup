import React from 'react'
import Feature from '../components/home/Feature'
import OurMisson from '../components/home/OurMisson'
import SoluctionSucces from '../components/home/SoluctionSucces'
import OurWaitList from '../components/home/OurWaitList'

const Homepage = () => {
  return (
    <div>
      <Feature />
      <OurMisson />
      <SoluctionSucces />
      <OurWaitList/>
    </div>
  )
}

export default Homepage