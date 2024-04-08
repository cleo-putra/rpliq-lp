import React from "react";
import MarkTitle from "../MarkTitle";

const FeaturesContent = [
  {
    key: "1",
    title: "LLN Quiz",
    content: "Instant results with RPLiQ, bypassing manual marking.",
    image: "./icon/automation/spell-check.png",
  },
  {
    key: "2",
    title: "Enrolment",
    content: "Quick, accurate digital enrolment eliminates paperwork delays.",
    image: "./icon/automation/users.png",
  },
  {
    key: "3",
    title: "ID Documents",
    image: "./icon/automation/id-card.png",
    content: "Secure and fast online uploads.",
  },
  {
    key: "4",
    title: "Employment History",
    image: "./icon/automation/alarm-clock.png",
    content: "Streamlined digital submissions.",
  },
  {
    key: "5",
    title: "Referee Testimonials",
    image: "./icon/automation/law.png",
    content: "Quick digital signatures from employers.",
  },
  {
    key: "6",
    title: "Evidence Portfolio",
    image: "./icon/automation/briefcase.png",
    content:
      "RPLiQ's sample evidence ensures accurate uploads, enabling instant approval and slashing costs.",
  },
  {
    key: "7",
    title: "Statutory Declaration",
    image: "./icon/automation/contract.png",
    content:
      "If you RTO requires students to complete Statutory Declarations, RPLiQ enables online Stat Dec's",
  },
  {
    key: "8",
    title: "Certification",
    image: "./icon/automation/user-avatar.png",
    content: "Instant digital certificates available online.",
  },
];

const RplFeatures = () => {
  return (
    <>
      <div className="max-container padding-container mx-auto xs:pt-0 lg:my-16 xs:my-5 lg:pb-20 xs:pb-5">
        <div id="features" className="mx-auto max-w-6xl">
          <MarkTitle
            markText="Automation"
            subHead="Streamlining the RPL Process with RPLiQ's Online Platform"
          />
          <h5 className="mt-5 md:px-40 xs:px-5 mb-10 text-center">
            RPLiQ integrates the comprehensive steps of the RPL process into its
            online platform, ensuring a seamless and efficient experience for
            users. Here's how RPLiQ supports each critical phase:
          </h5>
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
          </ul>
        </div>
      </div>
    </>
  );
};

export default RplFeatures;
