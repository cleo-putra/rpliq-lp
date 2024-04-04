import React from "react";
import { Card } from "antd";
import Image from "next/image";

const dataJourney = [
  {
    key: "1",
    title: "Student Journey",
    points: [
      {
        key: "1",
        desc: "How fast your student enrolls",
      },
      {
        key: "2",
        desc: "Your course LLN completed & assessed online",
      },
      {
        key: "3",
        desc: "Pursue employer verification electronically & instantaneously",
      },
      {
        key: "4",
        desc: "Allow your students to collect evidence anytime anywhere",
      },
      {
        key: "5",
        desc: "Empower your students to directly communicate with the assessors",
      },
      {
        key: "6",
        desc: "Allow your students to receive assessment outcomes immediately",
      },
      {
        key: "7",
        desc: "Allow your students to communicate with other students",
      },
      {
        key: "8",
        desc: "Motivate your students to finish faster with course progress bars",
      },
    ],
  },
  {
    key: "2",
    title: "Assessor Journey",
    points: [
      {
        key: "1",
        desc: "Enable your assessor to assess multiple students",
      },
      {
        key: "2",
        desc: "Direct communication with the student",
      },
      {
        key: "3",
        desc: "Provide assessment judgements & outcome instantly to students with feedback",
      },
      {
        key: "4",
        desc: "Maintain a compliant assessor file including an automated trainer matrix",
      },
      {
        key: "5",
        desc: "Trainer matrix mapped per unit and digitally to the assessor's industry experience",
      },
      {
        key: "6",
        desc: "Reduce your assessment costs & increase your assessor's productivity",
      },
      {
        key: "7",
        desc: "Increased accountability and compliance with RTOs standards ",
      },
    ],
  },
  {
    key: "3",
    title: "Compliance & Reporting",
    points: [
      {
        key: "1",
        desc: "By using RPLiQ you will be able to accelerate the traditional RPL journey for your students",
      },
      {
        key: "2",
        desc: "No more student support, assessors traveling onsite, with RPLiQ, everything is online",
      },
      {
        key: "3",
        desc: "You can now visually see, how many training packages and how many students your assessor is assessing",
      },
      {
        key: "4",
        desc: "With RPLiQ you can identify how long is each student RPL takes",
      },
      {
        key: "5",
        desc: "Regulatory alignment to ensure adherence with industry standards",
      },
      {
        key: "6",
        desc: "An RPL AMS that offers all the reporting to ensure you always report on time",
      },
    ],
  },
];

const JourneySection = () => {
  return (
    <div className="bg-gradient-to-b from-[#eafaf4] to-white flex">
      <div className="max-container padding-container py-8 grid max-w-2xl grid-cols-1">
        <p className="text-center lg:mt-4 xs:mt-0 md:text-2xl px-5 xs:text-lg font-semibold tracking-tight text-gray-900 sm:text-2xl">
          Take control of your RTO's RPL journey by adopting RPLiQ's
          revolutionary platform
        </p>

        <div className="grid-cols-1 sm:grid md:grid-cols-3 ">
          {dataJourney.map((item) => (
            <div
              key={item.key}
              className="mx-3 mt-6 flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] sm:shrink-0 sm:grow sm:basis-0"
            >
              <div className="p-6">
                <h5 className="mb-2 text-xl font-bold leading-tight text-green-50">
                  {item.title}
                </h5>
                <div>
                  {item.points.map((point) => (
                    <div className="relative pl-9 mt-4" key={item.key}>
                      <dt className="inline">
                        <Image
                          src="/icon/rpl.png"
                          width={24}
                          height={24}
                          alt="Checklist"
                          className="absolute left-1 top-1 h-5 w-6"
                        />
                      </dt>
                      <dd className="inline text-md">
                        {point.desc}
                      </dd>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JourneySection;
