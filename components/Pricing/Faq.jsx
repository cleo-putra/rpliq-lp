"use client";
import { Collapse } from "antd";

const items = [
  {
    key: "1",
    label: "Can RPLiQ be customised to meet the specific needs of our RTOs?",
    children:
      "Absolutely! RPLiQ is built with customisation in mind. RTOs can tailor documentation templates, set dynamic evidence requirements, customize dashboards, and define user roles, ensuring the platform aligns perfectly with the unique requirements of each organisation.",
  },
  {
    key: "2",
    label: "How does RPLiQ ensure compliance with ASQA standards?",
    children:
      "The platform is built with a meticulous focus on ASQA regulations, aligning its design, templates, and workflows with the specific standards set by the authority. RPL iQ offers customizable templates that adhere to ASQA requirements, ensuring that documentation meets the necessary criteria.",
  },
  {
    key: "3",
    label: "What features does RPLiQ offer to enhance the student experience?",
    children:
      "The platform enables students to upload evidence seamlessly based on sample industry-specific evidence, enabling the students the the opportunity to showcase their skills and competencies. Students will receive real-time notifications to keep them informed about the status of their assessments, providing transparency and reducing uncertainty.",
  },
];

const Faq = () => {
  return (
    <div className="bg-gradient-to-b from-[#eafaf4] to-white">
      <div className="max-container padding-container py-8">
        <p className="text-center lg:mt-4 xs:mt-0 md:text-2xl px-5 xs:text-lg font-semibold tracking-tight text-gray-900 sm:text-2xl">
          Frequently Asked Questions
        </p>

        <div className="mt-10">
          <Collapse
            items={items}
            bordered={false}
            defaultActiveKey={["1"]}
            style={{ margin: "10px" }}
            size="large"
            expandIcon={({ isActive }) => (
              <img
                src={isActive ? "./icon/rpl.png" : "./icon/zoom-white.png"}
                className="lg:w-[20px] lg:h-[20px] xs:w-auto xs:h-auto"
              />
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default Faq;
