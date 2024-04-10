"use client";
import AchieveRpl from "@/components/Home/AchieveRpl";
import CardRto from "@/components/Home/CardRto";
import CountUp from "@/components/Home/CountUp";
import Discover from "@/components/Home/Discover";
import PartnerSlider from "@/components/Home/PartnerSlider";
import SocialStar from "@/components/Home/SocialStar";
import Testimonial from "@/components/Home/Testimonial";
import UserJourney from "@/components/Home/UserJourney";
import Image from "next/image";
import { Typewriter } from "nextjs-simple-typewriter";

export default function Home() {
  return (
    <>
      {/* Banner */}
      <div className="max-container padding-container bg-white lg:py-24 xs:py-14">
        <div className="grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-xl">
              <mark className="bg-green-30 p-4">Cloud-based RPL Software</mark>
              <h2 className="mt-6 text-[28px] font-bold text-green-50	leading-snug tracking-wide lg:max-w-lg">
                RPLiQ: RPL Assessment Management System
                <br />
                <Typewriter
                  words={[
                    "Revolutionising RPL",
                    "Automating RPL Assessments",
                    "Streamlining RPL Processes",
                    "Online RPL Evidence Submission",
                    "Accelerating the Student Journey",
                  ]}
                  loop={10}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={2000}
                />
              </h2>

              <div className="my-6 text-base leading-8 text-gray-600">
                Boost Your RTO's Productivity with RPLiQ: The Premier Online RPL
                System in the VET Sector. Experience unmatched efficiency by
                automating and simplifying your entire RPL process,
                significantly cutting overhead costs and enhancing productivity.
              </div>
              <div className="lg:mt-6 sm:mt-2 flex justify-normal gap-4">
                <button className="flexCenter gap-3" type="button">
                  <label className="font-bold whitespace-nowrap btn_dark_green lg:text-lg xs:text-xs">
                    Request Free Demo
                  </label>
                </button>
              </div>
            </div>
          </div>
          <div className="flex lg:justify-end xs:justify-center">
            <img
              src="/dashboard-student.png"
              alt="Product screenshot"
              className="rounded-x w-max h-max "
            />
          </div>
        </div>
      </div>
      {/* Video */}
      <div className="max-container padding-container">
        <video controls loop autoPlay>
          <source src="/video/Homepage.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Banner 2 */}
      <Discover />

      <UserJourney />
      {/* Banner 1*/}
      <div className="bg-white lg:mt-20 xs:mt-0 max-container padding-container">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="flex justify-start lg:order-first xs:order-last">
            <Image
              src="/ams.png"
              width={486}
              height={458}
              alt="Product screenshot"
              className="rounded-x h-auto w-auto "
            />
          </div>

          <div className="lg:pr-8">
            <div className="lg:max-w-xl lg:mt-10 xs:mt-0">
              <h2 className="lg:text-[30px] font-bold text-black-50 lg:max-w-lg">
                Assessment Management System Designed For RTO Compliance
              </h2>

              <dl className="mt-4 max-w-xl space-y-2 text-base leading-7 text-gray-600 lg:max-w-none">
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
                    Automated Enrolment: Streamlines administrative tasks,
                    accelerating the student journey.
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
                    Online Assessments: Offers online assessments to reduce
                    operational costs and speed up qualification.
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
                    Instant Certification: Enables immediate issuance of digital
                    certificates, enhancing efficiency.
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
                    Regulatory Compliance: Designed with a compliance-first
                    approach to meet Australian standards.
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
                    Enhanced Student Experience: Provides a faster, more
                    satisfying journey from start to finish.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
      {/* Banner 2 */}
      <div className="overflow-hidden lg:mt-20 xs:mt-0 bg-white lg:py-32 xs:py-10 max-container padding-container">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8">
            <div className="lg:max-w-xl ">
              <h2 className="lg:text-[30px] xs:text-xl font-bold text-black-50	lg:max-w-lg">
                RPLiQ Saves Time, Cost, and Effort
              </h2>
              <p className="mt-6 text-base leading-8 text-gray-600">
                Traditional RPL processes can be expensive, time intensive,
                complex, and slow. RPLiQ revolutionises the RPL process by
                making the journey simpler, online and automated. It's designed
                for everyone involved - RTOs, Assessors, employers and Students
                - with features that match their needs.
              </p>

              <dl className="mt-4 max-w-xl space-y-2 text-base leading-7 text-gray-600 lg:max-w-none">
                <div className="relative pl-9">
                  <dt className="flex font-semibold text-gray-900">
                    <Image
                      src="/icon/rpl.png"
                      width={24}
                      height={24}
                      alt="Checklist"
                      className="absolute left-1 mt-1 top-1 h-5 w-6"
                    />
                  </dt>
                  <dd className="inline">
                    For Students:
                    <br />
                    24/7 Online Access: submit RPL assessments & evidence
                    anytime, anywhere, direct access to assessors & receive
                    instant feedback & assessment outcome.{" "}
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
                    For Assessors:
                    <br />
                    Assess multiple students, instantly give feedback or
                    communicate assessment outcome while maintaining a compliant
                    trainer file.
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
                    For RTOs:
                    <br />
                    Efficiency & Compliance: Enroll more, boost productivity,
                    and save costs while staying compliant & meeting reporting
                    requirements.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <div className="flex items-center">
            <Image
              src="/dashboard-devices.png"
              width={568}
              height={470}
              alt="Product screenshot"
              className="rounded-x w-auto h-auto"
            />
          </div>
        </div>
      </div>
      {/* testimonials */}
      <Testimonial />  

      <CountUp />

      <CardRto />
    </>
  );
}
