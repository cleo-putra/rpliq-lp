import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className=" relative z-30 py-5 bg-black-50">
      <div className="padding-container max-container flex w-full flexBetween gap-14">
        <Link href="/">
          <Image src="/rpliq-logo.png" alt="logo" width={74} height={29} />
        </Link>

        <ul className="hidden h-full gap-12 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              className="bold text-white flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
            >
              {link.label}
            </Link>
          ))}
        </ul>

        <button class="bg-green-50 hover:bg-green-50 text-black-50 font-bold py-2 px-4 border-b-4 border-green-50 hover:border-green-50 hover:text-white duration-300 rounded">
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
