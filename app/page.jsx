"use client";
import AchieveRpl from "@/components/Home/AchieveRpl";
import CardRto from "@/components/Home/CardRto";
import PartnerSlider from "@/components/Home/PartnerSlider";
import SocialStar from "@/components/Home/SocialStar";
import Testimonial from "@/components/Home/Testimonial";
import Image from "next/image";
import ReadMoreReact from "read-more-react";

export default function Home() {
  return (
    <>
      {/* Banner */}
      <div className="max-container padding-container bg-white lg:py-24 xs:py-14">
        <div className="grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-xl">
              <mark className="bg-green-30 p-4">
                Streamlined RPL SMS for RTOs
              </mark>
              <h2 className="mt-6 text-[40px] font-bold text-green-50	leading-snug tracking-wide lg:max-w-lg">
                RPL Faster, Cheaper And More Compliant!
              </h2>
              <div className="my-6 text-base leading-8 text-gray-600">
                Start processing your student’s RPL’s using RPL iQ, the only
                streamlined RPL system in the VET sector. RPL iQ automates and
                simplifies the entire RPL process by reducing your overhead cost
                and, increasing your institute productivity.
                <ReadMoreReact
                  className="text-green-50 cursor-pointer"
                  min={0}
                  ideal={0}
                  max={1}
                  text={
                    "By adopting a more modernised streamlined solution your institute will gain a competitive edge and process RPL faster."
                  }
                  readMoreText="Read more.."
                />
              </div>
              <div className="lg:mt-6 sm:mt-2 flex justify-normal gap-4">
                <button className="flexCenter gap-3" type="button">
                  <label className="font-bold whitespace-nowrap btn_dark_green lg:text-lg xs:text-xs">
                    Start Trial
                  </label>
                </button>
                <button className="flexCenter gap-3" type="button">
                  <label className="font-bold whitespace-nowrap btn_white_green lg:text-lg xs:text-xs">
                    Request Demo
                  </label>
                </button>
              </div>
            </div>
          </div>
          <div className="flex lg:justify-end xs:justify-center">
            <img
              src="/home-1.svg"
              alt="Product screenshot"
              className="rounded-x lg:w-[533px] lg:h-[458px] xs:w-[333px] xs:h-[260px]"
            />
          </div>
        </div>
      </div>
      {/* Testimonial */}
      <Testimonial />
      {/* Accordion Product */}
      <AchieveRpl />
      {/* Banner 2 */}
      {/* Banner */}
      <div className="bg-white pt-10 max-container padding-container">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="flex justify-start lg:order-first xs:order-last">
            <Image
              src="/home-2.png"
              width={486}
              height={458}
              alt="Product screenshot"
              className="rounded-x md:h-[458px] "
            />
          </div>

          <div className="lg:pr-8">
            <div className="lg:max-w-xl">
              <h2 className="lg:text-[30px] xs:text-xl font-bold text-black-50	lg:max-w-lg">
                RPL Software Tailored for RTOs’ Regulatory Standards!
              </h2>
              <p className="mt-6 text-base leading-8 text-gray-600">
                RPL iQ automates and accelerates the entire RPL process. The
                platform’s architecture is designed with a compliance-first
                mindset, offering customisable templates, dynamic adaptability,
                and real-time tracking to meet the rigorous requirements set by
                regulatory bodies
              </p>

              <dl className="mt-4 max-w-xl space-y-2 text-base leading-7 text-gray-600 lg:max-w-none">
                <div className="relative pl-9 ref">
                  <dt className="inline font-semibold text-gray-900">
                    <Image
                      src="/check.png"
                      width={24}
                      height={24}
                      alt="Checklist"
                      className="absolute left-1 top-1 h-5 w-5"
                    />
                  </dt>
                  <dd className="inline">Reduce admin work</dd>
                </div>
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <Image
                      src="/check.png"
                      width={24}
                      height={24}
                      alt="Checklist"
                      className="absolute left-1 top-1 h-5 w-5"
                    />
                  </dt>
                  <dd className="inline">VET compliant</dd>
                </div>
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <Image
                      src="/check.png"
                      width={24}
                      height={24}
                      alt="Checklist"
                      className="absolute left-1 top-1 h-5 w-5"
                    />
                  </dt>
                  <dd className="inline">
                    Automated workflows that expedite the RPL journey
                  </dd>
                </div>
              </dl>

              <div className="mt-6 flex justify-normal">
                <button className="flexCenter gap-3" type="button">
                  <label className="font-bold whitespace-nowrap btn_dark_green lg:text-normal xs:text-xs">
                    Start Trial
                  </label>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Banner 3 */}
      {/* Banner */}
      <div className="overflow-hidden bg-white lg:py-32 xs:py-10 max-container padding-container">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8">
            <div className="lg:max-w-xl">
              <h2 className="lg:text-[30px] xs:text-xl font-bold text-black-50	lg:max-w-lg">
                RPLiQ Saves Time, Cost and Effort
              </h2>
              <p className="mt-6 text-base leading-8 text-gray-600">
                We understand that the journey to qualification can be complex,
                time-consuming, and burdensome. That’s why RPLiQ is here to
                streamline and automate every step of the way, offering you
                unmatched advantages:
              </p>

              <dl className="mt-4 max-w-xl space-y-2 text-base leading-7 text-gray-600 lg:max-w-none">
                <div className="relative pl-9 ref">
                  <dt className="inline font-semibold text-gray-900">
                    <Image
                      src="/check.png"
                      width={24}
                      height={24}
                      alt="Checklist"
                      className="absolute left-1 top-1 h-5 w-5"
                    />
                  </dt>
                  <dd className="inline">User-friendly software</dd>
                </div>
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <Image
                      src="/check.png"
                      width={24}
                      height={24}
                      alt="Checklist"
                      className="absolute left-1 top-1 h-5 w-5"
                    />
                  </dt>
                  <dd className="inline">Real-time progress tracking</dd>
                </div>
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <Image
                      src="/check.png"
                      width={24}
                      height={24}
                      alt="Checklist"
                      className="absolute left-1 top-1 h-5 w-5"
                    />
                  </dt>
                  <dd className="inline">Compliance and quality assurance</dd>
                </div>
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <Image
                      src="/check.png"
                      width={24}
                      height={24}
                      alt="Checklist"
                      className="absolute left-1 top-1 h-5 w-5"
                    />
                  </dt>
                  <dd className="inline">Efficient data management software</dd>
                </div>
              </dl>

              <div className="mt-6 flex justify-normal gap-4">
                <button className="flexCenter gap-3" type="button">
                  <label className="font-bold whitespace-nowrap btn_dark_green lg:text-normal xs:text-xs">
                    Start Trial
                  </label>
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <Image
              src="/home-3.png"
              width={568}
              height={470}
              alt="Product screenshot"
              className="rounded-x md:h-[470px]"
            />
          </div>
        </div>
      </div>
      {/* Partner Slider */}
      <PartnerSlider />

      {/* Social star */}
      <SocialStar />

      <CardRto />
    </>
  );
}
