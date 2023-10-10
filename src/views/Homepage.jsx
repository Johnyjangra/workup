import React from 'react'
import Feature from '../components/home/Feature'
import OurMisson from '../components/home/OurMisson'
import SoluctionSucces from '../components/home/SoluctionSucces'
import OurWaitList from '../components/common/OurWaitList'
import ProblemSolving from '../components/home/ProblemSolving'

const Homepage = () => {
  return (
    <div>
      <Feature />
      <OurMisson />
      <SoluctionSucces />
      <OurWaitList/>
      <ProblemSolving/>
    </div>
  )
}

export default Homepage