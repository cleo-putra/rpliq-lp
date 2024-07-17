"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function Contact() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    try {
      setLoading(true);
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
      setLoading(false);
      window.location.replace("/form-thank-you");
    } catch (err) {
      setLoading(false);
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

              {loading ? (
                <>
                  <button
                    disabled
                    className="flexCenter gap-3 cursor-pointer"
                    type="submit"
                  >
                    <label className="cursor-pointer font-semibold whitespace-nowrap btn_dark_green lg:text-normal xs:text-xs">
                      Submit
                      <svg
                        aria-hidden="true"
                        class="inline w-5 h-5 text-gray-200 animate-spin dark:text-gray-600 fill-green-500 ml-2"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                          fill="currentColor"
                        />
                        <path
                          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                          fill="currentFill"
                        />
                      </svg>
                      <span class="sr-only">Loading...</span>
                    </label>
                  </button>
                </>
              ) : (
                <button
                  className="flexCenter gap-3 cursor-pointer"
                  type="submit"
                >
                  <label className="cursor-pointer font-semibold whitespace-nowrap btn_dark_green lg:text-normal xs:text-xs">
                    Submit
                  </label>
                </button>
              )}
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
