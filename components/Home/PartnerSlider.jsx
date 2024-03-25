"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card } from "antd";
import Image from "next/image";

const dataPartner = [
  {
    key: "1",
    name: "Jessica",
    desc: "As an RTO manager, navigating the intricate landscape of compliance is a daily challenge. RPLiQ has been a game-changer for our institution. The ASQA-compliant features ensure that we are always in alignment with regulatory standards.",
    position: "RTO Manager",
  },
  {
    key: "2",
    name: "Marcus",
    desc: "The software set-up process was easy, with a user-friendly interface and step-by-step guidance. The customisable dashboard has become our control center, allowing us to arrange tools and insights according to our workflows. The real-time analytics provide a level of visibility we never thought possible.",
    position: "RTO Owner",
  },
  {
    key: "3",
    name: "Moe",
    desc: "The platform’s role-specific customisation has saved us so much time and money. Students find the journey seamless, with easy evidence submission and direct communication with Assessors. As an RTO manager, the ability to customise templates & billing within the platform has been a game-changer.",
    position: "RTO Manager",
  },
  {
    key: "4",
    name: "Moe",
    desc: "The platform’s role-specific customisation has saved us so much time and money. Students find the journey seamless, with easy evidence submission and direct communication with Assessors. As an RTO manager, the ability to customise templates & billing within the platform has been a game-changer.",
    position: "RTO Manager",
  },
];

const PartnerSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
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
    <div className="bg-gradient-to-b from-[#eafaf4] to-white flex">
      <div className="max-container padding-container py-8 grid max-w-2xl grid-cols-1">
        <p className="text-center lg:mt-4 xs:mt-0 md:text-2xl px-5 xs:text-lg font-semibold tracking-tight text-gray-900 sm:text-2xl">
          Trusted By Our Partner RTO's
        </p>
        <Slider {...settings} className="py-10 lg:px-20 xs:px-4">
          {dataPartner.map((item) => (
            <Card
              key={item.key}
              bordered={true}
              className="lg:h-[350px] xs:h-[350px]"
            >
              <p className="text-base font-semibold">{item.desc}</p>
              <div className="flex absolute bottom-2 py-6 gap-4">
                <Image
                  width={30}
                  height={30}
                  className="h-max w-max rounded-full pt-1"
                  src="/icon-user-black.png"
                  alt="photo"
                />
                <div className="text-base">
                  <div className="font-semibold text-black-50">{item.name}</div>

                  <div className="text-black-50 text-xs">{item.position}</div>
                </div>
              </div>
            </Card>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default PartnerSlider;
