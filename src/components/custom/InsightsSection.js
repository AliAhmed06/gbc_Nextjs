import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaRegArrowAltCircleRight, FaRegClock } from "react-icons/fa";

function InsightsSection() {
  return (
    <div className="container px-4 mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-[#4AC7EC] font-medium mb-2">Blogs</h2>
        <h3 className="text-3xl font-bold">Check this valuable insights</h3>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Featured Post */}
        <Link
          href="/"
          className="block group relative overflow-hidden rounded-lg transition-transform hover:scale-[1.02]"
        >
          <div className="relative aspect-[4/3] w-full">
            <Image
              src="/images/blog1.png"
              alt="Featured blog post"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
            <h3 className="text-white text-xl font-semibold mb-2">
              Revolutionizing Development: Unveiling the Secrets Behind Our
              Latest Software Solution
            </h3>
            <div className="flex items-center gap-4">
              <span className="text-white/80 text-sm flex items-center gap-1">
                <FaRegClock />4 minutes
              </span>
              <span className="text-white/80 text-sm">1 month ago</span>
            </div>
          </div>
        </Link>

        {/* Right Column Posts */}
        <div className="space-y-6">
          {[
            {
              title:
                "Unlocking Innovation: The Journey of Cutting-Edge Software Solutions",
              image: "/images/blog2.png",
              time: "8 minutes",
              date: "1 month ago",
            },
            {
              title:
                "Navigating the Digital Frontier: Insights from Our Software Agency's Latest Projects",
              image: "/images/blog3.png",
              time: "4 minutes",
              date: "2 months ago",
            },
            {
              title:
                "Fostering the Creativity and Craftsmanship of Our Software Agency's Team",
              image: "/images/blog4.png",
              time: "7 minutes",
              date: "2 months ago",
            },
          ].map((post, index) => (
            <Link key={index} href="/" className="flex gap-6 group items-start">
              <div className="relative aspect-[4/3] w-40 shrink-0 overflow-hidden rounded-lg">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-gray-900 group-hover:text-sky-500 transition-colors">
                  {post.title}
                </h3>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <FaRegClock />

                    {post.time}
                  </span>
                  <span>{post.date}</span>
                </div>
              </div>
            </Link>
          ))}
          <Link
            href={"#"}
            className="flex items-center gap-3 hover:underline text-[#564FCC]"
          >
            Read More Blogs <FaRegArrowAltCircleRight />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default InsightsSection;
