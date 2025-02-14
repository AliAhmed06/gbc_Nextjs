import Image from "next/image";
import React from "react";

function ServicesSection() {
  return (
    <div className="container mx-auto max-w-6xl">
      <div className="text-center mb-12">
        <h2 className="text-[#4AC7EC] font-medium mb-2">Our service list</h2>
        <h3 className="text-3xl font-bold">What we are offering</h3>
      </div>

      <div className="grid gap-12 md:gap-16">
        {/* left */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="flex items-center justify-center md:justify-start">
            <Image
              src="/images/service1.png"
              alt="Code editor showing development environment"
              width={400}
              height={300}
              className="rounded-lg shadow-lg "
            />
          </div>
          <div className="order-1 md:order-2">
            <h3 className="text-[#4AC7EC] text-xl font-medium mb-4">
              Full stack development
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Full-stack development involves building both the front-end and
              back-end of web applications, ensuring seamless functionality,
              performance, and user experience.
            </p>
          </div>
        </div>

        {/* right */}
        <div className="grid md:grid-cols-2 gap-8 items-center justify-between">
          <div>
            <h3 className="text-[#4AC7EC] text-xl font-medium mb-4">
              Mobile application development
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Mobile app development involves designing and building
              applications for mobile devices, covering both the user interface
              and backend to ensure seamless functionality, performance, and
              user experience.
            </p>
          </div>
          <div className="flex items-center justify-center md:justify-end">
            <Image
              src="/images/service2.png"
              alt="Mobile devices showing application interface"
              width={400}
              height={300}
              className="rounded-lg shadow-lg "
            />
          </div>
        </div>

        {/* left */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="flex items-center justify-center md:justify-start">
            <Image
              src="/images/service3.png"
              alt="Code editor showing development environment"
              width={400}
              height={300}
              className="rounded-lg shadow-lg "
            />
          </div>
          <div className="order-1 md:order-2">
            <h3 className="text-[#4AC7EC] text-xl font-medium mb-4">
              WordPress Development
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Business process outsourcing (BPO) involves delegating tasks like
              customer support, dWordPress development involves creating and
              customizing websites using WordPress, including theme design,
              plugin development, and backend management to ensure
              functionality, performance, and user experience.ata entry, and
              back-office operations to external teams, improving efficiency,
              cost savings, and business focus.
            </p>
          </div>
        </div>

        {/* right */}
        <div className="grid md:grid-cols-2 gap-8 items-center justify-between">
          <div>
            <h3 className="text-[#4AC7EC] text-xl font-medium mb-4">
              Digital Marketing
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Digital marketing involves promoting brands and businesses online
              through strategies like content marketing, SEO, social media, and
              paid advertising to enhance visibility, engagement, and
              conversions.
            </p>
          </div>
          <div className="flex items-center justify-center md:justify-end">
            <Image
              src="/images/service4.png"
              alt="Mobile devices showing application interface"
              width={400}
              height={300}
              className="rounded-lg shadow-lg "
            />
          </div>
        </div>

        {/* left */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="flex items-center justify-center md:justify-start">
            <Image
              src="/images/service5.png"
              alt="Code editor showing development environment"
              width={400}
              height={300}
              className="rounded-lg shadow-lg "
            />
          </div>
          <div className="order-1 md:order-2">
            <h3 className="text-[#4AC7EC] text-xl font-medium mb-4">
              AI Systems Development
            </h3>
            <p className="text-gray-600 leading-relaxed">
              AI systems development involves designing and building intelligent
              solutions that process data, automate tasks, and enhance
              decision-making through machine learning, natural language
              processing, and predictive analytics.
            </p>
          </div>
        </div>

        {/* right */}
        <div className="grid md:grid-cols-2 gap-8 items-center justify-between">
          <div>
            <h3 className="text-[#4AC7EC] text-xl font-medium mb-4">
              Business Process Outsourcing
            </h3>
            <p className="text-gray-600 leading-relaxed">
              (BPO) involves delegating tasks like customer support, data entry,
              and back-office operations to external teams, improving
              efficiency, cost savings, and business focus.
            </p>
          </div>
          <div className="flex items-center justify-center md:justify-end">
            <Image
              src="/images/service6.png"
              alt="Mobile devices showing application interface"
              width={400}
              height={300}
              className="rounded-lg shadow-lg "
            />
          </div>
        </div>

        {/* left */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="flex items-center justify-center md:justify-start">
            <Image
              src="/images/service7.png"
              alt="Code editor showing development environment"
              width={400}
              height={300}
              className="rounded-lg shadow-lg "
            />
          </div>
          <div className="order-1 md:order-2">
            <h3 className="text-[#4AC7EC] text-xl font-medium mb-4">
              IT Services
            </h3>
            <p className="text-gray-600 leading-relaxed">
              IT services involve providing technology solutions such as
              software development, network management, cybersecurity, and
              technical support to enhance business operations, efficiency, and
              security.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesSection;
