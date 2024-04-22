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
          <div className="lg:pr-8 lg:pt-4 flex items-center">
            <div className="lg:max-w-xl">
              <mark className="bg-green-30 p-4">Reporting</mark>
              <h2 className="mt-6 text-[34px] font-bold text-green-50	leading-snug tracking-wide lg:max-w-lg">
                Advanced Reporting with RPLiQ
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Unveil the power of RPLiQ’s reporting capabilities for students,
                assessors, and RTOs. Gain insights that drive success and
                compliance.
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
          <div className="">
            <Image
              src="/journey/reporting/main.png"
              width={768}
              height={470}
              alt="Product screenshot"
              className="rounded-x w-max h-max"
            />
          </div>
        </div>
      </div>

      {/* Step 1 */}
      <div className="bg-gradient-to-b from-[#eafaf4] to-white">
        <div className="overflow-hidden lg:py-24 xs:py-10 max-container padding-container">
          <div className="mx-auto grid max-w-2xl xs:grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-12 xs:pt-0">
              <div className="lg:max-w-xl">
                <h2 className="lg:text-[30px] xs:text-xl font-bold text-black-50">
                  Student Reporting Dashboard
                </h2>
                <p className="mt-6 text-base leading-8 text-gray-600">
                  RPLiQ's Student Reporting Dashboard is designed to simplify
                  study management, empowering students to effectively monitor
                  their progress and focus on success. It offers:
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
                      A comprehensive view of course enrolments for easy
                      tracking.
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
                      An organised list of tasks, highlighting what's due,
                      completed, and pending to monitor student course progress.
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
                      A schedule of important RPL deadlines and timelines to
                      keep students on track as they progress through the
                      course.
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
                      Insights into unit progress, motivating students to
                      progress through the course through to completion
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
                      Quality & assurance to conduct effective assessments and
                      mitigate regulatory compliance risks
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <Image
                src="/journey/reporting/student-report.png"
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
                src="/journey/reporting/ass-report.png"
                width={768}
                height={470}
                alt="Product screenshot"
                className="rounded-x w-auto h-auto"
              />
            </div>
            <div className="lg:pr-8 lg:pt-12 xs:pt-0">
              <div className="lg:max-w-xl">
                <h2 className="lg:text-[30px] xs:text-xl font-bold text-black-50">
                  Assessor Reporting Dashboard
                </h2>
                <p className="mt-6 text-base leading-8 text-gray-600">
                  RPLiQ designed the Assessor Reporting Dashboard to enable the
                  assessors with the ability to prioritise tasks and effectively
                  guide students as they progress with their course through
                  their RPL journey ensuring efficiency. This streamlines
                  assessors' workflow, providing:
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
                      Assessment Schedule: To ensure oversight over the various
                      stages of the RPL assessment journey, including
                      pre-enrolment, student progression and through to
                      completion.
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
                      Tasks Overview: Maximise assessor productivity and
                      efficiency by managing workflow and assessor tasks as
                      complete, due, or pending this will enable assessors to
                      multitask.
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
                      Student Feedback: This tool enables interaction between
                      students and assessors raising alerts for feedback
                      awaiting action and allowing assessors to provide feedback
                      to students on assessment outcomes or support to student
                      to ensure course progression.
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
                      Current Student Assessments: Offers insights into the
                      volume of student an assessors is handling, aiding in time
                      management.
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
                      Student Assessment Progress: Provides an overview of
                      students course progress so assessors can identify where
                      extra support may be needed by the student.
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
                  RTO Reporting Dashboard
                </h2>
                <p className="mt-6 text-base leading-8 text-gray-600">
                  The RTO Reporting Dashboard is dynamic, the RTO has the
                  ability to view all level of users including student and
                  assessor, as well as other key operational metrics, these
                  include:
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
                      Enrolment Summary: Provides a snapshot of student
                      enrolments and popular courses.
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
                      Student Snapshot: Student course progression through their
                      RPL journey till completion.
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
                      Course Activity: Student course progression to determine
                      student completion rate.
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
                      Assessor Activity: Identify, active vs. inactive
                      assessors, their accreditation, workload to determine
                      productivity and resource management.
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
                      Financial Overview: Summarises RTO revenue generated
                      through RPLiQ and tracks overdue payments.
                    </dd>
                  </div>
                </dl>

                <p className="mt-6 text-base leading-8 text-gray-600">
                  This dashboard serves as a powerful tool for RTOs to monitor
                  educational delivery and financial health with ease.
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <Image
                src="/journey/reporting/rto-report.png"
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
                src="/journey/reporting/special-report.png"
                width={768}
                height={470}
                alt="Product screenshot"
                className="rounded-x w-auto h-auto"
              />
            </div>
            <div className="lg:pr-8 lg:pt-12 xs:pt-0">
              <div className="lg:max-w-xl">
                <h2 className="lg:text-[30px] xs:text-xl font-bold text-black-50">
                  Specialised Reports for RTOs
                </h2>
                <p className="mt-6 text-base leading-8 text-gray-600">
                  RPLiQ’s provides essential tools and reports for complete
                  compliance and financial insight:
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
                      AVETMISS: Enables RTOs to produce the necessary AVETMISS
                      report for compliance, streamlining the process of meeting
                      national regulatory standards.
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
                      Course Revenue Report: Offers detailed financial insights
                      into each course, helping RTOs with effective financial
                      planning and revenue tracking.
                    </dd>
                  </div>
                </dl>

                <p className="mt-6 text-base leading-8 text-gray-600">
                  This dedicated screen reflects RPLiQ's commitment to
                  simplifying compliance processes and enhancing financial
                  management for RTOs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CardRto />
    </>
  );
};

export default page;
