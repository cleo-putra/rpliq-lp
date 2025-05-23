"use client";
import { Collapse } from "antd";

const items = [
  {
    key: "1",
    label: "Enrol",
    children:
      "RPLiQ automates the enrolment process, significantly reducing administrative requirements accelerating the student journey from start to finish.",
  },
  {
    key: "2",
    label: "Qualify",
    children:
      "RTOs can easily customise documentation requirements based on industry specific requirements, ensuring that evidence portfolios remain aligned with the latest standards and training package requirements. ",
  },
  {
    key: "3",
    label: "Certify",
    children:
      "RPLiQ provides certification feature, allowing RTOs to issue digital certificates instantly.",
  },
];

const AchieveRpl = () => {
  
  return (
    <div className="bg-white lg:py-24 xs:py-10 padding-container">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="lg:mt-12 xs:mt-0 lg:text-2xl font-bold tracking-tight text-gray-900 xs:text-2xl">
                RPL: Streamlined | Simplified | Online
              </p>

              <div className="mt-5">
                <Collapse
                  items={items}
                  bordered={false}
                  defaultActiveKey={["1"]}
                  size="large"
                  expandIcon={({ isActive }) => (
                    <img
                      src={
                        isActive ? "./icon/rpl.png" : "./icon/zoom-white.png"
                      }
                      className="w-[15px] h-[15px]"
                    />
                  )}
                />
              </div>
            </div>
          </div>
          <img
            src="/rpl-laptop-1.jpg"
            alt="Product screenshot"
            className="w-[48rem] max-w-none sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width="2432"
            height="1442"
          />
        </div>
      </div>
    </div>
  );
};

export default AchieveRpl;
