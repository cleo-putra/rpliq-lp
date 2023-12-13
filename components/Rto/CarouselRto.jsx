"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card } from "antd";
import Image from "next/image";

const dataPartner = [
  {
    title: "1. RTO (Registered Training Organisation):",
    desc: [
        {
            subtitle: "Customisable Dashboard:",
            content: "RTOs can tailor their dashboard, placing essential information and tools in a secure cloud-based system."
        },
        {
            subtitle: "Template Customisation:",
            content: "Customise assessment templates and documentation to align with the RTO’s specific qualification requirements and industry standards."
        },
        {
            subtitle: "Flexible Requirements:",
            content: "Set and adjust evidence requirements based on the evolving needs of qualifications and compliance standards.  "
        },
        {
            subtitle: "Billing Management:",
            content: "Enjoy comprehensive billing tools, enabling RTOs to manage financial aspects seamlessly within the platform."
        }
    ],
    photo: './rto-1.png'
  },
  {
    title: "2. Assessors",
    desc: [
        {
            subtitle: "Assessment Tools:",
            content: "Assessors have access to specialised tools for evaluating evidence, providing feedback, and ensuring a thorough assessment process."
        },
        {
            subtitle: "Feedback Page:",
            content: "Provide detailed feedback to support the students."
        },
        {
            subtitle: "Approval Workflow:",
            content: "Assessors can efficiently assess students’ work, facilitating a streamlined process from evidence submission to qualification attainment."
        }
    ],
    photo: './rto-2.png'
  },
  {
    title: "3. Students",
    desc: [
        {
            subtitle: "Evidence Submission:",
            content: "Students can easily upload evidence directly into the platform, simplifying the submission process."
        },
        {
            subtitle: "Communication Hub:",
            content: "Engage in direct communication with Assessors, facilitating a clear channel for queries, clarifications, and feedback."
        },
        {
            subtitle: "User-Friendly Interface:",
            content: "The student interface is designed for simplicity, ensuring a smooth experience in navigating the platform and managing their evidence."
        }
    ],
    photo: './rto-3.png'
  },
];

const CarouselRto = () => {
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
    <div className="bg-gray-10 to-white flex">
      <div className="max-container padding-container py-8 grid max-w-2xl grid-cols-1">
        <p className="text-center mt-10">
          <mark className="bg-green-30 p-4">User Levels</mark>
        </p>

        <h3 className="mt-6 text-3xl font-bold text-center">
            Tailored User Experiences for Every Role{" "}
        </h3>
        <Slider {...settings} className="py-10 px-20 bg-gray-100">
          {dataPartner.map((item) => (
            <Card
              bordered={true}
              className="bg-gray-100"
              style={{ backgroundColor: "red", minHeight: "450px!important" }}
            >
              <div className="grid grid-cols-4 gap-4">
                <div className="col-span-2">
                  <h3 className="text-2xl font-bold my-5">{item.title}</h3>
                  {item.desc.map((data) => (
                    <>
                        <h4 className="text-xl font-bold mt-4 mb-1 flex"><img src="./icon/rpliq-black.png" className="w-[28px] h-[20px] mr-2 mt-1"/>{data.subtitle}</h4>
                        <p className="text-base font-light ">{data.content}</p>
                    </>
                  ))}
                </div>
                <div className="col-span-2">
                  <div className=" flex gap-4">
                    <img
                      className="p-4 mx-auto "
                      src={item.photo}
                      alt="photo"
                    />
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CarouselRto;
