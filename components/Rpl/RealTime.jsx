import React from "react";

const RealTime = () => {
  return (
    <div className="max-container padding-container mx-auto lg:py-32 xs:py-10">
      <h3 className="my-6 lg:text-3xl xs:text-xl font-bold text-center text-green-50">
        Real-Time Collaboration: Live Chat and Online Evidence Approvals in
        RPLiQ
      </h3>

      <h5 className="mt-5 md:px-40 xs:px-5 mb-10 text-center">
        RPLiQ's live chat feature and online evidence review capabilities
        streamline communication and decision-making between students,
        assessors, and RTOs, enhancing efficiency and engagement throughout the
        RPL process
      </h5>

      <div className="grid-cols-1 sm:grid md:grid-cols-2">
        <div className="mx-3 mt-6 flex flex-col rounded-lg bg-[#eafaf4] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] sm:shrink-0 sm:grow sm:basis-0">
          <div className="p-6">
            <h5 className="mb-2 text-xl font-bold leading-tight text-green-50">
              Live Chat
            </h5>
            <p className="mt-4 text-md">
              Instant messaging for real-time support and feedback, connecting
              students, assessors, and RTOs directly. add screenshot of the live
              chat feature in a mobile screen.
            </p>
          </div>
          <img
            className="h-[400px] w-[300px] mx-auto"
            src="./live-chat.png"
            alt="Skyscrapers"
          />
        </div>
        <div className="mx-3 mt-6 flex flex-col rounded-lg bg-[#eafaf4] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] sm:shrink-0 sm:grow sm:basis-0">
          <div className="p-6">
            <h5 className="mb-2 text-xl font-bold leading-tight text-green-50">
              Online Evidence Review
            </h5>
            <p className="mt-4 text-md">
              Seamless review and approval process for evidence, ensuring
              efficiency and compliance with a few clicks. add screenshot of the
              approval feature in a mobile screen.
            </p>
          </div>
          <img
            className="h-[400px] w-[300px] mx-auto"
            src="./online-evidence.png"
            alt="Skyscrapers"
          />
        </div>
      </div>
    </div>
  );
};

export default RealTime;
