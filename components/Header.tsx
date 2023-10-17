"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import navigation from "@/constants/header";
import logo from "@/public/images/pinwheel.svg";
import Menu from "./svg/Menu";
import Close from "./svg/Close";
import { useState } from "react";

const Header = () => {
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white py-6 lg:bg-transparent">
      <nav className="container flex flex-row flex-wrap items-center justify-between lg:justify-center">
        <div className="order-0">
          <Link href="/">
            <Image src={logo} alt="pinwheel" width={147} height={30} />
          </Link>
        </div>
        <ul
          className={`order-2 ${
            isMenuOpen ? "block" : "hidden"
          } grow basis-full flex-row items-center justify-center text-center lg:flex lg:basis-0`}
        >
          {navigation.map((item, key) => (
            <li key={key} className="first:ml-0 lg:ml-[20px]">
              <Link
                href={item.path}
                className={`navlink ${pathname === item.path ? "active" : ""}`}
              >
                {item.title}
              </Link>
            </li>
          ))}
          <Link
            href="/sing-in"
            className="btn btn-sm btn-white mt-3.5 block lg:hidden"
          >
            Sign In
          </Link>
        </ul>
        <div className="order-2 hidden lg:block">
          <Link href="/sing-in" className="btn btn-sm btn-white">
            Sign In
          </Link>
        </div>
        <button className="order-1 block lg:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <Close /> : <Menu />}
        </button>
      </nav>
    </header>
  );
};

export default Header;
