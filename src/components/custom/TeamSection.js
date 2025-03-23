import Image from "next/image";
import React from "react";
import { IoLogoLinkedin } from "react-icons/io5";
import { team } from "./DATA";
import Link from "next/link";
import { useRouter } from "next/navigation";

function TeamSection() {
  const router = useRouter();
  return (
    <div className="container mx-auto max-w-6xl">
      <div className="text-center mb-12">
        <h2 className="text-[#4AC7EC] font-medium mb-2">Team</h2>
        <h3 className="text-3xl font-bold">Know about our people</h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {team.map((member, index) => (
          <div
            key={index}
            className="group cursor-pointer relative overflow-hidden rounded-2xl transition-all duration-300 hover:shadow-lg"
          >
            <Link href={member.url} target="_blank" className="block">
              <div className="aspect-square relative">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover bg-gray-500"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#4AC7EC]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </Link>
            <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <h4 className="text-white font-medium text-lg">{member.name}</h4>
              <p className="text-white/90 text-sm">{member.role}</p>
              {/* Separate <a> for external links */}
              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 text-white hover:text-white/80 transition-colors"
                  aria-label={`${member.name}'s LinkedIn profile`}
                >
                  <IoLogoLinkedin />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeamSection;
