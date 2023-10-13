import React from 'react'
import Feature from '../components/home/Feature'
import OurMisson from '../components/home/OurMisson'
import SoluctionSucces from '../components/home/SoluctionSucces'
import OurWaitList from '../components/common/OurWaitList'
import ProblemSolving from '../components/home/ProblemSolving'
import Working from '../components/home/Working'
import MyPlan from '../components/home/MyPlan'
import Footer from '../components/common/Footer'
import Frequently from '../components/common/Frequently'
import Dashboard from '../components/home/Dashboard'
import Header from '../components/common/Header'

const Homepage = () => {
  return (
    <>
      <Header/>
      <Feature />
      <OurMisson />
      <SoluctionSucces />
      <div className='pb-12 lg:pb-[126px]'><OurWaitList/></div>
      <ProblemSolving/>
      <Working/>
      <Dashboard/>
      <div className='lg:pt-[100px] md:py-10 lg:pb-[90px]'><OurWaitList/></div>
      <MyPlan/>
      <Frequently/>
      <Footer/>
    </>
  )
}

export default Homepage