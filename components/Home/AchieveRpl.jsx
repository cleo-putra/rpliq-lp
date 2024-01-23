"use client";
import { Collapse } from "antd";

const items = [
  {
    key: "1",
    label: "Enrol",
    children:
      "By using RPL iQ as your RPL student management system, you’ll reduce your admin cost, increase your assessor’s productivity and efficiency and accelerate the RPL journey for your students in real time. ",
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
      "RPL iQ automates and streamlines the workflow, ensuring streamlined student-assessor interaction and assessment in real-time ready for the issuance of certificates.",
  },
];

const AchieveRpl = () => {
  function createMarkup() {
    return {
      __html:
        '<img src="https://cdn.sstatic.net/Sites/stackoverflow/Img/apple-touch-icon.png?v=c78bd457575a" /> abc',
    };
  }
  return (
    <div className="bg-white lg:py-24 xs:py-10 padding-container">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="lg:mt-12 xs:mt-0 lg:text-3xl font-bold tracking-tight text-gray-900 xs:text-2xl">
                How RPL iQ Accelerate The RPL Process
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
