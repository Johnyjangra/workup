import React from 'react'
import Feature from '../components/home/Feature'
import OurMisson from '../components/home/OurMisson'
import SoluctionSucces from '../components/home/SoluctionSucces'
import OurWaitList from '../components/common/OurWaitList'
import ProblemSolving from '../components/home/ProblemSolving'
import Working from '../components/home/Working'
import MyPlan from '../components/home/MyPlan'
import MyFooter from '../components/home/MyFooter'
import AwsomeQuestions from '../components/home/AwsomeQuestions'
import Dashboard from '../components/home/Dashboard'

const Homepage = () => {
  return (
    <>
      <Feature />
      <OurMisson />
      <SoluctionSucces />
      <div className='pb-12 lg:pb-[134px]'><OurWaitList/></div>
      <ProblemSolving/>
      <Working/>
      <Dashboard/>
      <div className='lg:pt-[128px] pt-12'><OurWaitList/></div>
      <MyPlan/>
      <AwsomeQuestions/>
      <MyFooter/>
    </>
  )
}

export default Homepage