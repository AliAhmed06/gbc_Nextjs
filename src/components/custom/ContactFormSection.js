"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

const formSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  service: z.string().min(2, "Service is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function ContactForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      service: "",
      message: "",
    },
  });

  function onSubmit(values) {
    console.log(values);
  }

  return (
    <section className="w-full py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-[720px] space-y-8">
          <div className="flex flex-col items-center space-y-3 text-center">
            <span className="text-[#5BB5A9] text-sm">
              Are you ready to start your project?
            </span>
            <h2 className="text-2xl font-semibold md:text-[28px]">
              Let&apos;s discuss about your amazing idea.
            </h2>
            <p className="text-sm text-[#6B6B6B]">
              Don&apos;t worry, it is secure and confidential.
            </p>
          </div>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full h-12 px-4 bg-[#F9F9F9] rounded-md border border-[#E5E7EB] text-sm placeholder:text-[#A594FD] focus:outline-none focus:ring-2 focus:ring-[#5BB5A9] focus:border-transparent"
              {...form.register("email")}
            />
            <input
              type="text"
              placeholder="Service"
              className="w-full h-12 px-4 bg-[#F9F9F9] rounded-md border border-[#E5E7EB] text-sm placeholder:text-[#A594FD] focus:outline-none focus:ring-2 focus:ring-[#5BB5A9] focus:border-transparent"
              {...form.register("service")}
            />
            <textarea
              placeholder="Message"
              className="w-full h-[150px] p-4 bg-[#F9F9F9] rounded-md border border-[#E5E7EB] text-sm placeholder:text-[#A594FD] focus:outline-none focus:ring-2 focus:ring-[#5BB5A9] focus:border-transparent resize-none"
              {...form.register("message")}
            />
            <button
              type="submit"
              className="h-12 px-8 text-white  font-bold bg-[#5BB5A9] rounded-[10px] hover:bg-[#4CA599] transition-colors text-lg"
            >
              Contact
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
