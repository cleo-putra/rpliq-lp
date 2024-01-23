import React from "react";
import MarkTitle from "../MarkTitle";

const EnsureCompliance = () => {
  return (
    <div className="overflow-hidden bg-white  max-container padding-container my-20">
      <MarkTitle
        markText="Ensure Compliance"
        subHead="Built With Compliance In Mind"
      />
      <div className="bg-gray-10 grid lg:grid-cols-3 xs:grid-cols-1 mx-auto mt-10 xs:py-4">
        <div className="col-span-1 md:px-10 xs:px-4 lg:order-first xs:order-last">
          <h4 className="text-xl font-semibold my-10">
            ASQA-Compliant Workflow
          </h4>
          <p>
            At the core of RPL iQ’s functionality is a commitment to regulatory
            compliance. The platform is meticulously designed to align with the
            standards set by the Australian Skills Quality Authority (ASQA) and
            other regulatory bodies. As any other student management system RPL
            iQ was designed and crafted with a compliance-first mindset,
            providing RTOs with the tools they need to meet and exceed
            regulatory expectations.
          </p>
        </div>
        <div className="col-span-2 sm:order-first lg:order-last">
          <img
            className="mx-auto lg:w-[686px] lg:h-[434px] xs:w-auto xs:h-[180px]"
            src="./laptop-mockup-big.png"
            alt="photo"
          />
        </div>
      </div>
    </div>
  );
};

export default EnsureCompliance;
