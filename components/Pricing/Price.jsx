import React from "react";

const Price = () => {
  return (
    <div className="mx-auto px-6 lg:mt-20 xs:mt-0">
      <section className="mb-32">
        <div className="grid px-6 md:px-12 lg:grid-cols-3 xl:px-32">
          <div className="p-0 py-12 lg:order-1 xs:order-2">
            <div className="block h-full rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 lg:rounded-tr-none lg:rounded-br-none bg-green-30">
              <div className="p-6 text-center">
                <h3 className="mb-2 text-xl uppercase">
                  <strong>Fixed</strong>
                </h3>
                <p className="mb-6 text-sm px-10 font-light">
                  For training organisations who just getting started with
                  project management.
                </p>
                <h3 className="mb-6 text-3xl">
                  <strong>$ 150</strong>
                  <br />
                  <small className="text-base">Per student, Per course</small>
                </h3>

                <button className="flexCenter mx-auto" type="button">
                  <label className="bold-16 btn_white_green text-xs">
                    Start Free Trial
                  </label>
                </button>
              </div>
              <div className="p-6">
                <p className="mb-6 font-light">All you need to get started:</p>

                <ol className="list-inside">
                  <li className="mb-4 flex">
                    <img className="w-6 h-5 mr-2" src="./icon/rpl-black.png" />
                    Retain Records For Six Months
                  </li>
                  <li className="mb-4 flex">
                    <img className="w-6 h-5 mr-2" src="./icon/rpl-black.png" />
                    Access To The RPLiQ Platform
                  </li>
                  <li className="mb-4 flex">
                    <img className="w-6 h-5 mr-2" src="./icon/rpl-black.png" />
                    User-Friendly Interface
                  </li>

                  <li className="mb-4 flex">
                    <img className="w-6 h-5 mr-2" src="./icon/rpl-black.png" />
                    Document Upload And Submission
                  </li>

                  <li className="mb-4 flex">
                    <img className="w-6 h-5 mr-2" src="./icon/rpl-black.png" />
                    Real-Time Progress Tracking
                  </li>
                  <li className="mb-4 flex">
                    <img className="w-6 h-5 mr-2" src="./icon/rpl-black.png" />
                    Quality Assurance Features
                  </li>
                </ol>
              </div>
            </div>
          </div>

          <div
            className="block h-full rounded-lg bg-green-50 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 lg:order-2 xs:order-first"
            style={{ zIndex: "1" }}
          >
            <img
              src="./best-pricing.png"
              className="mx-auto relative"
              style={{ zIndex: "99", top: "-35px" }}
            />
            <div className="text-center">
              <h3 className="mb-4 text-xl uppercase">
                <strong>Premium</strong>
              </h3>
              <p className="mb-6 text-sm px-10 font-light">
                For bigger training organisations that require more advanced
                system.
              </p>
              <h3 className="mb-6 text-3xl">
                <strong>$ 250</strong>
                <br />
                <small className="text-base">Per student, Per course</small>
              </h3>

              <button className="flexCenter mx-auto" type="button">
                <label className="bold-16 btn_black_white text-xs">
                  Start Free Trial
                </label>
              </button>
            </div>
            <div className="p-6">
              <p className="mb-6 font-light">All Basic features, plus:</p>

              <ol className="list-inside">
                <li className="mb-4 flex">
                  <img className="w-6 h-5 mr-2" src="./icon/rpl-black.png" />
                  Custom branding
                </li>
                <li className="mb-4 flex">
                  <img className="w-6 h-5 mr-2" src="./icon/rpl-black.png" />
                  Advanced compliance reporting
                </li>
                <li className="mb-4 flex">
                  <img className="w-6 h-5 mr-2" src="./icon/rpl-black.png" />
                  Comprehensive support, including chat and email
                </li>
              </ol>
            </div>
          </div>

          <div className="py-12 order-3">
            <div className="block h-full rounded-lg bg-green-30 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 lg:rounded-tl-none lg:rounded-bl-none">
              <div className="p-6 text-center">
                <h3 className="mb-4 text-xl uppercase">
                  <strong>Enterprise</strong>
                </h3>
                <p className="mb-6 text-sm px-10 font-light">
                  For training organisations that need additional support and
                  more complex requirements.
                </p>
                <h3 className="mb-6 text-xl">
                  <strong>Available Upon Request!</strong>
                </h3>

                <button className="flexCenter mx-auto" type="button">
                  <label className="bold-16 btn_white_green text-xs">
                    Request Pricing
                  </label>
                </button>
              </div>
              <div className="p-6">
                <p className="mb-6 font-light">
                  Basic & Premium features, plus:
                </p>
                <ol className="list-inside">
                  <li className="mb-4 flex">
                    <img className="w-6 h-5 mr-2" src="./icon/rpl-black.png" />
                    High-level training and support
                  </li>
                  <li className="mb-4 flex">
                    <img className="w-6 h-5 mr-2" src="./icon/rpl-black.png" />
                    Custom reporting and tracking capabilities
                  </li>
                  <li className="mb-4 flex">
                    <img className="w-6 h-5 mr-2" src="./icon/rpl-black.png" />
                    Tailored compliance solutions
                  </li>
                  <li className="mb-4 flex">
                    <img className="w-6 h-5 mr-2" src="./icon/rpl-black.png" />
                    Integration with existing systems
                  </li>
                  <li className="mb-4 flex">
                    <img className="w-6 h-5 mr-2" src="./icon/rpl-black.png" />
                    Dedicated account manager
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Price;
