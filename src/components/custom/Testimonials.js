"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";

// Sample testimonial data
const testimonials = [
  {
    id: 1,
    name: "Chief Operating Officer",
    role: "Supplyme Corp",
    image: "/images/team1.png",
    quote:
      "I have had the pleasure of working with Irtiza and his team on a recent project, and I couldn’t be more impressed with their expertise and dedication. From the initial concept to the final product, the team demonstrated a high level of professionalism and technical proficiency.",
  },
  {
    id: 2,
    name: "CEO",
    role: "S.A. Hamid & Co. ",
    image: "/images/team2.png",
    quote:
      "Irtiza is a seasoned software engineer, and I have had the privilege of knowing him for a long time. He’s not just an old friend but also a true expert in his field. What sets him apart is not just his technical prowess but also his exceptional humility and unwavering commitment to his work.",
  },
];

export default function TestimonialCarousel() {
  const [api, setApi] = useState();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="w-full ">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="text-center mb-12">
            <h2 className="text-[#4AC7EC] font-medium mb-2">Testimonial</h2>
            <h3 className="text-3xl font-bold">
              See valuable feedback from our clients
            </h3>
          </div>
        </div>
        <div className="mx-auto  max-w-4xl">
          <Carousel
            setApi={setApi}
            plugins={[
              Autoplay({
                delay: 5000,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id}>
                  <Card className="border-0 shadow-none">
                    {/* <CardContent className="relative grid gap-6 p-6 sm:grid-cols-[180px_1fr] md:gap-8 md:p-8"> */}
                    <CardContent className="relative grid gap-6 p-6  md:gap-8 md:p-8">
                      {/* <div className="relative aspect-square h-auto max-h-[220px] w-[220px] overflow-hidden rounded-lg">
                        <Image
                          src={testimonial.image}
                          alt={`${testimonial.name}'s testimonial`}
                          className="object-cover"
                          fill
                          sizes="180px"
                        />
                      </div> */}
                      <div className="flex flex-col justify-center space-y-4 w-[80%] mx-auto">
                        {/* <Link
                          href="#"
                          className="inline-flex w-fit items-center gap-2 text-sm  hover:text-primary text-[#74AFB8]"
                        >
                          View project
                          <ExternalLink className="h-4 w-4" />
                        </Link> */}
                        <blockquote className="text-lg text-muted-foreground">
                          {`${testimonial.quote}`}
                        </blockquote>
                        <div className="space-y-1">
                          <div className="font-semibold text-[#74AFB8]">
                            {testimonial.name}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {testimonial.role}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2" />
            <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2" />
          </Carousel>
          <div className="mt-4 flex justify-center gap-2">
            {Array.from({ length: count }).map((_, index) => (
              <Button
                key={index}
                variant="outline"
                size="icon"
                className={`h-2 w-2 rounded-full p-0 ${
                  index === current ? "bg-primary" : "bg-muted"
                }`}
                onClick={() => api?.scrollTo(index)}
              >
                <span className="sr-only">Go to slide {index + 1}</span>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
