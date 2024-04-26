"use client";
import React from "react";
import Image from "next/image";

export default function Contact() {
  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    try {
      const response = await fetch("/api/email", {
        method: "post",
        body: formData,
      });

      if (!response.ok) {
        console.log("falling over");
        throw new Error(`response status: ${response.status}`);
      }
      const responseData = await response.json();

      alert("Thank you, message successfully sent!");
      window.location.replace('/');
    } catch (err) {
      console.error(err);
      alert("Error, please try resubmitting the form");
    }
  }

  return (
    <div className="max-container padding-container py-8 my-10">
      <section className="p-6 bg-gray-10">
        <div className="flex flex-wrap">
          <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:px-6">
            <h2 className="mb-6 text-3xl font-bold">Get in touch with us</h2>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-2">
                <div className="relative mb-2" data-te-input-wrapper-init>
                  <label
                    className="text-neutral-500 transition-all text-sm"
                    htmlFor="firstname"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    className="peer block min-h-[auto] w-full rounded border-4 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    placeholder="First Name"
                    id="firstname"
                    name="firstname"
                    required
                  />
                </div>
                <div className="relative mb-2" data-te-input-wrapper-init>
                  <label
                    className="text-neutral-500 transition-all text-sm"
                    htmlFor="lastname"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="peer block min-h-[auto] w-full rounded border-4 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    placeholder="Last Name"
                    id="lastname"
                    name="lastname"
                    required
                  />
                </div>
                <div className="relative mb-2" data-te-input-wrapper-init>
                  <label
                    className="text-neutral-500 transition-all text-sm"
                    htmlFor="email"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="peer block min-h-[auto] w-full rounded border-4 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    placeholder="Email address"
                    id="email"
                    name="email"
                    required
                  />
                </div>
                <div className="relative mb-2" data-te-input-wrapper-init>
                  <label
                    className="text-neutral-500 transition-all text-sm"
                    htmlFor="phone"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="peer block min-h-[auto] w-full rounded border-4 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    placeholder="Phone Number"
                    id="phone"
                    name="phone"
                    required
                  />
                </div>
              </div>
              <div className="relative mb-2">
              <label
                  htmlFor="topic"
                  className="text-neutral-500 transition-all text-sm"
                >
                  Topic
                </label>
                <select
                  className="mb-2 peer block min-h-[auto] w-full rounded border-4 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  id="topic"
                  name="topic"
                >
                  <option value="I am an RTO, request a demo.">
                    I am an RTO, request a demo.
                  </option>
                  <option value="I'm interested, pricing request.">
                    I'm interested, pricing request.
                  </option>
                  <option value="I'm a partner, support request.">
                    I'm a partner, support request.
                  </option>
                  <option value="I'm an assessor, partnership request.">
                    I'm an assessor, partnership request.
                  </option>
                </select>
              </div>
              <div className="relative mb-6" data-te-input-wrapper-init>
                <label
                  htmlFor="message"
                  className="text-neutral-500 transition-all text-sm"
                >
                  Message
                </label>
                <textarea
                  className="peer block min-h-[auto] w-full rounded border-4 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  id="message"
                  rows="3"
                  placeholder="Your message"
                  name="message"
                ></textarea>
              </div>

              <button className="flexCenter gap-3 cursor-pointer" type="submit">
                <label className="cursor-pointer font-semibold whitespace-nowrap btn_dark_green lg:text-normal xs:text-xs">
                  Submit
                </label>
              </button>
            </form>
          </div>
          <div className="mb-10 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:px-6">
            <div className="flex justify-end">
              <Image
                src="/contact-banner.png"
                width={507}
                height={458}
                alt="Product screenshot"
                className="rounded-x"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
