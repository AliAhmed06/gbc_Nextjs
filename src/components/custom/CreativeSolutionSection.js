import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { projects } from "./DATA";
import Link from "next/link";

function CreativeSolutionSection() {
  return (
    <div className="container mx-auto max-w-6xl">
      <div className="text-center mb-12">
        <h2 className="text-[#4AC7EC] font-medium mb-2">Projects</h2>
        <h3 className="text-3xl font-bold">Our creative solution</h3>
      </div>

      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <img src="/images/solution1.png" alt="" className="w-full" />
          <img src="/images/solution2.png" alt="" className="w-full" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
          <img src="/images/solution3.png" alt="" className="w-full" />
          <img src="/images/solution4.png" alt="" className="w-full" />
          <div className="flex items-center justify-center">
            <Link
              href={"#"}
              className="bg-[#5bb1b9] text-white  rounded-full hover:bg-opacity-80 h-[50px] w-[200px] flex items-center justify-center "
            >
              View Our Portfolio
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreativeSolutionSection;
