"use client";
import { Collapse } from "antd";

const items = [
  {
    key: "1",
    label: "Dashboards",
    children:
      "Custom interfaces for efficient management and oversight.",
  },
  {
    key: "2",
    label: "Evidence Flexibility",
    children:
      "Accepts all formats from any device, ensuring seamless competency demonstration online.",
  },
  {
    key: "3",
    label: "Analytics",
    children:
      "Offers real-time data for informed decisions and improvements for students, assessors & RTO's.",
  },
  {
    key: "4",
    label: "Security",
    children:
      "Ensures top-tier protection for all user data.",
  },
];

const CuttingEdge = () => {
 
  return (
    <div className="bg-white lg:py-24 xs:py-10 padding-container">
      <div className="mx-auto max-w-7xl">
        <div className="grid sm:grid-cols-1 lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="lg:mt-12 xs:mt-0 lg:text-2xl font-bold tracking-tight text-gray-900 xs:text-2xl">
              RPLiQ's Cutting-Edge Features: Automation, Flexibility, and Security
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

export default CuttingEdge;
