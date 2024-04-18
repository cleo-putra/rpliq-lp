import React from "react";

const UserJourney = () => {
  return (
    <div className="bg-gradient-to-b from-[#eafaf4] to-white">
      <div className="max-container padding-container mx-auto lg:py-20 xs:py-10">
        <h3 className="mb-6 lg:text-3xl xs:text-xl font-bold text-center text-green-50">
          Discover RPLiQ: The Future of RPL, Simplified and Streamlined
        </h3>

        <div className="grid-cols-1 sm:grid md:grid-cols-5">
          <div className="mx-3 mt-6 flex flex-col rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] sm:shrink-0 sm:grow sm:basis-0">
            <img
              className=""
              src="./journey/student-thumbnail.png"
              alt="student journey"
            />
            <div className="p-6">
              <h5 className="mb-2 text-lg font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                Student Tour
              </h5>
              <br/>
              <span className="text-green-50 font-extrabold text-sm hover:underline">
                <a href="/student-tour">Go to Student Journey</a>
              </span>
            </div>
          </div>
          <div className="mx-3 mt-6 flex flex-col rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] sm:shrink-0 sm:grow sm:basis-0">
            <img
              className=""
              src="./journey/assessor-thumbnail.png"
              alt="assessor"
            />
            <div className="p-6">
              <h5 className="mb-2 text-lg font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                Assessor Tour
              </h5>
              {/* <p className="mt-4 text-sm">
            RPLiQ enables online assessments, reducing RTO costs and allowing the streamlining of student's evidence submission for assessment and their path to completion.
            </p> */}
              <br />

              <span className="text-green-50 font-extrabold text-sm hover:underline">
                <a href="/assessor-tour">Go to Assessor Journey</a>
              </span>
            </div>
          </div>

          <div className="mx-3 mt-6 flex flex-col rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] sm:shrink-0 sm:grow sm:basis-0">
            <img className="" src="./journey/rto-thumbnail.png" alt="rto" />
            <div className="p-6">
              <h5 className="mb-2 text-lg font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                RTO Tour
              </h5>
              <br/>
              <span className="text-green-50 font-extrabold text-sm hover:underline">
                <a href="/rto-journey">Go to RTO Tour</a>
              </span>
            </div>
          </div>

          <div className="mx-3 mt-6 flex flex-col rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] sm:shrink-0 sm:grow sm:basis-0">
            <img className="" src="./journey/qa-thumbnail.png" alt="qa" />
            <div className="p-6">
              <h5 className="mb-2 text-lg font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                Compliance & Quality Assurance
              </h5>
              <span className="text-green-50 font-extrabold text-sm hover:underline">
                <a href="/compliance-qa">Go to Compliance & QA</a>
              </span>
            </div>
          </div>

          <div className="mx-3 mt-6 flex flex-col rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] sm:shrink-0 sm:grow sm:basis-0">
            <img
              className=""
              src="./journey/reporting-thumbnail.png"
              alt="reporting"
            />
            <div className="p-6">
              <h5 className="mb-2 text-lg font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                Reporting
              </h5>
              <br />
              <span className="text-green-50 font-extrabold text-sm hover:underline">
                <a href="/reporting">Go to Reporting</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserJourney;
