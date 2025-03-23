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
import Footer from "@/components/custom/Footer";

export default function Page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const b_t_animation = {
    hide: {
      opacity: 0,
      y: 300,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <motion.section
        className="px-6 lg:px-24  "
        initial="hide"
        whileInView="show"
        variants={b_t_animation}
      >
        <HeroSection />
      </motion.section>

      {/* Image Section */}
      <motion.section
        className="px-6 lg:px-24 py-16"
        initial="hide"
        whileInView="show"
        variants={b_t_animation}
      >
        <VideoSection />
      </motion.section>

      {/* Services Section */}
      <div id="services"></div>
      <motion.section
        className="w-full px-4  "
        initial="hide"
        whileInView="show"
        variants={b_t_animation}
      >
        <ServicesSection />
      </motion.section>

      {/* Team Section */}
      <motion.section
        className="w-full px-4 py-12 md:py-16 lg:py-24"
        initial="hide"
        whileInView="show"
        variants={b_t_animation}
      >
        <TeamSection />
      </motion.section>

      {/* Creative Solutions Section */}
      <motion.section
        className="w-full px-4 "
        initial="hide"
        whileInView="show"
        variants={b_t_animation}
      >
        <CreativeSolutionSection />
      </motion.section>

      {/* Insights Section */}
      <motion.section
        className="py-16"
        initial="hide"
        whileInView="show"
        variants={b_t_animation}
      >
        <InsightsSection />
      </motion.section>

      {/* Testimonial Section */}
      <motion.section
        initial="hide"
        whileInView="show"
        variants={b_t_animation}
      >
        <TestimonialCarousel />
      </motion.section>

      {/* FAQ Section */}
      <div id="faq"></div>
      <motion.section
        initial="hide"
        whileInView="show"
        variants={b_t_animation}
      >
        <FAQSection />
      </motion.section>

      {/* Contact Section */}
      <div id="contact"></div>
      <motion.section
        initial="hide"
        whileInView="show"
        variants={b_t_animation}
      >
        <ContactForm />
      </motion.section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
