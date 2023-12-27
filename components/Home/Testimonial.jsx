import Image from "next/image";
import React from "react";

const Testimonial = () => {
  return (
    <div className="lg:grid lg:grid-cols-2 gap-0 xs:flex xs:flex-wrap">
      <div className="bg-black-50">
        <div className="max-container padding-container-testimonial lg:py-20 xs:py-10">
          <p className="text-white lg:text-2xl xs:text-xl">
            RPL iQ is our secret weapon for simplifying RPL. Our students were
            able to upload their evidence and get assessed in real time. Thank
            you RPL iQ!{" "}
          </p>

          <div className="mt-10 flex gap-4">
            <Image
              width={30}
              height={30}
              className="h-max w-max rounded-full pt-1"
              src="/icon-user.png"
              alt="photo"
            />
            <div className="text-base">
              <div className="font-semibold text-white">Darren T</div>

              <div className="text-white text-xs">RTO Director</div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-green-50">
        <div className="max-container padding-container-testimonial lg:py-20 xs:py-10">
          <p className="text-black-50 lg:text-2xl xs:text-xl">
            Our RTO is now processing double the RPL applications and reduced
            our admin staff cost, the system does everything! <br />
            AMAZING!!!{" "}
          </p>

          <div className="mt-10 flex gap-4">
            <Image
              width={30}
              height={30}
              className="h-max w-max rounded-full pt-1"
              src="/icon-user-black.png"
              alt="photo"
            />
            <div className="text-base">
              <div className="font-semibold text-black-50">Harry L</div>

              <div className="text-black-50 text-xs">RTO Director</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
