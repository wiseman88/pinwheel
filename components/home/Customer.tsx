import { renderGrayStars, renderYellowStars } from "@/utils/renderStars";
import Image from "next/image";
import { StaticImageData } from "next/image";

interface CustomerProps {
  person: string;
  thumbnail: StaticImageData;
  company: string;
  text: string;
  stars: number;
}

const Customer: React.FC<CustomerProps> = ({
  person,
  thumbnail,
  company,
  text,
  stars,
}) => {
  return (
    <div>
      <div className="my-16 rounded-xl bg-white px-3 pb-16 pt-6 text-center shadow">
        <div className="mx-auto -mt-12 h-[90px] w-[90px] -translate-y-5 rounded-full bg-gradient-to-b from-pink-400 to-yellow-400 p-0.5">
          <Image src={thumbnail} alt="Bessie Cooper" width={156} height={156} />
        </div>
        <h4 className="mb-2 text-[1.55rem] font-bold leading-[1.25]">
          {person}
        </h4>
        <p className="mb-4 text-gray-600">{company}</p>
        <p>{text}</p>
        <div className="mt-6 flex items-center justify-center space-x-2.5">
          {renderYellowStars(stars)}
          {renderGrayStars(stars)}
        </div>
      </div>
    </div>
  );
};

export default Customer;
