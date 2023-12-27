import React from "react";

const CardRto = () => {
  return (
    <div className="overflow-hidden bg-white  max-container padding-container my-20">
      <div className="bg-gray-10 grid lg:grid-cols-3 xs:grid-cols-1 mx-auto xs:py-4">
        <div className="col-span-1">
          <img className="h-max w-max" src="/cardRto.png" alt="photo" />
        </div>
        <div className="col-span-2 md:px-10 xs:px-4 lg:py-10 xs:py-0">
          <h3 className="lg:text-4xl font-bold tracking-tight text-gray-900 xs:text-xl">
            Are you ready to take your RTO to the next level?
          </h3>

          <p className="mt-6 lg:text-lg xs:text-base leading-8 text-gray-600">
            Request a demo and our team at RPL iQ can help you get setup, go
            through the system configurations, and answer any questions you have
            about our RPL student management system.
          </p>

          <div className="mt-6 flex justify-normal gap-4">
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
  );
};

export default CardRto;
