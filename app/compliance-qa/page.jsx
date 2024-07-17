import React from "react";
import CardRto from "@/components/Home/CardRto";
import Image from "next/image";
import PartnerSlider from "@/components/Home/PartnerSlider";
import Link from "next/link";

const page = () => {
  return (
    <>
      {/* Banner */}
      <div className="xs:hidden md:block overflow-hidden bg-white py-24 sm:py-32 max-container padding-container">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4 flex items-center">
            <div className="lg:max-w-xl">
              <mark className="bg-green-30 p-4">
                Compliance & Quality Assurance
              </mark>
              <h2 className="mt-6 text-[34px] font-bold text-green-50	leading-snug tracking-wide lg:max-w-lg">
                RPL Compliance
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                RPLiQ mimics the training package rules and requirements to
                ensure that evidence meets the training package rules and is
                mapped to unit elements and performance criteria's
              </p>

              <div className="lg:mt-6 sm:mt-2 flex justify-normal gap-4">
                <Link href={"/contact-us"}>
                  <button className="flexCenter gap-3" type="button">
                    <label className="font-bold whitespace-nowrap btn_dark_green text-base cursor-pointer">
                      Request Free Demo
                    </label>
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="">
            <Image
              src="/Group 50.svg"
              width={768}
              height={470}
              alt="Product screenshot"
              className="rounded-x w-max h-max"
            />
          </div>
        </div>
      </div>

      {/* Banner Mobile View */}
      <div className="md:hidden max-container padding-container bg-white lg:py-24 xs:py-14">
        <div className="grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-xl">
              <mark className="bg-green-30 p-4">
                Compliance & Quality Assurance
              </mark>
              <h2 className="mt-6 text-[34px] font-bold text-green-50	leading-snug tracking-wide lg:max-w-lg">
                RPL Compliance
              </h2>

              <div className="flex lg:justify-end xs:justify-center my-5">
                <Image
                  src="/Group 50.svg"
                  width={768}
                  height={470}
                  alt="Product screenshot"
                  className="rounded-x w-max h-max"
                />
              </div>

              <div className="my-6 text-base leading-8 text-gray-600">
                RPLiQ mimics the training package rules and requirements to
                ensure that evidence meets the training package rules and is
                mapped to unit elements and performance criteria's
              </div>
              <div className="lg:mt-6 sm:mt-2 flex justify-normal gap-4">
                <Link href={"/contact-us"}>
                  <button className="flexCenter gap-3" type="button">
                    <label className="font-bold whitespace-nowrap btn_dark_green text-sm cursor-pointer">
                      Request Free Demo
                    </label>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Step 1 */}
      <div className="bg-gradient-to-b from-white to-[#eafaf4]">
        <div className="overflow-hidden lg:py-24 xs:py-10 max-container padding-container">
          <div className="mx-auto grid max-w-2xl xs:grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="flex justify-center items-center md:order-first xs:order-last">
              <Image
                src="/journey/compliance/rpl.gif"
                width={768}
                height={470}
                alt="Product screenshot"
                className="rounded-x w-auto h-auto"
              />
            </div>
            <div className="lg:pr-8 lg:pt-12 xs:pt-0 flex items-center">
              <div className="lg:max-w-xl">
                <h2 className="lg:text-[30px] xs:text-xl font-bold text-black-50">
                  RPL Process Compliance
                </h2>
                <p className="mt-6 text-base leading-8 text-gray-600 ">
                  RPLiQ system and features have been designed and developed to
                  reflect the training package rules of nationally accredited
                  courses on your scope of registration. This enables your RTO
                  to adhere to the strict training package requirements ensuring
                  evidence is directly mapped to the unit elements and
                  performance criteria and assessment requirements for each unit
                  of competency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Step 2 */}
      <div className="bg-gradient-to-b from-[#eafaf4] to-white">
        <div className="overflow-hidden lg:py-24 xs:py-10 max-container padding-container">
          <div className="mx-auto grid max-w-2xl xs:grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-12 xs:pt-0 flex items-center">
              <div className="lg:max-w-xl ">
                <h2 className="lg:text-[30px] xs:text-xl font-bold text-black-50">
                  Assessor Compliance
                </h2>
                <p className="mt-6 text-base leading-8 text-gray-600">
                  RPLiQ supports assessor compliance by maintaining
                  comprehensive trainer files and a detailed trainer matrix.
                  This functionality ensures that all assessors meet the
                  necessary qualifications and ongoing professional development
                  requirements. By keeping assessor information up-to-date and
                  easily accessible, RPLiQ aids RTOs in managing their team's
                  compliance, reinforcing the integrity of the RPL assessments
                  conducted.
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <Image
                src="/journey/compliance/trainermatrix.gif"
                width={768}
                height={470}
                alt="Product screenshot"
                className="rounded-x w-auto h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      <CardRto />
    </>
  );
};

export default page;
