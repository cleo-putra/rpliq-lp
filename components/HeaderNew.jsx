"use client";
import React, { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import { DownOutlined, MenuOutlined } from "@ant-design/icons";
import { NAV_LINKS } from "@/constants";
import Link from "next/link";

const products = [
  {
    name: "Product Overview",
    description: "Empowering Futures, Recognizing Your Journey",
    href: "/product",
  },
  {
    name: "Compliance",
    description:
      "Empowering Ambitions, Igniting Potential: Your Journey, Your Success as a Student",
    href: "/compliance",
  },
  {
    name: "RPL",
    description: "Recognition of Prior Learning, Your Gateway to Success",
    href: "/rpl",
  },
  {
    name: "RTO",
    description:
      "Elevate Your Training Experience with SaaS Innovation for Registered Training Organizations",
    href: "/rto",
  },
];

const resources = [
  {
    name: "Reporting",
    description:
      "Navigating Your Educational Journey with Precision and Clarity",
    href: "/reporting",
  },

  {
    name: "Blogs",
    description: "News & advice from out experts",
    href: "/blogs",
  },
];

const callsToAction = [
  { name: "Watch demo", href: "#" },
  { name: "Contact sales", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function HeadeNew() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-black-50">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <img
              className="h-8 w-auto"
              src="/rpliq-logo.png"
              alt="RPLIQ LOGO"
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <MenuOutlined className="text-white" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            {({ open }) => (
              <>
                <Popover.Button className="flex items-center gap-x-1 text-base font-semibold leading-6 text-white hover:text-green-50 transition-all">
                  Solutions
                  <DownOutlined
                    className="h-5 w-5 flex-none text-gray-400"
                    aria-hidden="true"
                  />
                </Popover.Button>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                    <div className="p-4">
                      {products.map((item) => (
                        <div
                          key={item.name}
                          className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-green-50"
                        >
                          <div className="flex-auto">
                            <Link
                              href={item.href}
                              className="block font-semibold text-gray-900"
                            >
                              {item.name}
                              <span className="absolute inset-0" />
                            </Link>
                            <p className="mt-1 text-gray-600">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>

          <Popover className="relative">
            {({ open }) => (
              <>
                <Popover.Button className="flex items-center gap-x-1 text-base font-semibold leading-6 text-white hover:text-green-50 transition-all">
                  Resources
                  <DownOutlined
                    className="h-5 w-5 flex-none text-gray-400"
                    aria-hidden="true"
                  />
                </Popover.Button>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                    <div className="p-4">
                      {resources.map((item) => (
                        <div
                          key={item.name}
                          className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-green-50"
                        >
                          <div className="flex-auto">
                            <Link
                              href={item.href}
                              className="block font-semibold text-gray-900"
                            >
                              {item.name}
                              <span className="absolute inset-0" />
                            </Link>
                            <p className="mt-1 text-gray-600">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>

          {NAV_LINKS.map((link) => (
            <Link
              key={link.key}
              href={link.href}
              className="text-base font-semibold leading-6 text-white hover:text-green-50 transition-all"
              aria-current="page"
            >
              {link.label}
            </Link>
          ))}
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="#"
            className="text-black bg-green-50 hover:bg-green-50/90 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
          >
            Start Free Trial
          </a>
        </div>
      </nav>

      {/* mobile bar */}
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="bg-black-50 fixed inset-y-0 right-0 z-10 w-full overflow-y-auto px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <img
                className="h-8 w-auto"
                src="/rpliq-logo.png"
                alt="Rpliq mobile"
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <MenuOutlined className="text-white" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-white">
                        Solutions
                        <DownOutlined
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...products, ...callsToAction].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-white"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-white">
                        Resources
                        <DownOutlined
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...resources, ...callsToAction].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-white"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.key}
                    href={link.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 
              text-white hover:text-green-50 transition-all"
                    aria-current="page"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="py-2">
                <a
                  href="#"
                  className="text-black bg-green-50 hover:bg-green-50/90 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                >
                  Start Free Trial
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
