import Image from "next/image";
import Link from "next/link";

import banner from "@/public/images/banner-img.png";
import sales from "@/public/images/sales-by-country.png";
import collaboration from "@/public/images/collaboration.png";
import check from "@/public/icons/checkmark-circle.svg";
import intro from "@/public/images/intro-thumbnail.png";
import bannerShape from "@/public/images/banner-shape.svg";
import featureShape from "@/public/images/feature-shape.svg";

import styles from "@/app/(root)/Home.module.css";
import solutions from "@/constants/home";
import Customer from "@/components/home/Customer";

const Home = () => {
  return (
    <>
      <section className="section relative">
        <div className="container">
          <div className="wrapper items-center">
            <div className="lg:w-1/2 lg:px-4">
              <h1>Scale design & dev operations with Avocode Enterprise</h1>
              <p className="mt-6 text-gray-500">
                A fully integrated suite of authentication & authoriz products,
                Stytch’s platform removes the headache of.
              </p>
              <Link href="#" className="btn btn-white mt-8">
                Download The Theme
              </Link>
            </div>
            <div className="lg:w-1/2 lg:px-4">
              <Image
                src={banner}
                alt="banner"
                width={603}
                height={396}
                className="w-full object-contain"
              />
            </div>
          </div>
        </div>
        <Image
          src={bannerShape}
          alt="banner-shape"
          width={463}
          height={435}
          className="absolute -top-28 right-0 -z-[1] w-full max-w-[30%]"
        />
      </section>
      <section className="section relative">
        <div className="container">
          <div className="wrapper text-center lg:justify-between lg:text-start">
            <div className="lg:w-5/12">
              <h2>The Highlighting Part Of Our Solution</h2>
            </div>
            <div className="mt-6 lg:mt-0 lg:w-5/12">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                egestas Werat viverra id et aliquet. vulputate egestas
                sollicitudin .
              </p>
            </div>
          </div>
          <div className={styles.solutions}>
            {solutions.map((solution, key) => (
              <div key={key} className={styles.solution}>
                <h3>{solution.title}</h3>
                <p>{solution.content}</p>
                <span>
                  <Image
                    alt="Live Caption"
                    src={solution.icon}
                    width={solution.width}
                    height={solution.height}
                    className="icon"
                  />
                </span>
              </div>
            ))}
          </div>
        </div>
        <Image
          src={featureShape}
          alt="feature-shape"
          width={63}
          height={126}
          className="absolute left-0 top-0 -z-[1] -translate-y-1/2"
        />
      </section>
      <section className="section">
        <div className="container">
          <div className="wrapper">
            <div className="lg:order-2 lg:w-7/12">
              <Image src={sales} alt="sales" width={810} height={558} />
            </div>
            <div className="mt-6 lg:order-1 lg:mt-0 lg:w-5/12">
              <h2>Prevent failure from to impacting your reputation</h2>
              <p className="mt-4">
                Our platform helps you build secure onboarding authentication
                experiences that retain and engage your users. We build the
                infrastructure, you can.
              </p>
            </div>
          </div>
          <div className="wrapper">
            <div className="lg:w-7/12">
              <Image
                src={collaboration}
                alt="collaboration"
                width={738}
                height={551}
              />
            </div>
            <div className="mt-6 lg:mt-0 lg:w-5/12">
              <h2>Accept payments any country in this whole universe</h2>
              <p className="mt-4">
                Donec sollicitudin molestie malesda. Donec sollitudin molestie
                malesuada. Mauris pellentesque nec, egestas non nisi. Cras
                ultricies ligula sed
              </p>
              <ul className="mt-6 lg:-ml-4">
                <li className="mb-2 flex items-center rounded px-4">
                  <Image
                    src={check}
                    alt="check"
                    width={19}
                    height={18}
                    className="mr-3"
                  />
                  Supporting more than 119 country world
                </li>
                <li className="mb-2 flex items-center rounded px-4">
                  <Image
                    src={check}
                    alt="check"
                    width={19}
                    height={18}
                    className="mr-3"
                  />
                  Open transaction with more than currencies
                </li>
                <li className="mb-2 flex items-center rounded px-4">
                  <Image
                    src={check}
                    alt="check"
                    width={19}
                    height={18}
                    className="mr-3"
                  />
                  Customer Service with 79 languages
                </li>
              </ul>
            </div>
          </div>
          <div className="wrapper">
            <div className="lg:order-2 lg:w-7/12">
              <Image
                src={intro}
                alt="intro"
                width={529}
                height={323}
                className="w-full"
              />
            </div>
            <div className="mt-6 lg:order-1 lg:mt-0 lg:w-5/12">
              <h2>Accountability that works for you</h2>
              <p className="mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                egestas Werat viverra id et aliquet. vulputate egestas
                sollicitudin.
              </p>
              <Link href="#" className="btn btn-white mt-6">
                About Us
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="wrapper justify-between">
            <div className="lg:w-6/12">
              <h2>Our customers have nice things to say about us</h2>
            </div>
            <div className="mt-4 lg:mt-0 lg:w-4/12">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                egestas Werat viverra id et aliquet. vulputate egestas
                sollicitudin .
              </p>
            </div>
          </div>
          {/* Carousel */}
          <div className="wrapper mt-10">
            <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Customer />
              <Customer />
              <Customer />
            </div>
            {/* navigation dots */}
          </div>
          <div className="flex flex-row items-center justify-center gap-2">
            <span className="inline-block h-[14px] w-[14px] rounded-full bg-orange-600"></span>
            <span className="inline-block h-[14px] w-[14px] rounded-full bg-gray-300"></span>
            <span className="inline-block h-[14px] w-[14px] rounded-full bg-gray-300"></span>
          </div>
        </div>
      </section>
      <section className="px-5 py-20 xl:py-[120px]">
        <div className="container">
          <div className={`wrapper ${styles.cta}`}>
            <div className="lg:w-11/12">
              <div className="wrapper">
                <div className="lg:w-7/12">
                  <h2 className="h1 text-white">
                    Helping teams in the world with focus
                  </h2>
                  <Link href="#" className="btn btn-white mt-8">
                    Download Theme
                  </Link>
                </div>
                <div className="mt-8 lg:mt-0 lg:w-5/12">
                  <p className="text-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Morbi egestas Werat viverra id et aliquet. vulputate egestas
                    sollicitudin .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
