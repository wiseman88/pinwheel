"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import navigation from "@/constants/header";
import logo from "@/public/images/pinwheel.svg";
import Menu from "./svg/Menu";

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="bg-white py-6 lg:bg-transparent">
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
          <Menu />
        </button>
      </nav>
    </header>
  );
};

export default Header;
