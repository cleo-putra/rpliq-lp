"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card } from "antd";
import Image from "next/image";

const dataPartner = [
  {
    title: "ASQA-Compliant Design",
    desc: "At the core of RPLiQ’s functionality is a commitment to regulatory compliance. The platform is meticulously designed to align with the standards set by the Australian Skills Quality Authority (ASQA) and other regulatory bodies. The customisable templates, evidence requirements, and documentation processes within RPLiQ are all crafted with a compliance-first mindset, providing RTOs with the tools they need to meet and exceed regulatory expectations.",
  },
  {
    title: "ASQA-Compliant Design",
    desc: "At the core of RPLiQ’s functionality is a commitment to regulatory compliance. The platform is meticulously designed to align with the standards set by the Australian Skills Quality Authority (ASQA) and other regulatory bodies. The customisable templates, evidence requirements, and documentation processes within RPLiQ are all crafted with a compliance-first mindset, providing RTOs with the tools they need to meet and exceed regulatory expectations.",
  },
  {
    title: "ASQA-Compliant Design",
    desc: "At the core of RPLiQ’s functionality is a commitment to regulatory compliance. The platform is meticulously designed to align with the standards set by the Australian Skills Quality Authority (ASQA) and other regulatory bodies. The customisable templates, evidence requirements, and documentation processes within RPLiQ are all crafted with a compliance-first mindset, providing RTOs with the tools they need to meet and exceed regulatory expectations.",
  },
];

const RtoProduct = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    centerPadding: "100px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-gray-100 to-white flex my-20">
      <div className="max-container padding-container py-8 grid max-w-2xl grid-cols-1">
        <p className="text-center mt-10">
          <mark className="bg-green-30 p-4">Train & Assess</mark>
        </p>

        <h3 className="mt-6 text-3xl font-bold text-center">
          The Ultimate RPL Automation{" "}
        </h3>
        <Slider
          {...settings}
          className="lg:py-10 sm:py-2 lg:px-20 sm:px-0 bg-gray-100"
        >
          {dataPartner.map((item) => (
            <Card
              bordered={true}
              className="bg-gray-100"
              style={{ backgroundColor: "red", minHeight: "450px!important" }}
            >
              <div className="grid lg:grid-cols-3 sm:grid-col-1 gap-4">
                <div className="col-span-1 lg:order-first xs:order-last">
                  <h4 className="text-xl font-semibold my-10">{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
                <div className="col-span-2 sm:order-first lg:order-last">
                  <img
                    className="mx-auto lg:w-[570px] lg:h-[360px] xs:w-[270px] xs:h-[180px]"
                    src="./laptop-mock-2.png"
                    alt="photo"
                  />
                </div>
              </div>
            </Card>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default RtoProduct;
