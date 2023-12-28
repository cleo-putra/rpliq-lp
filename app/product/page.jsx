import CardRto from "@/components/Home/CardRto";
import CarouselProduct from "@/components/Product/CarouselProduct";
import CardProduct from "@/components/Product/CardProduct";
import ProductTwoCard from "@/components/Product/ProductTwoCard";
import Image from "next/image";
import React from "react";
import CardFeatures from "@/components/Product/CardFeatures";
import ProductAutomation from "@/components/Product/Automation";

const ProductCard1 = [
  {
    key: "1",
    title: "Automated System To Minimise Errors",
    content:
      "RPL iQ offers automations that enables the RTO to cut back on manual processing and minimise manual manipulations that can expose you to both errors and non-compliances.",
  },
  {
    key: "2",
    title: "Real-Time Analytics & Reporting",
    content:
      "By using RPL iQ as your RPL student management system, your RTO will access reporting functions to monitor student progress, assessor productivity, and ensure you meet the annual regulatory reporting requirements.",
  },
  {
    key: "3",
    title: "Paperless & Secure Administration",
    content:
      "With a focus on environmental sustainability, RPL iQ puts the environment first by eliminating all the manual handling and the need to store or print and submit evidence to meet regulatory requirements.",
  },
];

const ProductCard2 = [
  {
    key: "1",
    title: "Real-Time Compliance Tracking and Reporting",
    content:
      "This capability ensures that RTOs have instant visibility into various compliance aspects, from student progress to documentation accuracy. With real-time insights, RTOs can proactively address any potential compliance issues, demonstrate adherence to regulatory standards during audits.",
  },
  {
    key: "2",
    title: "Dynamic Adaptability to Regulatory Changes",
    content:
      "To facilitate seamless compliance, the platform offers dynamic adaptability. RTOs can request for variations in evidence requirements, within the platform to accommodate training package changes and any other regulatory reforms.",
  },
  {
    key: "3",
    title: "Streamlining Transparency",
    content:
      "The RTO and the various user levels will gain access to a smart dashboard that offers an overall view of compliance status, student progress, documentation accuracy, and adherence to regulatory standards. With a few clicks, RTOs can generate instant compliance reports.",
  },
];

const page = () => {
  return (
    <>
      {/* Banner */}
      <div className="max-container padding-container bg-white lg:py-24 xs:py-12">
        <div className="grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-xl lg:p-0">
              <mark className="bg-green-30 p-4">RPL Streamlined</mark>
              <h2 className="mt-6 lg:text-[40px] xs:text-3xl font-bold text-green-50	leading-snug tracking-wide lg:max-w-lg">
                RPL iQ, Who Are We, And What We Can Do For You?
              </h2>
              <p className="mt-6 text-base leading-8 text-gray-600">
                RPL iQ is Australia’s only RPL student management system that
                offers a simplified and streamlined solution to the RPL process
                and student journey. RPL iQ enhances the student experience with
                the RTO through its automation and dynamic adaptability.
                <br />
                RPL iQ streamlines the RPL process and automates all aspects of
                the process functions, accelerating the traditional RPL process.
                RPL iQ achieves this through a variety of features.
              </p>

              <div className="lg:mt-6 sm:mt-2 flex justify-normal gap-4">
                <button className="flexCenter gap-3" type="button">
                  <label className="font-semibold whitespace-nowrap btn_dark_green lg:text-normal xs:text-xs">
                    Start Trial
                  </label>
                </button>
                <button className="flexCenter gap-3" type="button">
                  <label className="font-semibold whitespace-nowrap btn_white_green lg:text-normal xs:text-xs">
                    Request Demo
                  </label>
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <img
              src="/product-banner.png"
              alt="Product screenshot"
              className="rounded-x lg:w-[583px] lg:h-[508px] xs:w-[266px] xs:h-[228px] mx-auto"
            />
          </div>
        </div>
      </div>
      <CardFeatures />
      <ProductTwoCard />
      <CardProduct
        markText="Online & Real-Time"
        subHead="Reduce manual processing With RPL iQ"
        cardContent={ProductCard1}
      />
      <CarouselProduct />
      <CardProduct
        markText="Track & Report"
        subHead="Reporting Requirements"
        cardContent={ProductCard2}
      />
      <ProductAutomation />
      <CardRto />
    </>
  );
};

export default page;
