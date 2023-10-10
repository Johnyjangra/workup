import React from 'react'
import Feature from '../components/home/Feature'
import OurMisson from '../components/home/OurMisson'
import SoluctionSucces from '../components/home/SoluctionSucces'
import OurWaitList from '../components/common/OurWaitList'
import ProblemSolving from '../components/home/ProblemSolving'
import Header from '../components/common/Header'

const Homepage = () => {
  return (
    <div>
      <Header/>
      <Feature />
      <OurMisson />
      <SoluctionSucces />
      <OurWaitList/>
      <ProblemSolving/>
    </div>
  )
}

export default Homepage