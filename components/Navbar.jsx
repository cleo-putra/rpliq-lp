"use client";
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";

const items = [
  {
    key: "1",
    label: (
      <a
        className="bold text-xl text-black cursor-pointer pb-1.5 hover:font-bold"
        rel="noopener noreferrer"
        href="/product"
      >
        Product Overview
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a
        className="bold text-xl text-black cursor-pointer pb-1.5 hover:font-bold"
        rel="noopener noreferrer"
        href="/compliance"
      >
        Compliance
      </a>
    ),
  },
  {
    key: "3",
    label: (
      <a
        className="bold text-xl text-black cursor-pointer pb-1.5 hover:font-bold"
        rel="noopener noreferrer"
        href="/reporting"
      >
        Reporting
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a
        className="bold text-xl text-black cursor-pointer pb-1.5 hover:font-bold"
        rel="noopener noreferrer"
        href="/rpl"
      >
        RPL
      </a>
    ),
  },
];

const Navbar = () => {
  return (
    <nav className=" relative z-30 py-8 bg-black-50">
      <div className="padding-container max-container flex w-full flexBetween gap-14">
        <Link href="/">
          <Image src="/rpliq-logo.png" alt="logo" width={132} height={50} />
        </Link>

        <ul className="hidden h-full gap-12 lg:flex">
          <Dropdown
            menu={{
              items,
            }}
          >
            <a
              className="bold lg:text-xl sm:text-base text-white flexCenter cursor-pointer pb-1.5 transition-all hover:text-green-50"
              onClick={(e) => e.preventDefault()}
            >
              <Space>
                Product
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
          {NAV_LINKS.map((link) => (
            <>
              <Link
                href={link.href}
                key={link.key}
                className="bold lg:text-xl sm:text-base text-white flexCenter cursor-pointer pb-1.5 transition-all hover:text-green-50"
              >
                {link.label}
              </Link>
            </>
          ))}
        </ul>

        <button className="bg-green-50 hover:bg-green-50 text-black-50 font-bold py-2 px-4 border-b-4 border-green-50 hover:border-green-50 hover:text-white duration-300 rounded">
          Start Free Trial
        </button>

        <Image
          src="/menu.svg"
          alt="menu"
          width={32}
          height={32}
          className="inline-block cursor-pointer lg:hidden"
        />
      </div>
    </nav>
  );
};

export default Navbar;
