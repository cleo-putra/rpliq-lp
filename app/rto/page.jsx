import CardRto from "@/components/Home/CardRto";
import PartnerSlider from "@/components/Home/PartnerSlider";
import CarouselRto from "@/components/Rto/CarouselRto";
import ManageStudent from "@/components/Rto/ManageStudent";
import TableRto from "@/components/Rto/TableRto";
import VideoRto from "@/components/Rto/VideoRto";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <>
      {/* Banner */}
      <div className="overflow-hidden bg-white py-24 sm:py-32 max-container padding-container">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-xl">
              <mark className="bg-green-30 p-4">
                Registered Training Organisation
              </mark>
              <h2 className="mt-6 text-[34px] font-bold text-green-50	leading-snug tracking-wide lg:max-w-lg">
                RPLiQ an Assessment Management System (AMS)
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                RTO's have been waiting for an assessment management system that
                meets regulatory and standards assessment practice requirements.
                RPLiQ uses the training package requirement as part of its
                assessment and evidence mapping requirement making it the most
                reliable platform to use.
              </p>

              <div className="lg:mt-6 sm:mt-2 flex justify-normal gap-4">
                <button className="flexCenter gap-3" type="button">
                  <label className="font-semibold whitespace-nowrap btn_dark_green lg:text-normal xs:text-xs">
                    Request a Free Demo
                  </label>
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <Image
              src="/rto-banner.jpg"
              width={507}
              height={458}
              alt="Product screenshot"
              className="rounded-x"
            />
          </div>
        </div>
      </div>

      {/* Partner Slider */}
      <PartnerSlider />

      {/* Banner */}
      <div className="overflow-hidden bg-white lg:py-24 xs:py-10 max-container padding-container">
        <div className="mx-auto grid max-w-2xl xs:grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-12 xs:pt-0">
            <div className="lg:max-w-xl">
              <h2 className="lg:text-[30px] xs:text-xl font-bold text-black-50">
                Is Your RTO’s RPL Journey Taking Too Long And Costing Too Much?
              </h2>
              <p className="mt-6 text-base leading-8 text-gray-600">
                Handling a substantial student cohort without robust assessment
                mechanisms can complicate adherence to compliance standards,
                potentially causing operational inefficiencies, increased risk
                of non-conformity with regulatory requirements, and challenges
                in ensuring consistent educational quality.
              </p>

              <div className="mt-6 flex justify-normal gap-4">
                <button className="flexCenter gap-3" type="button">
                  <label className="font-bold whitespace-nowrap btn_dark_green lg:text-normal xs:text-xs">
                    Request a Free Demo
                  </label>
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <Image
              src="/rto-4.png"
              width={568}
              height={470}
              alt="Product screenshot"
              className="rounded-x w-[486px] h-[460px]"
            />
          </div>
        </div>
      </div>
      <div className="overflow-hidden bg-white lg:py-24 xs:py-10 max-container padding-container">
        <div className="mx-auto grid max-w-2xl xs:grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-12 xs:pt-0">
            <div className="lg:max-w-xl">
              <h2 className="lg:text-[30px] xs:text-xl font-bold text-black-50">
                Is Your RTO’s RPL Journey Taking Too Long And Costing Too Much?
              </h2>
              <p className="mt-6 text-base leading-8 text-gray-600">
                Handling a substantial student cohort without robust assessment
                mechanisms can complicate adherence to compliance standards,
                potentially causing operational inefficiencies, increased risk
                of non-conformity with regulatory requirements, and challenges
                in ensuring consistent educational quality.
              </p>

              <div className="mt-6 flex justify-normal gap-4">
                <button className="flexCenter gap-3" type="button">
                  <label className="font-bold whitespace-nowrap btn_dark_green lg:text-normal xs:text-xs">
                    Request a Free Demo
                  </label>
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <Image
              src="/rto-4.png"
              width={568}
              height={470}
              alt="Product screenshot"
              className="rounded-x w-[486px] h-[460px]"
            />
          </div>
        </div>
      </div>

      <VideoRto />
      <TableRto />
      <ManageStudent />
      <CarouselRto />
      <CardRto />
    </>
  );
};

export default page;
