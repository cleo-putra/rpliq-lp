import React from "react";
import CardRto from "@/components/Home/CardRto";
import Image from "next/image";
import PartnerSlider from "@/components/Home/PartnerSlider";

const page = () => {
  return (
    <>
      {/* Banner */}
      <div className="overflow-hidden bg-white py-24 sm:py-32 max-container padding-container">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-xl">
              <mark className="bg-green-30 p-4">RTO Solutions</mark>
              <h2 className="mt-6 text-[34px] font-bold text-green-50	leading-snug tracking-wide lg:max-w-lg">
                Discover the RTO Journey with RPLiQ
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Take the RTO Journey with RPLiQ and experience the difference it
                can make for your RTO. Understand why RPLiQ is essential for
                your operations.
              </p>

              <div className="lg:mt-6 sm:mt-2 flex justify-normal gap-4">
                <button className="flexCenter gap-3" type="button">
                  <label className="font-semibold whitespace-nowrap btn_dark_green lg:text-normal xs:text-xs">
                    Request a Free Demo
                  </label>
                </button>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <video controls loop autoPlay>
              <source src="/video/RTO.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>

      <PartnerSlider />

      {/* Step 1 */}
      <div className="bg-gradient-to-b from-[#eafaf4] to-white">
        <div className="overflow-hidden lg:py-24 xs:py-10 max-container padding-container">
          <div className="mx-auto grid max-w-2xl xs:grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-12 xs:pt-0">
              <div className="lg:max-w-xl">
                <h2 className="lg:text-[30px] xs:text-xl font-bold text-black-50">
                Dashboard Essentials
                </h2>
                <p className="mt-6 text-base leading-8 text-gray-600">
                The RPLiQ Dashboard is crafted to provide RTOs with a comprehensive view and management capabilities over their operations:
                </p>

                <dl className="my-4 max-w-xl space-y-2 text-base leading-7 text-gray-600 lg:max-w-none">
                  <div className="relative pl-9 ref">
                    <dt className="inline font-semibold text-gray-900">
                      <Image
                        src="/icon/rpl.png"
                        width={24}
                        height={24}
                        alt="Checklist"
                        className="absolute left-1 mt-1 top-1 h-5 w-6"
                      />
                    </dt>
                    <dd className="inline">
                    Student Enrolment: Easily track enrolments, optimising intake processes.
                    </dd>
                  </div>
                  <div className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <Image
                        src="/icon/rpl.png"
                        width={24}
                        height={24}
                        alt="Checklist"
                        className="absolute left-1 mt-1 top-1 h-5 w-6"
                      />
                    </dt>
                    <dd className="inline">
                    Student Snapshot: Gain immediate insights into students' progress for targeted support.
                    </dd>
                  </div>
                  <div className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <Image
                        src="/icon/rpl.png"
                        width={24}
                        height={24}
                        alt="Checklist"
                        className="absolute left-1 mt-1 top-1 h-5 w-6"
                      />
                    </dt>
                    <dd className="inline">
                    Course Activity: Assess course performance and identify areas for continuous improvement.
                    </dd>
                  </div>
                  <div className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <Image
                        src="/icon/rpl.png"
                        width={24}
                        height={24}
                        alt="Checklist"
                        className="absolute left-1 mt-1 top-1 h-5 w-6"
                      />
                    </dt>
                    <dd className="inline">
                    Assessor Overview: Manage assessor's efficiency increasing productivity & outcomes.
                    </dd>
                  </div>
                  <div className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <Image
                        src="/icon/rpl.png"
                        width={24}
                        height={24}
                        alt="Checklist"
                        className="absolute left-1 mt-1 top-1 h-5 w-6"
                      />
                    </dt>
                    <dd className="inline">
                    Revenue Insights: Define and itemise our revenue streams to identify the most profitable program and make business decisions.
                    </dd>
                  </div>
                </dl>

              </div>
            </div>
            <div className="flex justify-center items-center">
              <Image
                src="/dashboard-rto.png"
                width={768}
                height={470}
                alt="Product screenshot"
                className="rounded-x w-auto h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Step 2 */}
      <div className="bg-gradient-to-b from-white to-[#eafaf4]">
        <div className="overflow-hidden lg:py-24 xs:py-10 max-container padding-container">
          <div className="mx-auto grid max-w-2xl xs:grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="flex justify-center items-center md:order-first xs:order-last">
              <Image
                src="/dashboard-rto.png"
                width={768}
                height={470}
                alt="Product screenshot"
                className="rounded-x w-auto h-auto"
              />
            </div>
            <div className="lg:pr-8 lg:pt-12 xs:pt-0">
              <div className="lg:max-w-xl">
                <h2 className="lg:text-[30px] xs:text-xl font-bold text-black-50">
                  Manage Reports
                </h2>
                <p className="mt-6 text-base leading-8 text-gray-600">
                RPLiQ's 'Manage Reports' feature enables RTOs with the ability to populate various reports using our reporting tools for comprehensive oversight and compliance:
                </p>

                <dl className="my-4 max-w-xl space-y-2 text-base leading-7 text-gray-600 lg:max-w-none">
                  <div className="relative pl-9 ref">
                    <dt className="inline font-semibold text-gray-900">
                      <Image
                        src="/icon/rpl.png"
                        width={24}
                        height={24}
                        alt="Checklist"
                        className="absolute left-1 mt-1 top-1 h-5 w-6"
                      />
                    </dt>
                    <dd className="inline">
                    AVETMISS: RPLiQ reporting tools enables the RTO to populate the AVETMISS report at the click of a button, ready for submission.
                    </dd>
                  </div>
                  <div className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <Image
                        src="/icon/rpl.png"
                        width={24}
                        height={24}
                        alt="Checklist"
                        className="absolute left-1 mt-1 top-1 h-5 w-6"
                      />
                    </dt>
                    <dd className="inline">
                    Student Survey: RPLiQ enables RTOs to easily capture student feedback, meeting regulatory requirements and supporting quality assurance.
                    </dd>
                  </div>
                  <div className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <Image
                        src="/icon/rpl.png"
                        width={24}
                        height={24}
                        alt="Checklist"
                        className="absolute left-1 mt-1 top-1 h-5 w-6"
                      />
                    </dt>
                    <dd className="inline">
                    RTO Survey: Capture your employee feedback allowing you the opportunity to meet regulatory requirements and implement continuous improvements.
                    </dd>
                  </div>
                  <div className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <Image
                        src="/icon/rpl.png"
                        width={24}
                        height={24}
                        alt="Checklist"
                        className="absolute left-1 mt-1 top-1 h-5 w-6"
                      />
                    </dt>
                    <dd className="inline">
                    Annual Compliance: Stay up-to-date with your regulatory and compliance reporting obligations.
                    </dd>
                  </div>
                  <div className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <Image
                        src="/icon/rpl.png"
                        width={24}
                        height={24}
                        alt="Checklist"
                        className="absolute left-1 mt-1 top-1 h-5 w-6"
                      />
                    </dt>
                    <dd className="inline">
                    Course Revenue: Monitor course financial performance, crucial for strategic financial management.
                    </dd>
                  </div>
                </dl>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Step 3 */}
      <div className="bg-gradient-to-b from-[#eafaf4] to-white">
        <div className="overflow-hidden lg:py-24 xs:py-10 max-container padding-container">
          <div className="mx-auto grid max-w-2xl xs:grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-12 xs:pt-0">
              <div className="lg:max-w-xl">
                <h2 className="lg:text-[30px] xs:text-xl font-bold text-black-50">
                Manage Students
                </h2>
                <p className="mt-6 text-base leading-8 text-gray-600">
                RPLiQ provides your RTO with a "manage students" view to gain oversight over course administration and assessment processes.
                </p>

                <dl className="my-4 max-w-xl space-y-2 text-base leading-7 text-gray-600 lg:max-w-none">
                  <div className="relative pl-9 ref">
                    <dt className="inline font-semibold text-gray-900">
                      <Image
                        src="/icon/rpl.png"
                        width={24}
                        height={24}
                        alt="Checklist"
                        className="absolute left-1 mt-1 top-1 h-5 w-6"
                      />
                    </dt>
                    <dd className="inline">
                    Students: Seamlessly access and manage student details, from enrolment to course progression, through to completion all in one place.
                    </dd>
                  </div>
                  <div className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <Image
                        src="/icon/rpl.png"
                        width={24}
                        height={24}
                        alt="Checklist"
                        className="absolute left-1 mt-1 top-1 h-5 w-6"
                      />
                    </dt>
                    <dd className="inline">
                    Approvals: Efficiently handle assessment outcomes, with the ability to approve or provide feedback on assessor submissions.
                    </dd>
                  </div>
                </dl>

              </div>
            </div>
            <div className="flex justify-center items-center">
              <Image
                src="/dashboard-rto.png"
                width={768}
                height={470}
                alt="Product screenshot"
                className="rounded-x w-auto h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Step 4 */}
      <div className="bg-gradient-to-b from-white to-[#eafaf4]">
        <div className="overflow-hidden lg:py-24 xs:py-10 max-container padding-container">
          <div className="mx-auto grid max-w-2xl xs:grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="flex justify-center items-center md:order-first xs:order-last">
              <Image
                src="/dashboard-rto.png"
                width={768}
                height={470}
                alt="Product screenshot"
                className="rounded-x w-auto h-auto"
              />
            </div>
            <div className="lg:pr-8 lg:pt-12 xs:pt-0">
              <div className="lg:max-w-xl">
                <h2 className="lg:text-[30px] xs:text-xl font-bold text-black-50">
                Manage Assessors
                </h2>
                <p className="mt-6 text-base leading-8 text-gray-600">
                The 'Manage Assessors' feature in RPLiQ facilitates optimal coordination and oversight of your assessing team:
                </p>

                <dl className="my-4 max-w-xl space-y-2 text-base leading-7 text-gray-600 lg:max-w-none">
                  <div className="relative pl-9 ref">
                    <dt className="inline font-semibold text-gray-900">
                      <Image
                        src="/icon/rpl.png"
                        width={24}
                        height={24}
                        alt="Checklist"
                        className="absolute left-1 mt-1 top-1 h-5 w-6"
                      />
                    </dt>
                    <dd className="inline">
                    Assessor Profiles: Easily access and review detailed profiles of each assessor, including qualifications and areas of expertise.
                    </dd>
                  </div>
                  <div className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <Image
                        src="/icon/rpl.png"
                        width={24}
                        height={24}
                        alt="Checklist"
                        className="absolute left-1 mt-1 top-1 h-5 w-6"
                      />
                    </dt>
                    <dd className="inline">
                    Allocation Portfolio: Monitor and allocate assessors to courses and students, ensuring a balanced distribution of tasks.
                    </dd>
                  </div>
                </dl>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Step 5 */}
      <div className="bg-gradient-to-b from-[#eafaf4] to-white">
        <div className="overflow-hidden lg:py-24 xs:py-10 max-container padding-container">
          <div className="mx-auto grid max-w-2xl xs:grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-12 xs:pt-0">
              <div className="lg:max-w-xl">
                <h2 className="lg:text-[30px] xs:text-xl font-bold text-black-50">
                  Manage Courses
                </h2>
                <p className="mt-6 text-base leading-8 text-gray-600">
                RPLiQ's 'Manage Courses' view makes handling course details straightforward and effective:
                </p>

                <dl className="my-4 max-w-xl space-y-2 text-base leading-7 text-gray-600 lg:max-w-none">
                  <div className="relative pl-9 ref">
                    <dt className="inline font-semibold text-gray-900">
                      <Image
                        src="/icon/rpl.png"
                        width={24}
                        height={24}
                        alt="Checklist"
                        className="absolute left-1 mt-1 top-1 h-5 w-6"
                      />
                    </dt>
                    <dd className="inline">
                    Qualifications Tab: Here, you can see student lists, tweak courses, enrol students, or turn off courses as needed.
                    </dd>
                  </div>
                  <div className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <Image
                        src="/icon/rpl.png"
                        width={24}
                        height={24}
                        alt="Checklist"
                        className="absolute left-1 mt-1 top-1 h-5 w-6"
                      />
                    </dt>
                    <dd className="inline">
                    Course Enrolments Tab: This enables you to view courses, make changes, copy courses for more qualifications to offer, add assessors, or remove courses entirely.
                    </dd>
                  </div>
                  
                </dl>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <Image
                src="/dashboard-rto.png"
                width={768}
                height={470}
                alt="Product screenshot"
                className="rounded-x w-auto h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      <CardRto />
    </>
  );
};

export default page;
