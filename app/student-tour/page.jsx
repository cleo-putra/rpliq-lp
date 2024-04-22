import React from "react";
import CardRto from "@/components/Home/CardRto";
import AchieveSection from "@/components/Rto/AchieveSection";
import CarouselRto from "@/components/Rto/CarouselRto";
import JourneySection from "@/components/Rto/JourneySection";
import ManageStudent from "@/components/Rto/ManageStudent";
import TableRto from "@/components/Rto/TableRto";
import VideoRto from "@/components/Rto/VideoRto";
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
              <mark className="bg-green-30 p-4">Students</mark>
              <h2 className="mt-6 text-[34px] font-bold text-green-50	leading-snug tracking-wide lg:max-w-lg">
                RPLiQ, take the student online journey
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Take a quick tour of the student journey with RPLiQ. We'll show
                you how our platform makes RPL assessments easy and automated
                for students.
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
          <div className="flex lg:justify-end xs:justify-center">
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
                  Step 1: Navigating the Dashboard
                </h2>
                <p className="mt-6 text-base leading-8 text-gray-600">
                  At the start of their RPL journey, students are met by a
                  dynamic and interactive dashboard, that is user friendly and
                  offers students:
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
                      Quick Overview: See progress, tasks, and alerts at a
                      glance.
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
                      Resource Access: Easy links to evidence submission guides
                      and support.
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
                      Customised View: Shows each student's specific RPL stage
                      and progress.
                    </dd>
                  </div>
                </dl>

                <p className="mt-6 text-base leading-8 text-gray-600">
                  This efficient dashboard ensures students start their journey
                  informed and ready.
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <Image
                src="/journey/student/dashboard.png"
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
                src="/journey/student/LLN.png"
                width={768}
                height={470}
                alt="Product screenshot"
                className="rounded-x w-auto h-auto"
              />
            </div>
            <div className="flex lg:pr-8 lg:pt-12 xs:pt-0 items-center">
              <div className="lg:max-w-xl">
                <h2 className="lg:text-[30px] xs:text-xl font-bold text-black-50">
                  Step 2: LLN Assessment
                </h2>
                <p className="mt-6 text-base leading-8 text-gray-600">
                  Next, students complete the LLN Assessment to check their
                  foundational skills:
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
                      Instant Results: Quick feedback on readiness.
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
                      Clear Guidance: Advice on next steps if needed.
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
                      Smooth Process: Integrated directly into their RPLiQ
                      journey.
                    </dd>
                  </div>
                </dl>

                <p className="mt-6 text-base leading-8 text-gray-600">
                  This ensures students are prepared to successfully navigate
                  their RPL path.
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
            <div className="flex lg:pr-8 lg:pt-12 xs:pt-0 items-center">
              <div className="lg:max-w-xl">
                <h2 className="lg:text-[30px] xs:text-xl font-bold text-black-50">
                  Step 3: Enrolment
                </h2>
                <p className="mt-6 text-base leading-8 text-gray-600">
                  After the LLN quiz, students smoothly move to enrol:
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
                      Easy Online Form: Quick, hassle-free enrolment.
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
                      Instant Acknowledgment: Immediate confirmation kickstarts
                      the journey.
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
                      Clear Next Steps: Guides students to what’s next.
                    </dd>
                  </div>
                </dl>

                <p className="mt-6 text-base leading-8 text-gray-600">
                  This step seamlessly integrates students into their RPL
                  journey with RPLiQ.
                </p>
              </div>
            </div>
            <Image
              src="/journey/student/Enrolment.png"
              width={768}
              height={470}
              alt="Product screenshot"
              className="rounded-x w-auto h-auto"
            />
          </div>
        </div>
      </div>

      {/* Step 4 */}
      <div className="bg-gradient-to-b from-white to-[#eafaf4]">
        <div className="overflow-hidden lg:py-24 xs:py-10 max-container padding-container">
          <div className="mx-auto grid max-w-2xl xs:grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="flex justify-center items-center md:order-first xs:order-last">
              <Image
                src="/journey/student/Id Docs.png"
                width={768}
                height={470}
                alt="Product screenshot"
                className="rounded-x w-auto h-auto"
              />
            </div>
            <div className="lg:pr-8 lg:pt-12 xs:pt-0">
              <div className="lg:max-w-xl">
                <h2 className="lg:text-[30px] xs:text-xl font-bold text-black-50">
                  Step 4: Identification Documents
                </h2>
                <p className="mt-6 text-base leading-8 text-gray-600">
                  With enrolment complete, students then submit their
                  identification documents:
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
                      Secure Uploads: A safe, encrypted platform for submitting
                      ID documents.
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
                      Quick Verification: Fast processing to verify student
                      identities.
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
                      Start Without Delay: Ensures students can proceed with
                      their RPL journey promptly.
                    </dd>
                  </div>
                </dl>

                <p className="mt-6 text-base leading-8 text-gray-600">
                  This crucial step verifies student identities, maintaining the
                  integrity of the RPL process.
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
                  Step 5: Employment History
                </h2>
                <p className="mt-6 text-base leading-8 text-gray-600">
                  Employment History: "Following ID verification, students
                  document their employment history:
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
                      Simple Submission: Easy entry or upload of work history
                      details.
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
                      Relevant Experience: Highlights applicable skills and
                      experiences for RPL assessment.
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
                      Efficient Review: Quick assessment by RTOs or assessors to
                      understand the student's background.
                    </dd>
                  </div>
                </dl>

                <p className="mt-6 text-base leading-8 text-gray-600">
                  This step contextualizes the student’s practical experience,
                  aiding in the RPL assessment.
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <Image
                src="/journey/student/Employment.png"
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
                src="/journey/student/Referee.png"
                width={768}
                height={470}
                alt="Product screenshot"
                className="rounded-x w-auto h-auto"
              />
            </div>
            <div className="lg:pr-8 lg:pt-12 xs:pt-0">
              <div className="lg:max-w-xl">
                <h2 className="lg:text-[30px] xs:text-xl font-bold text-black-50">
                  Step 6: Referee Testimonial
                </h2>
                <p className="mt-6 text-base leading-8 text-gray-600">
                  Students submit referee contacts in RPLiQ, which then
                  automates the testimonial process:
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
                      Automated Requests: RPLiQ emails referees directly,
                      requesting testimonials.
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
                      Referee Responses: Referees reply via email, and their
                      responses are automatically captured in RPLiQ.
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
                      Efficiency and Integration: Streamlines gathering external
                      insights, ensuring a seamless incorporation into the
                      student’s portfolio.
                    </dd>
                  </div>
                </dl>

                <p className="mt-6 text-base leading-8 text-gray-600">
                  This approach simplifies collecting valuable testimonials,
                  enhancing the assessment with minimal effort from the student.
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
                  Step 7: Evidence Portfolio
                </h2>
                <p className="mt-6 text-base leading-8 text-gray-600">
                  Following referee testimonials, students compile and submit
                  their evidence portfolio:
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
                      Intuitive Submission: Easy upload of documents, photos,
                      and videos directly within RPLiQ.
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
                      Guided Assistance: Access to examples and guidelines for
                      what constitutes relevant and acceptable evidence.
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
                      Mapping: RPLiQ maps the evidence to the specific unit
                      element and performance criteria to meet the training
                      package requirements.
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <Image
                src="/journey/student/Evidence.png"
                width={768}
                height={470}
                alt="Product screenshot"
                className="rounded-x w-auto h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Step 8 */}
      <div className="bg-gradient-to-b from-white to-[#eafaf4]">
        <div className="overflow-hidden lg:py-24 xs:py-10 max-container padding-container">
          <div className="mx-auto grid max-w-2xl xs:grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="flex justify-center items-center md:order-first xs:order-last">
              <Image
                src="/journey/student/statdec.png"
                width={768}
                height={470}
                alt="Product screenshot"
                className="rounded-x w-auto h-auto"
              />
            </div>
            <div className="flex lg:pr-8 lg:pt-12 xs:pt-0 items-center">
              <div className="lg:max-w-xl">
                <h2 className="lg:text-[30px] xs:text-xl font-bold text-black-50">
                  Step 8: Statutory Declaration
                </h2>
                <p className="mt-6 text-base leading-8 text-gray-600">
                  Upload Stat Dec: If a stat dec is required, Easily upload the
                  statutory declaration to RPLiQ.
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
                      Ensure Authenticity: Confirms the credibility of your
                      evidence.
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
                      Integrity Check: A vital step for maintaining the
                      integrity of your submission.
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
                  Step 9: Certificates
                </h2>
                <p className="mt-6 text-base leading-8 text-gray-600">
                  The final step in the RPL journey is the issuance of
                  certificates:
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
                      Online Issuance: Once all assessments and verifications
                      are complete, RPLiQ automatically generates and issues the
                      qualification certificates.
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
                      Digital Delivery: Certificates are delivered digitally to
                      the student, ensuring a quick and eco-friendly conclusion
                      to the process.
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
                      Official Recognition: This step officially recognises the
                      student's achievements and competencies, marking the
                      successful completion of their RPL journey.
                    </dd>
                  </div>
                </dl>

                <p className="mt-6 text-base leading-8 text-gray-600">
                  Receiving their certificate, students celebrate their
                  hard-earned qualifications, facilitated seamlessly by RPLiQ.
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <Image
                src="/journey/student/Certificate.png"
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
