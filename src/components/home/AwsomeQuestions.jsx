import React, { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { MinusIconFaq, PlusIconFaq } from "../common/Icons";
import awsome_img from "../../assets/webp/awsome-question-img.webp"

function Icon({ id, open }) {
  return (
    <div className="h-5 w-5  absolute right-0 transform origin-center top-[28%] lg:top-[37%] transition-transform ease-in-out duration-300 cursor-pointer rotate-0">
      {id === open ? <MinusIconFaq /> : <PlusIconFaq />}
    </div>
  );
}

const AwsomeQuestions = () => {
  const [open, setOpen] = useState();

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <>
      <div className="container xl:max-w-[1140px] 3xl:max-w-[1320px] mx-auto px-5 xl:px-0">
        <div className="flex flex-wrap items-center justify-between">
          <div><img src={awsome_img} alt="people group" /></div>
        <div className="w-5/12">
          <Fragment>
            <Accordion
              className="faqs_border_bottom "
              open={open === 1}
              icon={<Icon id={1} open={open} />}
            >
              <AccordionHeader
                onClick={() => handleOpen(1)}
                className="border-none py-6 cursor-pointer relative"
              >
                <p className="ff_outfit font-semibold text-black opacity-07 leading-normal text-start text-sm">
                  Q1 What is WorkUp's visionary approach?
                </p>
              </AccordionHeader>
              <AccordionBody
                className={`pb-4 pt-0 sm:pt-0 sm:pb-6 pr-3 xl:pr-10 text-black ff_inter text-xs sm:text-sm font-normal leading-normal text-TowerGray opacity-70 transition-all duration-[1s] ease-linear ${
                  open === 1 ? " h-full" : " h-0"
                }`}
              >
                WorkUp envisions becoming the ultimate integrated business
                automation platform, leveraging AI and automation to empower
                business owners and accounting professionals. Our goal is to
                revolutionise the accessibility and management of financial
                information, leading to unparalleled efficiency and control.
              </AccordionBody>
            </Accordion>
            <Accordion
              className="faqs_border_bottom"
              open={open === 2}
              icon={<Icon id={2} open={open} />}
            >
              <AccordionHeader
                onClick={() => handleOpen(2)}
                className="border-none py-6 cursor-pointer relative"
              >
                <p className="ff_outfit font-semibold text-black opacity-07 leading-normal text-start text-sm">
                  Why are SSL certificates?
                </p>
              </AccordionHeader>
              <AccordionBody
                className={`pb-4 pt-0 sm:pt-0 sm:pb-6 pr-3 xl:pr-10 text-black ff_inter text-xs sm:text-sm font-normal leading-normal opacity-70 transition-all duration-[1s] ease-linear ${
                  open === 2 ? " h-full" : " h-0"
                }`}
              >
                None of your compressed images will be compromised, and there
                won&apos;t be any issues. You&apos;ll simply gain access to the
                free Smush features instead of the Pro ones.
              </AccordionBody>
            </Accordion>
            <Accordion
              className="faqs_border_bottom"
              open={open === 3}
              icon={<Icon id={3} open={open} />}
            >
              <AccordionHeader
                onClick={() => handleOpen(3)}
                className="border-none py-6 cursor-pointer relative"
              >
                <p className="ff_outfit font-semibold text-black opacity-07 leading-normal text-start text-sm">
                  How secure is the AWS cloud?
                </p>
              </AccordionHeader>

              <AccordionBody
                className={`pb-4 pt-0 sm:pt-0 sm:pb-6 pr-3 xl:pr-10 text-black ff_inter text-xs sm:text-sm font-normal leading-normal opacity-70 transition-all duration-[1s] ease-linear ${
                  open === 3 ? " h-full" : " h-0"
                }`}
              >
                None of your compressed images will be compromised, and there
                won&apos;t be any issues. You&apos;ll simply gain access to the
                free Smush features instead of the Pro ones.
              </AccordionBody>
            </Accordion>
            <Accordion
              className="faqs_border_bottom"
              open={open === 4}
              icon={<Icon id={4} open={open} />}
            >
              <AccordionHeader
                onClick={() => handleOpen(4)}
                className="border-none py-6 cursor-pointer relative"
              >
                <p className="ff_outfit font-semibold text-black opacity-07 leading-normal text-start text-sm">
                  Does PageXR offer two-factor authentication?
                </p>
              </AccordionHeader>
              <AccordionBody
                className={`pb-4 pt-0 sm:pt-0 sm:pb-6 pr-6 xl:pr-10 text-black ff_inter text-xs sm:text-sm font-normal leading-normal opacity-70 transition-all duration-[1s] ease-linear ${
                  open === 4 ? " h-full" : " h-0"
                }`}
              >
                None of your compressed images will be compromised, and there
                won&apos;t be any issues. You&apos;ll simply gain access to the
                free Smush features instead of the Pro ones.
              </AccordionBody>
            </Accordion>
            <Accordion
              className="faqs_border_bottom"
              open={open === 5}
              icon={<Icon id={5} open={open} />}
            >
              <AccordionHeader
                onClick={() => handleOpen(5)}
                className="border-none py-6 cursor-pointer relative"
              >
                <p className="ff_outfit font-semibold text-black opacity-07 leading-normal text-start text-sm">
                  What is a Snapshot?
                </p>
              </AccordionHeader>

              <AccordionBody
                className={`pb-4 pt-0 sm:pt-0 sm:pb-6 pr-6 xl:pr-10 text-black ff_inter text-xs sm:text-sm font-normal leading-normal opacity-70 transition-all duration-[1s] ease-linear ${
                  open === 5 ? " h-full" : " h-0"
                }`}
              >
                None of your compressed images will be compromised, and there
                won&apos;t be any issues. You&apos;ll simply gain access to the
                free Smush features instead of the Pro ones.
              </AccordionBody>
            </Accordion>
          </Fragment>
        </div>
        </div>
      </div>
    </>
  );
};

export default AwsomeQuestions;
