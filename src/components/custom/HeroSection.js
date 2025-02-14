import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

function HeroSection() {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-12">
      <div>
        <h1 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight">
          Where <span className="text-[#4FB8B5]">Technology</span>
          <br />
          Meets Ingenuity.
        </h1>
        <div className="flex justify-between lg:justify-start lg:space-x-16 mb-8">
          <div>
            <p className="text-3xl lg:text-4xl font-bold">35+</p>
            <p className="text-sm text-gray-500">Projects</p>
          </div>
          <div>
            <p className="text-3xl lg:text-4xl font-bold">15+</p>
            <p className="text-sm text-gray-500">Clients</p>
          </div>
          <div>
            <p className="text-3xl lg:text-4xl font-bold">99%</p>
            <p className="text-sm text-gray-500">Success</p>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <Link
            href={"#"}
            className="bg-[#5bb1b9] text-white py-3 px-8 rounded-full hover:bg-opacity-80"
          >
            Book a free call
          </Link>
          <Link
            href={"#"}
            className="flex items-center gap-3 hover:underline text-[#564FCC]"
          >
            See Projects <FaRegArrowAltCircleRight />
          </Link>
        </div>
      </div>
      <div>
        <Image
          src="/images/hero.png"
          alt="Hero"
          width={600}
          height={400}
          className="rounded-2xl w-full"
        />
      </div>
    </div>
  );
}

export default HeroSection;
