import CardRto from "@/components/Home/CardRto";
import PartnerSlider from "@/components/Home/PartnerSlider";
import AchieveSection from "@/components/Rto/AchieveSection";
import CarouselRto from "@/components/Rto/CarouselRto";
import JourneySection from "@/components/Rto/JourneySection";
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
              <mark className="bg-green-30 p-4">RTO Solutions</mark>
              <h2 className="mt-6 text-[34px] font-bold text-green-50	leading-snug tracking-wide lg:max-w-lg">
                RPLiQ: The Ultimate Assessment Management System (AMS) for RTOs
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                RTOs have long sought an RPL assessment management system (AMS)
                that aligns with regulatory standards and assessment practices.
                RPLiQ takes this challenge head-on, it uses the training package
                as the blueprint when designing and developing its assessment
                and evidence mapping requirements. This dedication makes RPLiQ
                the go-to, reliable platform for meeting and exceeding industry
                expectations.
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
              <source src="/video/RTO.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>

      {/* Joruney Section */}
      <JourneySection />

      {/* Banner */}
      <div className="overflow-hidden bg-white lg:py-24 xs:py-10 max-container padding-container">
        <div className="mx-auto grid max-w-2xl xs:grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-12 xs:pt-0">
            <div className="lg:max-w-xl">
              <h2 className="lg:text-[30px] xs:text-xl font-bold text-black-50">
                Is Your RTO’s RPL Journey Taking Too Long And Costing Too Much?
              </h2>
              <p className="mt-6 text-base leading-8 text-gray-600">
                If your RTO's RPL process is dragging on and draining resources,
                RPLiQ offers a targeted solution to streamline every step,
                ensuring efficiency without losing sight of quality or
                compliance.
                <br />
                RPLiQ redefines the RPL experience:
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
                    Quick Enrolments: Our platform accelerates the initial
                    enrolment phase, making it smoother and faster for students
                    to start their journey.
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
                    Streamlined Assessments: With automated assessment tools,
                    RPLiQ speeds up the evaluation of students' competencies,
                    allowing assessors to provide immediate feedback.
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
                    Efficient Evidence Collection: Simplifies the collection and
                    submission of evidence, ensuring it's aligned with training
                    package requirements and easily accessible for review.
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
                    Automated Compliance Checks: Integrates compliance checks
                    throughout the RPL process, ensuring every step meets
                    regulatory standards without manual oversight.
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
                    Instant Certification: Once all requirements are met, RPLiQ
                    facilitates the online issuance of certifications, reducing
                    wait times and enhancing student gratification.
                  </dd>
                </div>
              </dl>

              <p className="mt-6 text-base leading-8 text-gray-600">
                By targeting inefficiencies at each step of the RPL journey,
                RPLiQ not only accelerates the process but also cuts operational
                costs and ensures compliance, transforming your RTO's approach
                to RPL into a more effective and strategic asset.
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
          <div className="flex justify-center items-center">
            <Image
              src="/dashboard-rto.png"
              width={768}
              height={470}
              alt="Product screenshot"
              className="rounded-x w-auto h-auto"
            />
          </div>
        </div>
      </div>

      {/* Achieve Section */}
      <AchieveSection />

      <div className="max-container padding-container flex justify-center items-center my-10">
        <Image
          src="/Group 50.svg"
          width={768}
          height={470}
          alt="Product screenshot"
          className="rounded-x lg:w-[1200px] lg:h-max xs:w-max xs:h-max"
        />
      </div>

      <CardRto />
    </>
  );
};

export default page;
