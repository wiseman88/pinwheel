import Image from "next/image";

import star from "@/public/icons/star.svg";
import starWhite from "@/public/icons/star-white.svg";

const renderYellowStars = (stars: number) => {
  const starElements = [];

  for (let index = 0; index < stars; index++) {
    starElements.push(
      <Image key={index} src={star} alt="star" width={25} height={24} />,
    );
  }

  return starElements;
};

const renderGrayStars = (stars: number) => {
  const grayStars = 5 - stars;
  const starElements = [];

  for (let index = 0; index < grayStars; index++) {
    starElements.push(
      <Image key={index} src={starWhite} alt="star" width={25} height={24} />,
    );
  }

  return starElements;
};

export { renderYellowStars, renderGrayStars };
