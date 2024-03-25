import React from "react";

const CardRto = () => {
  return (
    <div className="overflow-hidden bg-white  max-container padding-container my-20">
      <div className="bg-gray-10 grid lg:grid-cols-3 xs:grid-cols-1 mx-auto rounded-xl">
        <div className="col-span-1">
          <img className="h-full object-cover" src="/cardRto.png" alt="photo" />
        </div>
        <div className="col-span-2 md:px-10 xs:px-4 lg:py-10 xs:py-0">
          <h3 className="lg:text-2xl font-bold tracking-tight text-gray-900 xs:text-xl">
            How Does RPLiQ Minimise Your RTO’s Operational Costs?
          </h3>

          <h4 className="mt-5 text-lg font-medium tracking-tight text-gray-900">
            Streamlining Your RPL Process - Save Time and Money with Our
            Automated RPL Software
          </h4>

          <p className="mt-3 text-base leading-8 text-gray-600">
            RPLiQ is a revolutionary platform designed to fast-track
            qualification attainment through streamlined communication between
            students, employers, and RTOs. By automating key aspects of the RPL
            process, RPLiQ not only simplifies but also significantly reduces
            the time and resources needed to manage the RPL journey effectively.
          </p>

          <div className="mt-6 flex justify-normal gap-4">
            <button className="flexCenter gap-3" type="button">
              <label className="font-bold whitespace-nowrap btn_dark_green lg:text-normal xs:text-xs">
                Try It Free
              </label>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardRto;
