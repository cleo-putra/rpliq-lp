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
              <mark className="bg-green-30 p-4">Assessors</mark>
              <h2 className="mt-6 text-[34px] font-bold text-green-50	leading-snug tracking-wide lg:max-w-lg">
                RPLiQ: Take the Assessors' Online Journey
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Discover the assessors journey with RPLiQ, see how RPLiQ
                automates the assessment process and streamlines the
                communication between the RTO, employer and the student. This
                will increase your trainers and assessors efficiency enabling
                more engaging interaction with students.
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
          <div className="lg:mt-10 xs:mt-0">
            <img
              src="/journey/student/main.png"
              alt="Product screenshot"
              className="rounded-x w-max h-max "
            />
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
                  Assessor's Student Allocation
                </h2>
                <p className="mt-6 text-base leading-8 text-gray-600">
                  The assessors journey starts with a clear view of allocated
                  students and their course progress and portfolio of evidence.
                  The dashboard acts as a central hub essential for assessors to
                  manage and monitor:
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
                      Student Course Progress: Track student progress and tasks
                      at a glance.
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
                      Assessment Judgement & Feedback: Assessors have direct
                      communication with students giving assessment feedback and
                      addressing student queries.
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
                      Student Portfolio of evidence: Easily navigate through
                      student evidence records and submissions mapped to the
                      training package rules.
                    </dd>
                  </div>
                </dl>

                <p className="mt-6 text-base leading-8 text-gray-600">
                  By using RPLiQ your assessors will be able to assess multiple
                  students portfolios of evidence and provide direct student
                  support through our chat modules through their RPL journey.
                </p>
              </div>
            </div>
            <div className="lg:mt-20 xs:mt-0">
              <Image
                src="/journey/assessor/dashboard.png"
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
                src="/journey/assessor/courses.png"
                width={768}
                height={470}
                alt="Product screenshot"
                className="rounded-x w-auto h-auto"
              />
            </div>
            <div className="lg:pr-8 lg:pt-12 xs:pt-0">
              <div className="lg:max-w-xl">
                <h2 className="lg:text-[30px] xs:text-xl font-bold text-black-50">
                  Assessor's Course Allocation
                </h2>
                <p className="mt-6 text-base leading-8 text-gray-600">
                  The 'Courses' screen in RPLiQ shows assessors the courses
                  they're assessing:
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
                      Overview: Lists all courses under an assessor’s charge.
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
                      Manage Workload: Aids in organising and prioritising
                      assessment tasks.
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
                      Track Progress: Keeps tabs on assessment status for each
                      course.
                    </dd>
                  </div>
                </dl>

                <p className="mt-6 text-base leading-8 text-gray-600">
                  This tool helps assessors stay on top of their courses,
                  ensuring efficient assessment management.
                </p>
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
                  Assessment Validations
                </h2>
                <p className="mt-6 text-base leading-8 text-gray-600">
                  RPLiQ centralises validation documentation for RTOs,
                  streamlining quality assurance and compliance:
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
                      One Spot for All Validations: Keep validation records in a
                      single, organised location.
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
                      Aligns with Standards: Meets clauses 1.9, 1.10, 1.11 of
                      the RTO 2015 Standards.
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
                      Streamlined Management: Simplifies tracking and updating
                      validation activities.
                    </dd>
                  </div>
                </dl>

                <p className="mt-6 text-base leading-8 text-gray-600">
                  RPLiQ enhances the efficiency of maintaining validation
                  records, ensuring easy access and management.
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <Image
                src="/journey/assessor/validation.png"
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
                src="/journey/assessor/matrix.gif"
                width={768}
                height={470}
                alt="Product screenshot"
                className="rounded-x w-auto h-auto"
              />
            </div>
            <div className="lg:pr-8 lg:pt-12 xs:pt-0">
              <div className="lg:max-w-xl">
                <h2 className="lg:text-[30px] xs:text-xl font-bold text-black-50">
                  Assessor Matrix
                </h2>
                <p className="mt-6 text-base leading-8 text-gray-600">
                  RPLiQ's 'Assessor Matrix' links assessors' skills and
                  experiences to their VET courses:
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
                      Highlights VET qualifications and industry experience.
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
                      Tracks PD activities for VET and industry currency.
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
                      Ensures assessors are qualified and current for their
                      teaching roles.
                    </dd>
                  </div>
                </dl>

                <p className="mt-6 text-base leading-8 text-gray-600">
                  This tool helps maintain quality and compliance by mapping
                  assessor qualifications & experience directly to the courses
                  they deliver.
                </p>
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
                  Assessment Moderations
                </h2>
                <p className="mt-6 text-base leading-8 text-gray-600">
                  Assessment Moderations in RPLiQ ensure your assessments are
                  fair and consistent under the principles of assessment. Here’s
                  how it helps:
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
                      Team Reviews: Assessors collaboratively ensure assessments
                      meet quality standards.
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
                      Pre-Finalisation Checks: Moderation fine-tunes assessments
                      for accuracy and fairness.
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
                      Feedback for Improvement: Encourages assessors to share
                      insights for better assessment practices.
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
                      Moderation is our step towards high-quality, reliable VET
                      assessments, keeping everything in check before
                      finalising.
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <Image
                src="/journey/assessor/moderation.png"
                width={768}
                height={470}
                alt="Product screenshot"
                className="rounded-x w-auto h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Step 6 */}
      <div className="bg-gradient-to-b from-white to-[#eafaf4]">
        <div className="overflow-hidden lg:py-24 xs:py-10 max-container padding-container">
          <div className="mx-auto grid max-w-2xl xs:grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="flex justify-center items-center md:order-first xs:order-last">
              <Image
                src="/journey/assessor/resources.png"
                width={768}
                height={470}
                alt="Product screenshot"
                className="rounded-x w-auto h-auto"
              />
            </div>
            <div className="lg:pr-8 lg:pt-12 xs:pt-0">
              <div className="lg:max-w-xl">
                <h2 className="lg:text-[30px] xs:text-xl font-bold text-black-50">
                  Resources
                </h2>
                <p className="mt-6 text-base leading-8 text-gray-600">
                  The 'Resources' area in RPLiQ is packed with the latest RTO
                  policies and procedures for RPL and assessments:
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
                      Quick Access: Find all relevant guidelines in one spot.
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
                      Stay Informed: Always updated to keep you on top of
                      changes.
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
                      Supports Your Role: Tailored to assist assessors and
                      ensure compliance.
                    </dd>
                  </div>
                </dl>

                <p className="mt-6 text-base leading-8 text-gray-600">
                  'Resources' is your go-to for staying informed and effective
                  in the RPL process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Step 7 */}
      <div className="bg-gradient-to-b from-[#eafaf4] to-white">
        <div className="overflow-hidden lg:py-24 xs:py-10 max-container padding-container">
          <div className="mx-auto grid max-w-2xl xs:grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-12 xs:pt-0">
              <div className="lg:max-w-xl">
                <h2 className="lg:text-[30px] xs:text-xl font-bold text-black-50">
                  Assessors' Trainer's Files
                </h2>
                <p className="mt-6 text-base leading-8 text-gray-600">
                  Trainer's Files' in RPLiQ organises essential assessor info:
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
                      Qualifications & Licenses: Track your qualifications and
                      industry licenses.
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
                      Currency: Record & Update your engagement in VET and
                      industry.
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
                      PD Records: Record your professional development in VET
                      and industry.
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
                      Mappings: Access unit mappings and your assessor matrix.
                    </dd>
                  </div>
                </dl>

                <p className="mt-6 text-base leading-8 text-gray-600">
                  This section helps assessors keep their credentials and
                  knowledge up to date, all in one spot.
                </p>
              </div>
            </div>
            <Image
              src="/journey/assessor/trainer.png"
              width={768}
              height={470}
              alt="Product screenshot"
              className="rounded-x w-auto h-auto"
            />
          </div>
        </div>
      </div>

      {/* Step 8 */}
      <div className="bg-gradient-to-b from-white to-[#eafaf4]">
        <div className="overflow-hidden lg:py-24 xs:py-10 max-container padding-container">
          <div className="mx-auto grid max-w-2xl xs:grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="flex justify-center items-center md:order-first xs:order-last">
              <Image
                src="/journey/assessor/Scope.png"
                width={768}
                height={470}
                alt="Product screenshot"
                className="rounded-x w-auto h-auto"
              />
            </div>
            <div className="flex lg:pr-8 lg:pt-12 xs:pt-0 items-center">
              <div className="lg:max-w-xl">
                <h2 className="lg:text-[30px] xs:text-xl font-bold text-black-50">
                  Assessor's Scope
                </h2>
                <p className="mt-6 text-base leading-8 text-gray-600">
                  Assessor's Scope' in RPLiQ details the units of competency
                  assessors are authorised to assess:
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
                      Defined Engagement: Highlights the competencies each
                      assessor is qualified to evaluate.
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
                      Clear Boundaries: Specifies the scope of engagement for
                      assessors.
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
                      This feature provides clarity on assessors' permitted
                      assessment areas, promoting accurate and compliant
                      evaluations.
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Step 9 */}
      <div className="bg-gradient-to-b from-[#eafaf4] to-white">
        <div className="overflow-hidden lg:py-24 xs:py-10 max-container padding-container">
          <div className="mx-auto grid max-w-2xl xs:grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-12 xs:pt-0">
              <div className="lg:max-w-xl">
                <h2 className="lg:text-[30px] xs:text-xl font-bold text-black-50">
                  Feedback
                </h2>
                <p className="mt-6 text-base leading-8 text-gray-600">
                  In RPLiQ's 'Feedback' area, assessors handle student feedback
                  on key submissions:
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
                      Direct Responses: Address feedback on ID Documents,
                      Employment History, Referee Testimonials, Evidence
                      Portfolio, and Statutory Declarations.
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
                      Clear Communication: Enables back-and-forth chats for
                      clarity and improvement.
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
                      Supports Quality: Helps fine-tune assessments and student
                      support.
                    </dd>
                  </div>
                </dl>

                <p className="mt-6 text-base leading-8 text-gray-600">
                  This feature simplifies the feedback loop, making it easy for
                  assessors to respond and adjust where necessary.
                </p>
              </div>
            </div>
            <div className="lg:mt-16 xs:mt-0">
              <Image
                src="/journey/assessor/feedback.png"
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
