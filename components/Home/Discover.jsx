import React from "react";
import MarkTitle from "../MarkTitle";

const Discover = ({ markText, subHead }) => {
  return (
    <div className="max-container padding-container mx-auto lg:py-32 xs:py-10">
      <h3 className="my-6 lg:text-3xl xs:text-xl font-bold text-center text-green-50">
        Discover RPLiQ: The Future of RPL, Simplified and Streamlined
      </h3>

      <div className="grid-cols-1 sm:grid md:grid-cols-3">
        <div className="mx-3 mt-6 flex flex-col rounded-lg bg-gray-10 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] sm:shrink-0 sm:grow sm:basis-0">
            <img
              className="lg:h-[310px] xs:h-[250px]"
              src="./enrollment-simplified.png"
              alt="Skyscrapers"
            />
          <div className="p-6">
            <h5 className="mb-2 text-lg font-medium leading-tight text-neutral-800 dark:text-neutral-50">
            Enrollment simplified
            </h5>
            <p className="mt-4 text-sm">
            RPLiQ's online enrolment fast-tracks the process, slashing administrative work and time accelerating the student journey to start the program.
            </p>
          </div>
        </div>
        <div className="mx-3 mt-6 flex flex-col rounded-lg bg-gray-10 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] sm:shrink-0 sm:grow sm:basis-0">
            <img
              className="lg:h-[310px] xs:h-[250px]"
              src="./assess-online.png"
              alt="Skyscrapers"
            />
          <div className="p-6">
            <h5 className="mb-2 text-lg font-medium leading-tight text-neutral-800 dark:text-neutral-50">
            Assess Online
            </h5>
            <p className="mt-4 text-sm">
            RPLiQ enables online assessments, reducing RTO costs and allowing the streamlining of student's evidence submission for assessment and their path to completion.
            </p>
          </div>
        </div>
        <div className="mx-3 mt-6 flex flex-col rounded-lg bg-gray-10 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] sm:shrink-0 sm:grow sm:basis-0">
            <img
              className="lg:h-[310px] xs:h-[250px]"
              src="./certify-instant.png"
              alt="Skyscrapers"
            />
          <div className="p-6">
            <h5 className="mb-2 text-lg font-medium leading-tight text-neutral-800 dark:text-neutral-50">
            Certify Instantly
            </h5>
            <p className="mt-4 text-sm">
            With RPLiQ, the RTO can issue certificates that can be accessed digitally by the student online, enhancing efficiency and elevating student satisfaction.
            </p>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default Discover;
