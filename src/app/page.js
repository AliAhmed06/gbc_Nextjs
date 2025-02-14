"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoMenuOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io";
import { Button } from "@/components/ui/button";
import { FaRegClock } from "react-icons/fa6";
import TestimonialCarousel from "@/components/custom/Testimonials";
import FAQSection from "@/components/custom/FAQSection";
import ContactForm from "@/components/custom/ContactFormSection";
import Navbar from "@/components/custom/Navbar";
import HeroSection from "@/components/custom/HeroSection";
import VideoSection from "@/components/custom/VideoSection";
import ServicesSection from "@/components/custom/ServicesSection";
import TeamSection from "@/components/custom/TeamSection";
import CreativeSolutionSection from "@/components/custom/CreativeSolutionSection";
import InsightsSection from "@/components/custom/InsightsSection";

export default function Page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="px-6 lg:px-24  ">
        <HeroSection />
      </section>

      {/* Image Section */}
      <section className="px-6 lg:px-24 py-16">
        <VideoSection />
      </section>

      {/* Services Section */}
      <section className="w-full px-4  ">
        <ServicesSection />
      </section>

      {/* Team Section */}
      <section className="w-full px-4 py-12 md:py-16 lg:py-24">
        <TeamSection />
      </section>

      {/* Creative Solutions Section */}
      <section className="w-full px-4 ">
        <CreativeSolutionSection />
      </section>

      {/* Insights Section */}
      <section className="py-16">
        <InsightsSection />
      </section>

      {/* Testimonial Section */}
      <TestimonialCarousel />

      {/* FAQ Section */}
      <FAQSection />

      {/* Contact Section */}
      <ContactForm />

      {/* Footer */}
      <footer className="bg-[#4FB8B5] text-white py-16">
        <div className="px-6 lg:px-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-white rounded-full"></div>
                <span className="font-bold text-xl">GDC</span>
              </div>
              <p className="text-sm">
                Brief company description or tagline goes here.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-4">Services</h3>
              <ul className="space-y-2">
                <li>Web Development</li>
                <li>Mobile Apps</li>
                <li>Cloud Solutions</li>
                <li>AI & Machine Learning</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-4">Office</h3>
              <ul className="space-y-2">
                <li>About Us</li>
                <li>Contact</li>
                <li>Blog</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-4">Contact us</h3>
              <ul className="space-y-2">
                <li>contact@example.com</li>
                <li>+1 234 567 890</li>
                <li>123 Street, City, Country</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
