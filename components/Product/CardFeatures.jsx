import React from "react";
import MarkTitle from "../MarkTitle";

const FeaturesContent = [
  {
    key: "1",
    title: "Interactive Dashboard",
    content: "Customisable dashboard with real-time analytics",
    image: "./icon/product/dashboard.svg",
  },
  {
    key: "2",
    title: "Online Enrolment & LLN",
    content:
      "Students will complete streamlined enrolment and LLN process assessed in real-time",
    image: "./icon/product/enrollment.svg",
  },
  {
    key: "3",
    title: "Automated ID & Verification",
    image: "./icon/product/idcard.svg",
    content: "Student ID is verified through an instant verification platform",
  },
  {
    key: "4",
    title: "System Integrations",
    image: "./icon/product/setting.svg",
    content: "Integration capabilities through API",
  },
  {
    key: "5",
    title: "Chat Module",
    image: "./icon/product/chat.svg",
    content:
      "Students gain access to chat modules to converse with trainer for instant support and trainer feedback",
  },
  {
    key: "6",
    title: "Automation",
    image: "./icon/product/automation.svg",
    content:
      "A variety of automation assist in accelerating the RPL process such as obtaining references and verifications",
  },
  {
    key: "7",
    title: "Real-time Assessments",
    image: "./icon/product/enrollment.svg",
    content:
      "Enabling assessors to make assessment judgments in real-time as students upload and submit their evidence",
  },
  {
    key: "8",
    title: "Progress Bar's",
    image: "./icon/product/progress-bar.svg",
    content:
      "Providing the student with a percentage of each action item to be completed, motivating the student to progress",
  },
];

const CardFeatures = () => {
  return (
    <>
      <div className="max-container padding-container mx-auto lg:pt-8 xs:pt-0 lg:my-16 xs:my-5">
        <div id="features" className="mx-auto max-w-6xl">
          <MarkTitle
            markText=" RPL iQ Features"
            subHead="The Ultimate RPL Automation"
          />
          <ul className="mt-16 grid grid-cols-1 gap-6 text-center text-slate-700 md:grid-cols-4">
            {FeaturesContent.map((item) => (
              <li
                className="rounded-xl bg-[#6FEFC1]/30 px-6 py-8 shadow-sm"
                key={item.key}
              >
                <img src={item.image} alt="" className="mx-auto h-10 w-10" />
                <h3 className="my-3 font-display font-semibold">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-sm leading-6 text-secondary-500">
                  {item.content}
                </p>
              </li>
            ))}
            <li></li>
            <li className="rounded-xl bg-[#6FEFC1]/30 px-6 py-8 shadow-sm">
              <img
                src="./icon/product/helmet.svg"
                alt=""
                className="mx-auto h-10 w-10"
              />
              <h3 className="my-3 font-display font-semibold">
                Industry-specific Evidence
              </h3>
              <p className="mt-1.5 text-sm leading-6 text-secondary-500">
                Students get to see examples of industry-specific evidence
                requirements developed in consultation with industry experts
              </p>
            </li>
            <li className="rounded-xl bg-[#6FEFC1]/30 px-6 py-8 shadow-sm">
              <img
                src="./icon/product/report.svg"
                alt=""
                className="mx-auto h-10 w-10"
              />
              <h3 className="my-3 font-display font-semibold">Reporting</h3>
              <p className="mt-1.5 text-sm leading-6 text-secondary-500">
                There are various reporting capabilities for the RTO to ensure
                compliance with the Standards for Registered Training
                Organisations
              </p>
            </li>
            <li></li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default CardFeatures;
