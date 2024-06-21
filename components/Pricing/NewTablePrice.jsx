import React from "react";
import Check from "./Check";

const NewTablePrice = () => {
  return (
    <div className="bg-gray-10 my-20 py-20">
      <div className="max-container padding-container mx-auto">
        <h3 className="text-3xl font-bold text-center">
          Compare Our Pricing Plans{" "}
        </h3>
        <p className="mt-5 text-center">
          Our pricing structure is tailored to accommodate the unique
          requirements of each RTO, <br />
          ensuring that you only pay for the features and capabilities that
          align with your operational needs.
        </p>
        <section className="text-gray-700 body-font overflow-hidden border-t border-gray-200 lg:mt-20 xs:mt-6">
          <div className="container px-5 py-10 mx-auto flex flex-wrap">
            <div className="flex w-full flex-wrap lg:border border-gray-300 rounded-lg">
              {/* col 1 */}
              <div className="lg:w-1/3 lg:mt-px w-full mb-10 lg:mb-0 border-2 border-gray-300 lg:border-none rounded-lg lg:rounded-none">
                <div className="px-2 text-center h-20 flex flex-col items-center justify-center bg-white">
                  <h3 className="font-bold text-xl pt-4">Fixed</h3>
                </div>
                <p className="bg-gray-100 text-gray-600 h-12 px-2 flex items-center -mt-px border-t border-gray-300 font-bold">
                  RPL (Student Access)
                </p>
                <div className="p-4 bg-white">
                  <p className="text-gray-600 my-2 px-2 flex -mt-px text-sm">
                    <Check />
                    LLN
                  </p>
                  <p className="text-gray-600 my-2 px-2 flex -mt-px text-sm">
                    <Check />
                    Enrolment
                  </p>
                  <p className="text-gray-600 my-2 px-2 flex -mt-px text-sm">
                    <Check />
                    ID Verification
                  </p>
                  <p className="text-gray-600 my-2 px-2 flex -mt-px text-sm">
                    <Check />
                    Employment History
                  </p>

                  <p className="text-gray-600 my-2 px-2 flex -mt-px text-sm">
                    <Check />
                    Referee Testimonial
                  </p>

                  <p className="text-gray-600 my-2 px-2 flex -mt-px text-sm">
                    <Check />
                    Evidence Portfolio
                  </p>

                  <p className="text-gray-600 my-2 px-2 flex -mt-px text-sm">
                    <Check />
                    Statutory Declaration
                  </p>

                  <p className="text-gray-600 my-2 px-2 flex -mt-px text-sm">
                    <Check />
                    Certificates
                  </p>
                </div>

                <p className="bg-gray-100 text-gray-600 h-12 px-2 flex items-center -mt-px border-t border-gray-300 font-bold">
                  Assessor
                </p>
                <div className="p-4 bg-white">
                  <p className="text-gray-600 my-2 px-2 flex -mt-px text-sm">
                    <Check />
                    Student Assessment
                  </p>
                  
                  <div className="h-[270px]" />
                </div>

                <p className="bg-gray-100 text-gray-600 h-12 px-2 flex items-center -mt-px border-t border-gray-300 font-bold">
                  RTO Access
                </p>
                <div className="p-4 bg-white">
                  <p className="text-gray-600 my-2 px-2 flex -mt-px text-sm">
                    <Check />
                    Accounts
                  </p>
                  <p className="text-gray-600 my-2 px-2 flex -mt-px text-sm">
                    <Check />
                    Manage Assessors
                  </p>
                  <p className="text-gray-600 my-2 px-2 flex -mt-px text-sm">
                    <Check />
                    Manage Students
                  </p>
                  <p className="text-gray-600 my-2 px-2 flex -mt-px text-sm">
                    <Check />
                    Manage Student Support
                  </p>
                  
                  <p className="text-gray-600 my-2 px-2 flex -mt-px text-sm">
                    <Check />
                    Online Certiticate Issuance
                  </p>
                  
                  <div className="h-[140px]" />
                </div>

                <div className="bg-white border-t border-gray-300 p-6 text-center rounded-bl-lg">
                  <button className="flexCenter mx-auto" type="button">
                    <label className="font-bold btn_black_white text-xs">
                      Start Trial
                    </label>
                  </button>
                </div>
              </div>
              {/* col 2 */}
              <div className="lg:w-1/3 lg:-mt-px w-full mb-10 lg:mb-0 border-2 rounded-lg border-indigo-500 relative bg-green-50">
                <div className="text-center h-20 flex flex-col items-center justify-center">
                  <img
                    src="./best-pricing.png"
                    className="mx-auto relative"
                    style={{ zIndex: "99", top: "-35px" }}
                  />
                  <h3
                    className="font-bold text-xl relative"
                    style={{ zIndex: "99", top: "-25px" }}
                  >
                    Premium
                  </h3>
                </div>
                <p className="bg-[#000000] text-white h-12 px-2 flex items-center -mt-px border-t border-gray-300 font-bold">
                  RPL (Student Access)
                </p>

                <div className="p-4 bg-green-50">
                  <p className="text-gray-600 my-2 px-2 flex -mt-px text-sm">
                    <Check />
                    LLN
                  </p>
                  <p className="text-gray-600 my-2 px-2 flex -mt-px text-sm">
                    <Check />
                    Enrolment
                  </p>
                  <p className="text-gray-600 my-2 px-2 flex -mt-px text-sm">
                    <Check />
                    ID Verification
                  </p>
                  <p className="text-gray-600 my-2 px-2 flex -mt-px text-sm">
                    <Check />
                    Employment History
                  </p>

                  <p className="text-gray-600 my-2 px-2 flex -mt-px text-sm">
                    <Check />
                    Referee Testimonial
                  </p>

                  <p className="text-gray-600 my-2 px-2 flex -mt-px text-sm">
                    <Check />
                    Evidence Portfolio
                  </p>

                  <p className="text-gray-600 my-2 px-2 flex -mt-px text-sm">
                    <Check />
                    Statutory Declaration
                  </p>

                  <p className="text-gray-600 my-2 px-2 flex -mt-px text-sm">
                    <Check />
                    Certificates
                  </p>
                </div>

                <p className="bg-[#000000] text-white h-12 px-2 flex items-center -mt-px border-t border-gray-300 font-bold">
                  Assessor
                </p>

                <div className="p-4 bg-green-50">
                  <p className="text-gray-600 my-2 px-2 flex -mt-px text-sm">
                    <Check />
                    Student Assessment
                  </p>
                  <p className="text-gray-600 my-2 px-2 flex -mt-px text-sm">
                    <Check />
                    Trainer File & Compliance Tools
                  </p>
                  <p className="text-gray-600 my-2 px-2 flex -mt-px text-sm">
                    <Check />
                    Assessor Current Qualification
                  </p>
                  <p className="text-gray-600 my-2 px-2 flex -mt-px text-sm">
                    <Check />
                    Industry Licensign | Accreditations
                  </p>

                  <p className="text-gray-600 my-2 px-2 flex -mt-px text-sm">
                    <Check />
                    VET & Industry Currency
                  </p>

                  <p className="text-gray-600 my-2 px-2 flex -mt-px text-sm">
                    <Check />
                    VET & Industry PD
                  </p>

                  <p className="text-gray-600 my-2 px-2 flex -mt-px text-sm">
                    <Check />
                    Trainer Qualification Unit Mapping
                  </p>

                  <p className="text-gray-600 my-2 px-2 flex -mt-px text-sm">
                    <Check />
                    Trainers & Assessor Matrix
                  </p>
                  <div className="h-[80px]" />
                </div>

                <p className="bg-[#000000] text-white h-12 px-2 flex items-center -mt-px border-t border-gray-300 font-bold">
                  RTO Access
                </p>

                <div className="p-4 bg-green-50">
                  <p className="text-gray-600 my-2 px-2 flex -mt-px text-sm">
                    <Check />
                    Accounts
                  </p>
                  <p className="text-gray-600 my-2 px-2 flex -mt-px text-sm">
                    <Check />
                    Manage Assessors
                  </p>
                  <p className="text-gray-600 my-2 px-2 flex -mt-px text-sm">
                    <Check />
                    Manage Students
                  </p>
                  <p className="text-gray-600 my-2 px-2 flex -mt-px text-sm">
                    <Check />
                    Manage Student Support
                  </p>

                  <p className="text-gray-600 my-2 px-2 flex -mt-px text-sm">
                    <Check />
                    Online Certificate Issuance
                  </p>

                  <div className="h-[140px]" />
                

                </div>

                <div className="p-6 text-center border-t border-gray-300">
                  <button className="flexCenter mx-auto" type="button">
                    <label className="font-bold btn_black_white text-xs">
                      Start Trial
                    </label>
                  </button>
                </div>
              </div>
              {/* col 3 */}
              <div className="lg:w-1/3 w-full lg:mt-px border-2 border-gray-300 lg:border-none rounded-lg lg:rounded-none bg-[#eafaf4]">
                <div className="px-2 text-center h-20 flex flex-col items-center justify-center">
                  <h3 className="font-bold text-xl pt-4">Enterprise</h3>
                </div>

                <p className="bg-white h-12 px-2 flex items-center -mt-px border-t border-gray-300 font-bold">
                  RPL (Student Access)
                </p>

                <div className="p-4 bg-[#eafaf4]">
                  <p className="text-gray-600 my-2 px-2 flex -mt-px text-sm">
                    <Check />
                    LLN
                  </p>
                  <p className="text-gray-600 my-2 px-2 flex -mt-px text-sm">
                    <Check />
                    Enrolment
                  </p>
                  <p className="text-gray-600 my-2 px-2 flex -mt-px text-sm">
                    <Check />
                    ID Verification
                  </p>
                  <p className="text-gray-600 my-2 px-2 flex -mt-px text-sm">
                    <Check />
                    Employment History
                  </p>

                  <p className="text-gray-600 my-2 px-2 flex -mt-px text-sm">
                    <Check />
                    Referee Testimonial
                  </p>

                  <p className="text-gray-600 my-2 px-2 flex -mt-px text-sm">
                    <Check />
                    Evidence Portfolio
                  </p>

                  <p className="text-gray-600 my-2 px-2 flex -mt-px text-sm">
                    <Check />
                    Statutory Declaration
                  </p>

                  <p className="text-gray-600 my-2 px-2 flex -mt-px text-sm">
                    <Check />
                    Certificates
                  </p>
                </div>

                <p className="bg-white h-12 px-2 flex items-center -mt-px border-t border-gray-300 font-bold">
                  Assessor
                </p>

                <div className="p-4 bg-[#eafaf4]">
                  <p className="text-gray-600 my-2 px-2 flex -mt-px text-sm">
                    <Check />
                    Student Assessment
                  </p>
                  <p className="text-gray-600 my-2 px-2 flex -mt-px text-sm">
                    <Check />
                    Trainer File & Compliance Tools
                  </p>
                  <p className="text-gray-600 my-2 px-2 flex -mt-px text-sm">
                    <Check />
                    Assessor Current Qualification
                  </p>
                  <p className="text-gray-600 my-2 px-2 flex -mt-px text-sm">
                    <Check />
                    Industry Licensign | Accreditations
                  </p>

                  <p className="text-gray-600 my-2 px-2 flex -mt-px text-sm">
                    <Check />
                    VET & Industry Currency
                  </p>

                  <p className="text-gray-600 my-2 px-2 flex -mt-px text-sm">
                    <Check />
                    VET & Industry PD
                  </p>

                  <p className="text-gray-600 my-2 px-2 flex -mt-px text-sm">
                    <Check />
                    Trainer Qualification Unit Mapping
                  </p>

                  <p className="text-gray-600 my-2 px-2 flex -mt-px text-sm">
                    <Check />
                    Trainers & Assessor Matrix
                  </p>

                  <p className="text-gray-600 my-2 px-2 flex -mt-px text-sm">
                    <Check />
                    Assessment Compliance Tools
                  </p>

                  <p className="text-gray-600 my-2 px-2 flex -mt-px text-sm">
                    <Check />
                    Assessment Validations
                  </p>

                  <p className="text-gray-600 my-2 px-2 flex -mt-px text-sm">
                    <Check />
                    Assessment Moderations
                  </p>
                </div>

                <p className="bg-white h-12 px-2 flex items-center -mt-px border-t border-gray-300 font-bold">
                  RTO Access
                </p>

                <div className="p-4 bg-[#eafaf4]">
                  <p className="text-gray-600 my-2 px-2 flex -mt-px text-sm">
                    <Check />
                    Accounts
                  </p>
                  <p className="text-gray-600 my-2 px-2 flex -mt-px text-sm">
                    <Check />
                    Manage Assessors
                  </p>
                  <p className="text-gray-600 my-2 px-2 flex -mt-px text-sm">
                    <Check />
                    Manage Students
                  </p>
                  <p className="text-gray-600 my-2 px-2 flex -mt-px text-sm">
                    <Check />
                    Manage Student Support
                  </p>

                  <p className="text-gray-600 my-2 px-2 flex -mt-px text-sm">
                    <Check />
                    Online Certificate Issuance
                  </p>

                  <p className="text-gray-600 my-2 px-2 flex -mt-px text-sm">
                    <Check />
                    Manage Reports
                  </p>

                  <p className="text-gray-600 my-2 px-2 flex -mt-px text-sm">
                    <Check />
                    AVETMISS
                  </p>

                  <p className="text-gray-600 my-2 px-2 flex -mt-px text-sm">
                    <Check />
                    Regulatory Survey Requirements
                  </p>

                  <p className="text-gray-600 my-2 px-2 flex -mt-px text-sm">
                    <Check />
                    Annual Declarations & Compliance
                  </p>

                  <p className="text-gray-600 my-2 px-2 flex -mt-px text-sm">
                    <Check />
                    Revenue Data
                  </p>

                </div>

                <div className="p-6 text-center border-t border-gray-300">
                  <button className="flexCenter mx-auto" type="button">
                    <label className="font-bold btn_black_white text-xs">
                      Start Trial
                    </label>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default NewTablePrice;
