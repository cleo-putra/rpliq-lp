import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="flexCenter bg-black-50 py-10">
      <div className="padding-container max-container flex w-full flex-col gap-10">
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
          <div className="w-72">
            <Link href="/" className="mb-10">
              <Image src="/rpliq-logo.png" alt="logo" width={132} height={50} />
            </Link>
            <h4 className="my-5 text-white font-semibold text-base">
              We have simplified hundreds of RTOs’ compliance journey across
              Australia.
            </h4>
            <div className="grid grid-cols-3 gap-0">
              <Image
                src="/icon/fb-green.png"
                alt="logo"
                width={40}
                height={40}
              />
              <Image
                src="/icon/yt-green.png"
                alt="logo"
                width={40}
                height={40}
              />
              <Image
                src="/icon/linkedin-green.png"
                alt="logo"
                width={40}
                height={40}
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-10 sm:justify-normal md:flex-1">
            {FOOTER_LINKS.map((columns) => (
              <FooterColumn title={columns.title}>
                <ul className="text-base flex flex-col gap-4">
                  {columns.links.map((link) => (
                    <Link
                      href={link.href}
                      key={link.key}
                      className="text-white hover:text-green-50"
                    >
                      {link.label}
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            ))}
          </div>
        </div>

        <div className="border bg-gray-20" />
        <p className="regular-14 w-full text-center text-white">
          2023 RPLiQ | All rights reserved
        </p>
      </div>
    </footer>
  );
};

const FooterColumn = ({ title, children }) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="bold-18 whitespace-nowrap text-gray-20">{title}</h4>
      {children}
    </div>
  );
};

export default Footer;
