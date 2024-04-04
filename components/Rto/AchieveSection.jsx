import React from "react";
import { Card } from "antd";
import Image from "next/image";

const dataJourney = [
  {
    key: "1",
    title: "Pre-Enrolment Student Journey",
    points: [
      {
        key: "1",
        subtitle: "Marketing and Recruitment",
        desc: "Your RTO will be able to showcase its RPL program to its students and how achievable it is prior to enrolment adhering to regulatory standards.",
      },
      {
        key: "2",
        subtitle: "Enrolment including the LLN",
        desc: "RPLiQ automates the enrolment process to be completed online following the student completing their online LLN assessment which instantly produces the student outcome.",
      },
    ],
  },
  {
    key: "2",
    title: "Post-Enrolment Student Journey",
    points: [
      {
        key: "1",
        subtitle: "Support and Progression",
        desc: "RPLiQ enables your RTO, the assessors and the employer to achieve the regulatory student support and progression throughout their RPL journey.",
      },
      {
        key: "2",
        subtitle: "Evidence & Assessment",
        desc: "By using RPLiQ, the evidence and assessment mimic the training package assessment requirements including the packaging rules, and each unit of competency element and performance criteria.",
      },
    ],
  },
  {
    key: "3",
    title: "Completion",
    points: [
      {
        key: "1",
        subtitle: "Certificate Issuance",
        desc: "Your RTO will have the peace of mind knowing that each student has met the training package assessment requirements prior to the issuance of any AQF certificates.",
      },
      {
        key: "2",
        subtitle: "Student Feedback",
        desc: "This will be the perfect opportunity for you to receive feedback from your students and adopting RPLiQ as your RPL assessment management system.",
      },
    ],
  },
];

const AchieveSection = () => {
  return (
    <div className="bg-gradient-to-b from-[#eafaf4] to-white flex">
      <div className="max-container padding-container py-8 grid max-w-2xl grid-cols-1">
        <h3 className="mt-6 text-3xl font-bold text-center">
          {" "}
          How can an RTO achieve compliance throughout the student journey?
        </h3>
        <h5 className="mt-5 md:px-40 xs:px-5 mb-10 text-center">
          RPLiQ has been designed with a compliance-first mindset in the
          ever-evolving regulatory environment in which RTOs operate. This
          includes the new audit approach the regulator is adopting with
          particular emphasis on the student journey.
        </h5>

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
                    <div className="relative pl-9 mt-5" key={item.key}>
                      <dt className="inline">
                        <Image
                          src="/icon/rpl.png"
                          width={24}
                          height={24}
                          alt="Checklist"
                          className="absolute left-1 top-1 h-5 w-6"
                        />
                      </dt>
                      <dd className="inline text-md">{point.subtitle}</dd>
                      <br />
                      <br />
                      <dd className="inline text-md">{point.desc}</dd>
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

export default AchieveSection;
