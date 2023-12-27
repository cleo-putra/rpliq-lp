import React from "react";

const ProductTwoCard = () => {
  return (
    <div className="max-container padding-container mx-auto lg:pt-12 xs:pt-0 lg:my-16 xs:my-5">
      <div className="text-center">
        <h3 className="mt-6 text-3xl font-bold text-center">
          Revolutionised Students’ Way Of Learning With RPLiQ
        </h3>
        <h5 className="mt-5 md:px-40 xs:px-5 mb-10">
          Students, Assessors, and RTOs can use RPL iQ to track the progress of
          RPL assessments for each student. You can check both the progress and
          status of your student’s. RPL journey and monitor the processing of
          assessments at a micro-level of the unit of competency or a
          macro-level of the training package.
        </h5>
      </div>
      <div className="sm:flex sm:justify-center px-10">
        <div className="bg-black-10 flex flex-col rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] sm:shrink-0 sm:grow sm:basis-0 sm:rounded-none">
          <img
            className="rounded-t-lg sm:rounded-none w-fit"
            src="./p-1.png"
            alt="For RTO"
          />
          <div className="pb-5 lg:px-12 xs:px-4">
            <h5 className="mb-2 lg:text-xl xs:text-base font-medium leading-tight text-white">
              For Registered Training Organisations:
            </h5>

            <ul className="mb-4 lg:text-base xs:text-sm text-white list-disc ml-5">
              <li>Reduced HR administration associated costs</li>
              <li>
                Increase trainers and assessors and operational productivity
              </li>
              <li>Accelerate the RPL process</li>
              <li>Power student identify verification platform</li>
              <li>Review and assess evidence in real-time</li>
              <li>Streamlined real-time assessor feedback</li>
              <li>Improved Student RPL Journey and Experience</li>
              <li>
                Dynamic interaction between the RTO, Assessor, and the student
              </li>
              <li>Efficient Data Management</li>
              <li>Enhanced Compliance Reporting</li>
              <li>Multiple enrolment capabilities</li>
              <li>Industry-specific evidence</li>
              <li>Streamlined reference and verifications</li>
            </ul>
          </div>
        </div>
        <div className="bg-gray-10 flex flex-col rounded-lgshadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] sm:shrink-0 sm:grow sm:basis-0 sm:rounded-l-none">
          <img
            className="rounded-t-lg sm:rounded-tl-none"
            src="./product2.png"
            alt="For Students"
          />
          <div className="lg:px-12 xs:px-4">
            <h5 className="mb-2 lg:text-xl xs:text-base font-medium leading-tight text-neutral-800 dark:text-neutral-50">
              For Students:
            </h5>
            <ul className="mb-4 text-base lg:text-base xs:text-sm list-disc ml-5">
              <li>Real-Time Progress Tracking</li>
              <li>All Evidence Stored In One Place</li>
              <li>Direct Communication with both the assessors and RTO</li>
              <li>Accessible At All Time</li>
              <li>Streamlined enrolment and LLN</li>
              <li>Multiple enrolment capabilities</li>
              <li>Industry-specific evidence guidance</li>
              <li>Streamlined reference and verifications</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductTwoCard;
