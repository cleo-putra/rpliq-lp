import Image from "next/image";
import React from "react";

const VideoRto = () => {
  return (
    <div className="overflow-hidden bg-[#eafaf4] lg:py-24 xs:py-10 flex">
      <div className="max-container padding-container py-8 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 sm:gap-y-20">
        <div className="flex">
          <Image
            src="/rto-4.png"
            width={568}
            height={470}
            alt="Product screenshot"
            className="rounded-x w-[486px] h-[460px]"
          />
        </div>
        <div className="lg:pr-8 lg:pt-12 xs:pt-0">
          <h2 className="lg:text-3xl xs:text-xl font-bold text-black-50">
            Maximise Training Time, <br />
            Minimise Inefficiencies
          </h2>
          <dl className="mt-10 max-w-xl space-y-2 text-base leading-7 text-gray-600 lg:max-w-none">
            <div className="relative pl-9 ref">
              <dt className="inline font-semibold text-gray-900">
                <Image
                  src="/icon/rpliq-black.png"
                  width={25}
                  height={20}
                  alt="Checklist"
                  className="absolute left-1 top-1"
                />
              </dt>
              <dd className="inline">
                Expedite and streamline assessments for precise and efficient
                outcomes.
              </dd>
            </div>
            <div className="relative pl-9 ref">
              <dt className="inline font-semibold text-gray-900">
                <Image
                  src="/icon/rpliq-black.png"
                  width={25}
                  height={20}
                  alt="Checklist"
                  className="absolute left-1 top-1"
                />
              </dt>
              <dd className="inline">
                Reduce paperwork and alleviate administrative responsibilities.
              </dd>
            </div>
            <div className="relative pl-9 ref">
              <dt className="inline font-semibold text-gray-900">
                <Image
                  src="/icon/rpliq-black.png"
                  width={25}
                  height={20}
                  alt="Checklist"
                  className="absolute left-1 top-1"
                />
              </dt>
              <dd className="inline">
                Seamlessly integrate compliance standards into your training
                protocols.
              </dd>
            </div>
            <div className="relative pl-9 ref">
              <dt className="inline font-semibold text-gray-900">
                <Image
                  src="/icon/rpliq-black.png"
                  width={25}
                  height={20}
                  alt="Checklist"
                  className="absolute left-1 top-1"
                />
              </dt>
              <dd className="inline">Track students progress anytime</dd>
            </div>
            <div className="relative pl-9 ref">
              <dt className="inline font-semibold text-gray-900">
                <Image
                  src="/icon/rpliq-black.png"
                  width={25}
                  height={20}
                  alt="Checklist"
                  className="absolute left-1 top-1"
                />
              </dt>
              <dd className="inline">
                Elevate the overall student learning experience.
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
      </div>
    </div>
  );
};

export default VideoRto;
