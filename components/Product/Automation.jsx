import React from "react";
import MarkTitle from "../MarkTitle";

const ProductAutomation = () => {
  return (
    <div className="overflow-hidden bg-white  max-container padding-container my-20">
      <MarkTitle markText="Automation" subHead="Automate Your RTO Workflow" />
      <div className="bg-gray-10 grid lg:grid-cols-3 xs:grid-cols-1 mx-auto mt-10 xs:py-4">
        <div className="col-span-1 md:px-10 xs:px-4 lg:order-first xs:order-last">
          <h4 className="text-xl font-semibold my-10">
            Save Time & Grow Your RTO
          </h4>
          <p>
            RPLiQ’s automation reduces the manual workload associated with
            documentation management. The platform’s customisable templates and
            dynamic adaptability ensure that workflows align seamlessly with
            evolving qualification requirements and compliance standards. With
            features like automated notifications for uploaded assessments and
            instant compliance reporting, RPLiQ not only accelerates processes
            but also enhances transparency and efficiency across the entire RTO
            ecosystem.
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

export default ProductAutomation;
