import React from "react";
import Image from "next/image";

const detail = () => {
  return (
    <div className="max-container padding-container my-24 flex flex-wrap py-6">
      <section className="w-full md:w-2/3 flex flex-col items-center px-3">
        <article className="flex flex-col shadow my-4">
          <a href="#" className="hover:opacity-75">
            <img src="https://source.unsplash.com/collection/1346951/1000x500?sig=1" />
          </a>
          <div className="bg-white flex flex-col justify-start p-6">
            <a
              href="#"
              className="text-blue-700 text-sm font-bold uppercase pb-4"
            >
              Technology
            </a>
            <a href="#" className="text-3xl font-bold hover:text-gray-700 pb-4">
              Lorem Ipsum Dolor Sit Amet Dolor Sit Amet
            </a>
            <p href="#" className="text-sm pb-3">
              By{" "}
              <a href="#" className="font-semibold hover:text-gray-800">
                David Grzyb
              </a>
              , Published on April 25th, 2020
            </p>
            <a href="#" className="pb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              quis porta dui. Ut eu iaculis massa. Sed ornare ligula lacus, quis
              iaculis dui porta volutpat. In sit amet posuere magna..
            </a>
            <a href="#" className="uppercase text-gray-800 hover:text-black">
              Continue Reading <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        </article>

        {/* <div className="flex items-center py-8">
          <a
            href="#"
            className="h-10 w-10 bg-blue-800 hover:bg-blue-600 font-semibold text-white text-sm flex items-center justify-center"
          >
            1
          </a>
          <a
            href="#"
            className="h-10 w-10 font-semibold text-gray-800 hover:bg-blue-600 hover:text-white text-sm flex items-center justify-center"
          >
            2
          </a>
          <a
            href="#"
            className="h-10 w-10 font-semibold text-gray-800 hover:text-gray-900 text-sm flex items-center justify-center ml-3"
          >
            Next <i className="fas fa-arrow-right ml-2"></i>
          </a>
        </div> */}
      </section>

      <div className="w-full md:w-1/3 flex flex-col items-center px-3">
        <div className="w-full bg-gray-10 shadow flex flex-col my-4 p-6">
          <p className="text-xl font-semibold pb-5">Categories</p>

          <ul className="pb-2">
            <li className="border-b-4 mb-2 cursor-pointer hover:font-bold">
              Introduction
            </li>
            <li className="border-b-4 mb-2 cursor-pointer hover:font-bold">
              Software Setup
            </li>
            <li className="border-b-4 mb-2 cursor-pointer hover:font-bold">
              RTO
            </li>
            <li className="border-b-4 mb-2 cursor-pointer hover:font-bold">
              RPL
            </li>
            <li className="border-b-4 mb-2 cursor-pointer hover:font-bold">
              Compliance
            </li>
          </ul>
        </div>

        <div className="w-full bg-gray-10 shadow flex flex-col my-4 p-6">
          <p className="text-xl font-semibold pb-5">Top Posts</p>
          <div className="">
            <div className=" flex gap-4">
              <Image
                width={50}
                height={50}
                className="h-max w-max"
                src="/thumbnail-post.png"
                alt="photo"
              />
              <div className="text-base">
                <div className="font-semibold text-xl hover:underline cursor-pointer">
                  How To Customise Your Dashboard
                </div>
              </div>
            </div>
            <div className="mt-3 flex gap-4">
              <Image
                width={50}
                height={50}
                className="h-max w-max"
                src="/thumbnail-post.png"
                alt="photo"
              />
              <div className="text-base">
                <div className="font-semibold text-xl hover:underline cursor-pointer">
                  Software Set-Up Guide For RTOs
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full shadow flex flex-col my-4 p-6 bg-gray-10">
          <p className="text-xl font-semibold pb-5">Top Posts</p>
          <div className="">
            <div>
              <img
                className="sm:rounded-none w-fit"
                src="/cardRto-thumbnail.png"
                alt="For RTO"
              />
              <div>
                <h3 className="lg:text-xl font-bold tracking-tight text-gray-900 xs:text-base">
                  Are you ready to take your RTO to the next level?
                </h3>
                <p className="mt-6 lg:text-base xs:text-base leading-8 text-gray-600">
                  Request a demo and our team at RPL iQ can help you get setup,
                  go through the system configurations, and answer any questions
                  you have about our RPL student management system.
                </p>
              </div>
              <div className="mt-6 flex justify-center gap-4 mx-auto">
                <button className="flexCenter gap-3" type="button">
                  <label className="font-bold whitespace-nowrap btn_dark_green lg:text-normal xs:text-xs">
                    Start Trial
                  </label>
                </button>
                <button className="flexCenter gap-3" type="button">
                  <label className="font-bold whitespace-nowrap btn_white_green lg:text-normal xs:text-xs">
                    Request Demo
                  </label>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default detail;
