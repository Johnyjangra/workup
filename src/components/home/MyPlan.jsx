import React from 'react'
import { PotintialPlanData } from '../common/Helper';
import plan_right from "../../assets/png/Potiontal-plan-right.png"
import dots_img from "../../assets/png/feature-dots-img.png"
const MyPlan = () => {
  return (
    <> 
     <div className="py-12 lg:pb-163px relative">
      <img className='absolute pointer-events-none top-[45%] start-0 hidden xl:block' src={dots_img} alt="dots-img" />
      <img className='absolute pointer-events-none end-0 hidden md:block top-0 xl:top-[12%]' src={plan_right} alt="dots group" />
     <div className="container 2xl:max-w-[1320px] xl:max-w-[1140px]  mx-auto px-5 xl:px-0">
     <h2 className="text-center ff_outfit text-lightBlack lg:text-xl md:text-[36px] sm:text-[34px] text-[30px] lg:mb-[24px] font-medium leading-normal linline-block">
        Po
            <span className="relative before:absolute before:h-1 before:w-full before:rounded before:bg-[#2ABAE9]  lg:before:top-[-20%] before:content-[''] before:start-0">
            tential Pl
            </span>
            ans
          </h2>
        <div className="flex flex-wrap justify-center relative">
          {PotintialPlanData.map((MyData, i) => {
            return (
              <div
                key={i}
                className="md:px-5 px-3 w-[350px] sm:w-6/12 lg:w-4/12 md:mt-[40px] mt-[24px]">
                <div className='border pt-[30px] cursor-pointer pb-[28px] border-[#E5E5E5] rounded-[14px] plan_card group hover:bg-planCard h-full flex items-center flex-col justify-between min-h-[480px] lg:min-h-[570px]'>
                  <div>
                    <h4 className="ff_outfit text-lightBlack  text-md font-medium leading-normal text-center group-hover:text-white">
                      {MyData.top_heading}
                    </h4>
                    <p className="ff_inter text-sm text-black opacity-70 leading-normal text-center mb-[27px] group-hover:text-white">
                      {MyData.top_para}
                    </p>
                    <h3 className="ff_open_sans mb-[12px] relative text-center font-semibold leading-[100%] text-transparent text-[48px] bg-clip-text bg-gradient-to-r from-[#994FFF] to-[#4AB6FE] group-hover:text-white">
                    <sup className='ff_poppins font-semibold absolute top-[2%] start-[28%] leading-normal text-[18px] sm:text-[20px] text-transparent bg-clip-text bg-gradient-to-r from-[#994FFF] to-[#4AB6FE] group-hover:text-white'>{MyData.doller}</sup>{MyData.big_heading}
                    </h3>
                    <p className='text-center mb-[6px] ff_inter text-sm text-black font-normal leading-normal  opacity-50 group-hover:text-white group-hover:opacity-[1]'>{MyData.priceBottomPara}</p>
                    <div>
                      {MyData.submap.map((i ,data) => (
                        <div key={data}>
                          <div className="flex items-center pt-4">
                            <span className='plan_icon'>{MyData.blue_check_img}</span>
                            <p className="ff_inter text-sm text-black font-normal leading-normal opacity-70 ps-[6px] group-hover:text-white">
                              {i.subpara}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <button
                    className="ff_inter mt-[36px] font-medium text-md bg-btnGradient group-hover:text-black  group-hover:bg-gradient-to-t from-white to-white text-white h-[45px] lg:h-[48px] w-[200px] lg:w-[220px] xl:w-[270px] rounded-[122px]"
                  >
                     {MyData.mybutton}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
     </div>
    </>
  )
}

export default MyPlan