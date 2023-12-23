import React from 'react'
import Feature from '../components/home/Feature'
import OurMisson from '../components/home/OurMisson'
import Solution from '../components/home/Solution'
import OurWaitList from '../components/common/OurWaitList'
import ProblemSolving from '../components/home/ProblemSolving'
import Working from '../components/home/Working'
import MyPlan from '../components/home/MyPlan'
import Footer from '../components/common/Footer'
import Frequently from '../components/common/Frequently'
import Dashboard from '../components/home/Dashboard'
import Header from '../components/common/Header'
import News2 from '../components/home/News2'

const Homepage = () => {
  return (
    <>
      <Header />
      <Feature />
      <OurMisson />
      <News2/>
      <Solution />
      <div className="pb-8 lg:pb-[110px] pt-[26px] xl:pt-0">
        <OurWaitList />
      </div>
      <ProblemSolving />
      <Working />
      <Dashboard />
      <div className="lg:py-[50px] xl:pt-[84px] md:py-10 xl:pb-[90px]">
        <OurWaitList />
      </div>
      <MyPlan />
      <Frequently />
      <Footer />
    </>
  );
}

export default Homepage