import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <footer className="bg-[#4FB8B5] text-white py-16">
      <div className="px-6 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Image
                src={"/images/logo.png"}
                alt="Logo"
                height={70}
                width={70}
              />
            </div>
            <p className="text-sm">
              Global Business Concerns is a software and IT company. We do
              business process outsourcing as well. Our goal is to exceed our
              customer&apos;s expectations by fulfilling customer&apos;s
              satisfaction. We help clients across the globe (including USA,
              Europe, Australia, Asia, and UAE) pursue their Digital
              Transformation goals through smart Software Development.
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
              <li>info@globalbusinessconcern.com</li>
              <li>+92 323 4227053</li>
              {/* <li>123 Street, City, Country</li> */}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
