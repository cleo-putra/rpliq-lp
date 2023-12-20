import React from "react";
import MarkTitle from "../MarkTitle";

const ProductCard = ({ markText, subHead }) => {
  return (
    <div className=" lg:pt-4">
      <div className="max-container padding-container mx-auto">
        <MarkTitle markText={markText} subHead={subHead} />

        <div className="grid-cols-1 sm:grid md:grid-cols-3 ">
          <div className="mx-3 mt-6 flex flex-col rounded-lg bg-gray-10 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] sm:shrink-0 sm:grow sm:basis-0">
            <a href="#!">
              <img
                className="p-4 mx-auto w-[280px] h-[200px]"
                src="./laptop-mock.png"
                alt="Skyscrapers"
              />
            </a>
            <div className="p-6">
              <h5 className="mb-2 text-lg font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                Comprehensive Assessment Tools
              </h5>
              <p className="mt-4 text-sm">
                Assessors benefit from a set of robust tools that facilitate
                thorough examination of students’ evidence. From document
                verification to work sample evaluation, the “Assess” feature
                ensures a comprehensive assessment process.
              </p>
            </div>
          </div>
          <div className="mx-3 mt-6 flex flex-col rounded-lg bg-gray-10 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] sm:shrink-0 sm:grow sm:basis-0">
            <a href="#!">
              <img
                className="p-4 mx-auto w-[280px] h-[200px]"
                src="./laptop-mock.png"
                alt="Skyscrapers"
              />
            </a>
            <div className="p-6">
              <h5 className="mb-2 text-lg font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                Comprehensive Assessment Tools
              </h5>
              <p className="mt-4 text-sm">
                Assessors benefit from a set of robust tools that facilitate
                thorough examination of students’ evidence. From document
                verification to work sample evaluation, the “Assess” feature
                ensures a comprehensive assessment process.
              </p>
            </div>
          </div>
          <div className="mx-3 mt-6 flex flex-col rounded-lg bg-gray-10 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] sm:shrink-0 sm:grow sm:basis-0">
            <a href="#!">
              <img
                className="p-4 mx-auto w-[280px] h-[200px]"
                src="./laptop-mock.png"
                alt="Skyscrapers"
              />
            </a>
            <div className="p-6">
              <h5 className="mb-2 text-lg font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                Comprehensive Assessment Tools
              </h5>
              <p className="mt-4 text-sm">
                Assessors benefit from a set of robust tools that facilitate
                thorough examination of students’ evidence. From document
                verification to work sample evaluation, the “Assess” feature
                ensures a comprehensive assessment process.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
