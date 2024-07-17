import Image from "next/image";
import Link from "next/link";
import React from "react";

const ThankYou = () => {
  return (
    <>
      <div className="bg-[#000] p-10">
        <p className="text-center px-5 font-bold tracking-tight text-white text-2xl">
          Thank You for taking the first step on your journey to becoming
          Qualified!
        </p>

        <div className="flex justify-center items-center my-10">
          <Image
            src="/rpliq-logo.png"
            alt="logo"
            className="rounded-x w-auto h-auto"
            width={200}
            height={120}
          />
        </div>

        <p className="text-center lg:mt-4 xs:mt-0 px-5 text-base tracking-tight text-white">
          Our Friendly team will be in contact with you very shortly, <br />
          if you need to talk to one of our team members urgently, please
          contact <span>1800 760 760</span>
        </p>

        <div className="flex  justify-center items-center mt-10">
          <Link href={"/"}>
            <button type="button">
              <label className="whitespace-nowrap btn_dark_green text-sm cursor-pointer">
                Back to Homepage
              </label>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ThankYou;
