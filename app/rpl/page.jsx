import React from "react";
import Button from "@/components/Button";
import AchieveRpl from "@/components/Home/AchieveRpl";
import CardRto from "@/components/Home/CardRto";
import PartnerSlider from "@/components/Home/PartnerSlider";
import Testimonial from "@/components/Home/Testimonial";
import RplFeatures from "@/components/Rpl/RplFeatures";
import Image from "next/image";
import Discover from "@/components/Home/Discover";
import RealTime from "@/components/Rpl/RealTime";
import QualificationUnit from "@/components/Rpl/QualificationUnit";
import CuttingEdge from "@/components/Rpl/CuttingEdge";

export default function Home() {
  return (
    <>
      {/* Banner */}
      <div className="overflow-hidden bg-white py-24 sm:py-32 max-container padding-container">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-xl">
              <mark className="bg-green-30 p-4">
                Recognition Prior Learning
              </mark>
              <h2 className="mt-6 text-[34px] font-bold text-green-50	leading-snug tracking-wide lg:max-w-lg">
                Experience The Ease Of RPL With RPLiQ
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                RPLiQ a transformative tool that accelerates qualification
                attainment, enhances communication between students and RTOs,
                and ensures compliance with industry regulations.
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
          <div className="flex items-center">
            <video controls loop autoPlay>
              <source src="/video/RPL.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>

      <RplFeatures />
      {/* Testimonial */}
      <Testimonial />

      {/* Section Key Features */}
      <div className="bg-[#eafaf4]">
        <div className="overflow-hidden lg:py-24 xs:py-10 max-container padding-container">
          <div className="mx-auto grid max-w-2xl xs:grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 py-20">
            <div className="lg:max-w-xl">
              <h2 className="lg:text-[30px] xs:text-xl font-bold text-black-50">
                RPLiQ Key Features
              </h2>
              <p className="mt-6 text-base leading-8 text-gray-600">
                With our smart features, RPLiQ paves the way for a new era in
                qualification attainment.
              </p>

              <dl className="my-4 max-w-xl space-y-2 text-base leading-7 text-gray-600 lg:max-w-none">
                <div className="relative pl-9 ref">
                  <dt className="inline font-semibold text-gray-900">
                    <Image
                      src="/icon/rpl.png"
                      width={24}
                      height={24}
                      alt="Checklist"
                      className="absolute left-1 mt-1 top-1 h-5 w-6"
                    />
                  </dt>
                  <dd className="inline">
                    <b>Automated Assessment Tools:</b>
                    <br />
                    Smart tools guide students through assessments, while RTOs
                    benefit from automated processes.
                  </dd>
                </div>
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <Image
                      src="/icon/rpl.png"
                      width={24}
                      height={24}
                      alt="Checklist"
                      className="absolute left-1 mt-1 top-1 h-5 w-6"
                    />
                  </dt>
                  <dd className="inline">
                    <b>Compliance Assurance:</b>
                    <br />
                    RPLiQ ensures compliance with ASQA standards, providing a
                    reliable and secure certification process.
                  </dd>
                </div>
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <Image
                      src="/icon/rpl.png"
                      width={24}
                      height={24}
                      alt="Checklist"
                      className="absolute left-1 mt-1 top-1 h-5 w-6"
                    />
                  </dt>
                  <dd className="inline">
                    <b>Efficient Workflow Management:</b>
                    <br />
                    From enrolment to certification, RPLiQ optimises workflows
                    for both students and RTOs.
                  </dd>
                </div>
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <Image
                      src="/icon/rpl.png"
                      width={24}
                      height={24}
                      alt="Checklist"
                      className="absolute left-1 mt-1 top-1 h-5 w-6"
                    />
                  </dt>
                  <dd className="inline">
                    <b>Progress Tracking:</b>
                    <br />
                    Real-time tracking keeps students informed, while RTOs gain
                    insights for continuous improvement.
                  </dd>
                </div>
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <Image
                      src="/icon/rpl.png"
                      width={24}
                      height={24}
                      alt="Checklist"
                      className="absolute left-1 mt-1 top-1 h-5 w-6"
                    />
                  </dt>
                  <dd className="inline">
                    <b>Paper-Free Documentation:</b>
                    <br />
                    RPLiQ contributes to sustainability by minimising paperwork
                    in the certification process.
                  </dd>
                </div>
              </dl>

              <div className="mt-6 flex justify-normal gap-4">
                <button className="flexCenter gap-3" type="button">
                  <label className="font-bold whitespace-nowrap btn_dark_green lg:text-normal xs:text-xs">
                    Request a Free Demo
                  </label>
                </button>
              </div>
            </div>

            <div className="flex justify-center items-center">
              <Image
                src="/RPLFeatures.png"
                width={768}
                height={470}
                alt="Product screenshot"
                className="rounded-x w-auto h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      <Discover />

      <RealTime /> 
      
      {/* Accordion Product */}
      <CuttingEdge />

      <QualificationUnit />


      <CardRto />
    </>
  );
}
