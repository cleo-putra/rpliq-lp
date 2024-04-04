import React from "react";

const CardRto = () => {
  return (
    <div className="overflow-hidden bg-white  max-container padding-container my-20 lg:w-4/5 xs:w-100">
      <div className="bg-gray-10 grid lg:grid-cols-3 xs:grid-cols-1 mx-auto rounded-xl">
        <div className="col-span-1">
          <img className="h-full object-cover" src="/cardRto.png" alt="photo" />
        </div>
        <div className="col-span-2 md:px-10 xs:px-4 lg:py-10 xs:py-0">
          <h3 className="lg:text-4xl font-bold tracking-tight text-gray-900 xs:text-xl">
            <span className="text-green-50">Get Going in No Time:</span><br/> Easy-Peasy RPLiQ Setup
          </h3>

          <p className="lg:mt-10 xs:mt-2 lg:text-base xs:text-sm leading-8 text-gray-600">
            Our team is on standby to help you breeze through setup. With
            RPLiQ's three-step onboarding journey, we'll get you and your team
            up to speed and ready to roll in no time.
          </p>

          <div className="mt-6 mb-2 flex justify-normal gap-4">
            <button className="flexCenter gap-3" type="button">
              <label className="font-bold whitespace-nowrap btn_dark_green lg:text-normal xs:text-xs">
                Get a Free Demo Now
              </label>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardRto;
