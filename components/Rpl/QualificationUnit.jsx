import React from "react";

const QualificationUnit = () => {
  return (
    <div className="max-container padding-container mx-auto lg:py-32 xs:py-10">
      <h3 className="my-6 lg:text-3xl xs:text-xl font-bold text-center text-green-50">
      Expand Your Offerings with RPLiQ: Add Unlimited Qualifications and Units
      </h3>

      <h5 className="mt-5 md:px-40 xs:px-5 mb-10 text-center">
      RPLiQ enables RTOs to offer unlimited RPL qualifications and units, boosting flexibility and centralising business management in one platform.
      </h5>

      <div className="grid-cols-1 sm:grid md:grid-cols-2">
        <div className="mx-3 mt-6 flex flex-col rounded-lg bg-[#eafaf4] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] sm:shrink-0 sm:grow sm:basis-0">
          <div className="p-6">
            <h5 className="mb-2 text-xl font-bold leading-tight text-green-50">
            Custom Elective Selection
            </h5>
            <p className="mt-4 text-md">
            RPLiQ allows RTOs to handpick elective units for any qualification, like adding "CPCCCA3009 - Construct advanced roofs" to a Carpentry Cert III, ensuring courses meet specific needs and interests.
            </p>
          </div>
          <img
            className="w-auto h-auto mx-auto"
            src="./test.png"
            alt="CustomElective"
          />
        </div>
        <div className="mx-3 mt-6 flex flex-col rounded-lg bg-[#eafaf4] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] sm:shrink-0 sm:grow sm:basis-0">
          <div className="p-6">
            <h5 className="mb-2 text-xl font-bold leading-tight text-green-50">
            Qualification-Unit Matching
            </h5>
            <p className="mt-4 text-md">
            RPLiQ matches assessors' qualifications with specific courses and units, ensuring qualified assessment and maintaining high-quality standards.
            </p>
          </div>
          <img
            className="w-auto h-auto mx-auto pt-5"
            src="./qualification-unit.png"
            alt="qualificationUnit"
          />
        </div>
      </div>
    </div>
  );
};

export default QualificationUnit;
