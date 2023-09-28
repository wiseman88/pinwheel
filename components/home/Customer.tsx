import Image from "next/image";

import userOne from "@/public/images/user-1.png";
import star from "@/public/icons/star.svg";
import starWhite from "@/public/icons/star-white.svg";

const Customer = () => {
  return (
    <div>
      <div className="my-16 rounded-xl bg-white px-3 pb-16 pt-6 text-center shadow">
        <div className="mx-auto -mt-12 h-[90px] w-[90px] -translate-y-5 rounded-full bg-gradient-to-b from-pink-400 to-yellow-400 p-0.5">
          <Image src={userOne} alt="Bessie Cooper" width={156} height={156} />
        </div>
        <h4 className="mb-2 text-[1.55rem] font-bold leading-[1.25]">
          Bessie Cooper
        </h4>
        <p className="mb-4 text-gray-600">Apple inc ltd</p>
        <p>
          Our platform helps build secure onboarding authentica experiences &
          engage your users. We build .
        </p>
        <div className="mt-6 flex items-center justify-center space-x-2.5">
          <Image src={star} alt="star" width={25} height={24} />
          <Image src={star} alt="star" width={25} height={24} />
          <Image src={star} alt="star" width={25} height={24} />
          <Image src={star} alt="star" width={25} height={24} />
          <Image src={starWhite} alt="star" width={25} height={24} />
        </div>
      </div>
    </div>
  );
};

export default Customer;
