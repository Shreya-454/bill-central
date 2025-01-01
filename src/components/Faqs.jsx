"use client";
import React, { useRef, useState } from "react";
import CommonHeading from "./common/Heading";
import Paragraph from "./common/Paragraph";
import { FAQ_DATA_LIST} from "@/utils/helper";
import Icons from "./common/Icons";

const Faqs = () => {
  const [openAccordion, setOpenAccordion] = useState(0); // Initial state set to null
  const refs = useRef([]);

  const toggleAccordion = (index) => {
    setOpenAccordion((prevState) => (prevState === index ? null : index));
  };

  return (
    <div className="lg:pb-[162px] md:pb-24 sm:pb-16 pb-10">
      <div className="container max-w-[1180px] px-5 mx-auto">
        <CommonHeading center className="mb-4">
          Frequently Asked <span className="font-bold">Questions</span>
        </CommonHeading>
        <Paragraph
          center
          className="max-w-[556px] text-deep-blue text-opacity-90 mb-5 sm:mb-10 md:mb-14"
        >
          Lorem ipsum dolor sit amet consectetur. Semper vitae nullam eget
          consectetur mi. Vulputate sapien a a bibendum
        </Paragraph>
        <div className="flex flex-col gap-4 md:gap-5 lg:gap-7 max-w-[916px] w-full mx-auto">
          {FAQ_DATA_LIST.map((item, index) => (
            <div
              onClick={() => toggleAccordion(index)}
              className={`${
                openAccordion === index
                  ? "sm:!py-[26px] py-4 px-3.5 md:px-4 bg-purssian-blue"
                  : "bg-light-white sm:p-6 p-3.5"
              } cursor-pointer accordion-item rounded transition-all duration-300 ease-in-out  shadow-acc-box`}
              key={index}
            >
              <div className="accordion-title flex justify-between items-center cursor-pointer max-sm:gap-[0.2px]">
                <p
                  className={`${
                    openAccordion === index ? "mb-2 sm:mb-3.5 text-white" : "text-deep-blue"
                  } font-poppins font-normal text-lg sm:text-xl md:text-2xl !leading-110  flex gap-1 duration-300 ease-in-out`}
                >
    {item.question}
                </p>
                <div>
                  <div
                    className={`${
                      openAccordion === index ? "rotate-180 mb-2 sm:mb-3.5" : ""
                    } transition-transform duration-300 ease-linear`}
                  >
                  <Icons icon={openAccordion === index ? "minus-icon" : "plus-icon"
                  } />
                  </div>
                </div>
              </div>
              <div
                className={`accordion-content overflow-hidden text-sm sm:text-base text-light-white transition-all duration-500 ease-in-out`}
                style={{
                  height:
                    openAccordion === index
                      ? refs.current[index]?.scrollHeight
                      : "0px",
                  opacity: openAccordion === index ? 1 : 0,
                }}
                ref={(el) => (refs.current[index] = el)}
              >
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faqs;
