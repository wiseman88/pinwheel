"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import navigation from "@/constants/header";
import logo from "@/public/images/pinwheel.svg";

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="py-6">
      <nav className="container flex flex-row items-center justify-between lg:justify-center">
        <div>
          <Link href="/">
            <Image src={logo} alt="pinwheel" width={147} height={30} />
          </Link>
        </div>
        <ul className="hidden grow flex-row items-center justify-center lg:flex">
          {navigation.map((item, key) => (
            <li key={key} className="ml-[20px] first:ml-0">
              <Link
                href={item.path}
                className={`navlink ${pathname === item.path ? "active" : ""}`}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
        <div className="hidden lg:block">
          <Link href="/sing-in" className="btn btn-sm btn-white">
            Sign In
          </Link>
        </div>
        <button className="block lg:hidden">
          <svg
            className="-mx-1 h-8 w-8 text-gray-500"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            ></path>
          </svg>
        </button>
      </nav>
    </header>
  );
};

export default Header;
