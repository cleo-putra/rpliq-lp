"use client";
import React, { useState } from "react";
import { Button, Radio } from "antd";
import Image from "next/image";

const ManageStudent = () => {
  return (
    <div className="overflow-hidden bg-white lg:py-24 xs:py-10 max-container padding-container">
      <div className="mx-auto grid max-w-2xl xs:grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <div className="lg:pr-8 lg:pt-12 xs:pt-0 col-span-1">
          <div className="lg:max-w-xl">
            <div class="flex items-start">
              <ul
                class="me-4 flex list-none flex-col flex-wrap ps-0"
                role="tablist"
                data-twe-nav-ref
              >
                <li role="presentation" class="flex-grow text-center">
                  <a
                    href="#pills-home03"
                    class="my-2 block rounded bg-zinc-100 px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 data-[twe-nav-active]:!bg-primary-100 data-[twe-nav-active]:text-primary-700 dark:bg-neutral-700 dark:text-white/50 dark:data-[twe-nav-active]:!bg-slate-900 dark:data-[twe-nav-active]:text-primary-500"
                    id="pills-home-tab03"
                    data-twe-toggle="pill"
                    data-twe-target="#pills-home03"
                    data-twe-nav-active
                    role="tab"
                    aria-controls="pills-home03"
                    aria-selected="true"
                  >
                    Home
                  </a>
                </li>
                <li role="profile" class="flex-grow text-center">
                  <a
                    href="#pills-profile03"
                    class="my-2 block rounded bg-zinc-100 px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 data-[twe-nav-active]:!bg-primary-100 data-[twe-nav-active]:text-primary-700 dark:bg-neutral-700 dark:text-white/50 dark:data-[twe-nav-active]:!bg-slate-900 dark:data-[twe-nav-active]:text-primary-500"
                    id="pills-profile-tab03"
                    data-twe-toggle="pill"
                    data-twe-target="#pills-profile03"
                    role="tab"
                    aria-controls="pills-profile03"
                    aria-selected="false"
                  >
                    Profile
                  </a>
                </li>
                <li role="contact" class="flex-grow text-center">
                  <a
                    href="#pills-contact03"
                    class="my-2 block rounded bg-zinc-100 px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 data-[twe-nav-active]:!bg-primary-100 data-[twe-nav-active]:text-primary-700 dark:bg-neutral-700 dark:text-white/50 dark:data-[twe-nav-active]:!bg-slate-900 dark:data-[twe-nav-active]:text-primary-500"
                    id="pills-contact-tab03"
                    data-twe-toggle="pill"
                    data-twe-target="#pills-contact03"
                    role="tab"
                    aria-controls="pills-contact03"
                    aria-selected="false"
                  >
                    Contact
                  </a>
                </li>
                <li role="disabled" class="flex-grow text-center">
                  <a
                    href="#pills-disabled03"
                    class="pointer-events-none my-2 block rounded bg-zinc-200 px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-400 dark:bg-neutral-600 dark:text-neutral-500"
                    id="pills-disabled-tab03"
                    data-twe-toggle="pill"
                    data-twe-target="#pills-disabled03"
                    role="tab"
                    aria-controls="pills-disabled03"
                    aria-selected="false"
                  >
                    Disabled
                  </a>
                </li>
              </ul>

              <div class="my-2">
                <div
                  class="hidden opacity-100 transition-opacity duration-150 ease-linear data-[twe-tab-active]:block"
                  id="pills-home03"
                  role="tabpanel"
                  aria-labelledby="pills-home-tab03"
                  data-twe-tab-active
                >
                  Tab 1 content vertical
                </div>
                <div
                  class="hidden opacity-0 transition-opacity duration-150 ease-linear data-[twe-tab-active]:block"
                  id="pills-profile03"
                  role="tabpanel"
                  aria-labelledby="pills-profile-tab03"
                >
                  Tab 2 content vertical
                </div>
                <div
                  class="hidden opacity-0 transition-opacity duration-150 ease-linear data-[twe-tab-active]:block"
                  id="pills-contact03"
                  role="tabpanel"
                  aria-labelledby="pills-contact-tab03"
                >
                  Tab 3 content vertical
                </div>
                <div
                  class="hidden opacity-0 transition-opacity duration-150 ease-linear data-[twe-tab-active]:block"
                  id="pills-disabled03"
                  role="tabpanel"
                  aria-labelledby="pills-disabled-tab03"
                >
                  Tab 4 disabled vertical
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-normal gap-4">
              <div class="bg-indigo-400 text-white px-5 py-2.5 focus:bg-green-500">
                Login21
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-2 flex justify-end">
          <Image
            src="/rto-4.png"
            width={568}
            height={470}
            alt="Product screenshot"
            className="rounded-x w-[486px] h-[460px]"
          />
        </div>
      </div>
    </div>
  );
};

export default ManageStudent;
