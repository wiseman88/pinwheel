import Image from "next/image";

import logo from "@/public/images/pinwheel.svg";
import Link from "next/link";
import { FaFacebook, FaLinkedinIn, FaSkype, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-200/50">
      <div className="container">
        <div className="wrapper pb-10 pt-[52px]">
          <div className="footer-box">
            <Link href="/">
              <Image src={logo} alt="pinwheel" width={147} height={30} />
            </Link>
            <p className="mt-6">
              Lorem ipsum dolor sit sed dmi amet, consectetur adipiscing. Cdo
              tellus, sed condimentum volutpat.
            </p>
          </div>
          <div className="footer-box">
            <h6>Socials</h6>
            <p>themefisher@gmail.com</p>
            <ul className="social-icons">
              <li className="m-2 leading-[1]">
                <Link href="#">
                  <FaFacebook className="h-[21px] w-[19px] fill-gray-900" />
                </Link>
              </li>
              <li>
                <Link href="#">
                  <FaTwitter className="h-[15px] w-[19px] fill-gray-900" />
                </Link>
              </li>
              <li>
                <Link href="#">
                  <FaLinkedinIn className="h-[16px] w-[19px] fill-gray-900" />
                </Link>
              </li>
              <li>
                <Link href="#">
                  <FaSkype className="h-[19px] w-[18px] fill-gray-900" />
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-box">
            <h6>Quick Links</h6>
            <ul>
              <li>
                <Link href="/">About</Link>
              </li>
              <li>
                <Link href="/">Category</Link>
              </li>
              <li>
                <Link href="/">Testimonial</Link>
              </li>
              <li>
                <Link href="/">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="footer-box">
            <h6>Location & Contact</h6>
            <p>2118 Thornridge Cir. Syracuse, Connecticut 35624</p>
            <p>(704) 555-0127</p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="mx-auto border-t pb-10 pt-7 text-center">
          <p>
            Designed And Developed by{" "}
            <a href="https://themefisher.com/">Themefisher</a> | Distributed by{" "}
            <a href="https://themewagon.com/">Themewagon</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
