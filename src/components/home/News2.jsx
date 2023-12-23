import React from "react";
import news2 from "../../assets/webp/yoomi-news2-top.webp";
const News2 = () => {
  return (
    <>
      <div>
        <div className='className="container xl:max-w-[1140px] 3xl:max-w-[1320px] mx-auto px-5 xl:px-0"'>
          <img src={news2} alt="seminar speaker" />
          <div className="flex justify-between items-center mt-[65px] mb-[25px]">
            <h3 className="text-black ff_Jakarta text-[30px] md:text-[36px] lg:text-[40px] mb-0 font-normal text-center leading-[110%]">
              Yoomi Wins Hail
              <span className="font-semibold"> Mary Contest</span>
            </h3>
            <div className="flex justify-center items-center">
              <p className="ff_jakarta text-black text-xs font-normal leading-normal sm:text-sm mb-0">
                November 14, 2022
              </p>
              <button className="w-[164px] h-[51px] bg-lime-900 text-white ff_inter text-xs font-semibold leading-normal sm:text-sm rounded flex justify-center items-center ms-5">
                Marketting
              </button>
            </div>
          </div>
          <p className="text-black ff_inter text-xs font-normal leading-[150%] opacity-70 sm:text-sm mb-0">
            Yoomi wins $46k in Dr Pepper Hail Mary Contest, pitching to Mark
            Cuban, Charlotte Jones, and Jon Seaton.
          </p>
          <p className="text-black ff_inter text-xs font-normal leading-[150%] opacity-70 sm:text-sm pt-[45px] pb-[24px]">
            Physical therapy is a crucial healthcare service that has evolved to
            meet the needs of patients in the digital age. Online physical
            therapy, also known as teletherapy or telehealth, has gained
            popularity for its convenience and accessibility. Patients can now
            receive expert guidance and rehabilitation exercises from the
            comfort of their own homes, using video conferencing and digital
            communication tools. This approach is especially beneficial for
            individuals with mobility issues or those living in remote areas
            where access to in-person physical therapy may be limited. Online
            physical therapy sessions allow therapists to assess, diagnose, and
            treat a wide range of musculoskeletal and neurological conditions,
            helping patients recover and regain their functionality. While it
            may not replace all aspects of traditional in-person therapy, online
            physical therapy has proven to be an effective and valuable option
            for many patients seeking rehabilitation and pain relief.
          </p>
          <p className="text-black ff_inter text-xs font-normal leading-[150%] opacity-70 sm:text-sm">
            Online physical therapy offers several advantages, such as
            flexibility in scheduling appointments, eliminating the need for
            travel, and enabling individuals to receive expert guidance
            regardless of their location. Therapists can also track patients'
            progress digitally, making it easier to modify treatment plans as
            needed. Moreover, this approach encourages patients to actively
            participate in their recovery, leading to better outcomes and an
            improved overall quality of life
          </p>
        </div>
      </div>
    </>
  );
};

export default News2;
