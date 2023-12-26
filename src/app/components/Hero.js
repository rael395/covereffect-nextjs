"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import AOS from "aos";
import "aos/dist/aos.css";

const heroContent = {
  text: {
    subheading: "Welcome to FamSec",
    heading: "Protecting Families, Securing Futures",
    description:
      "We understand that protecting your loved ones is of utmost importance. That's why we are dedicated to providing comprehensive solutions tailored to your family's unique needs. Our expert team is committed to creating a solid foundation of security and peace of mind for you and your loved ones.",
  },
  images: {
    img1: "/images/hero-img-1-min.jpg",
    img2: "/images/hero-img-2-min.jpg",
    img3: "/images/hero-img-3-min.jpg",
    img4: "/images/hero-img-4-min.jpg",
    img5: "/images/hero-img-5-min.jpg",
  },
};

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "slide",
      once: true,
    });
  });

  return (
    <section className="pt-20 pb-20">
      <div className="container px-4 mx-auto">
        <div className="lg:flex justify-between items-center">
          <div className="lg:w-5/12 mb-10 lg:mb-0">
            {heroContent.text.subheading && (
              <span
                className="inline-block py-0.5 pl-3 text-heading font-semibold relative mb-7 before:content-[''] before:absolute before:w-2/3 before:bg-yellowLight before:left-0 before:top-0 before:bottom-0 before:z-[-1]"
                data-aos="fade-up">
                {heroContent.text.subheading}
              </span>
            )}
            {heroContent.text.heading && (
              <h1
                className="text-4xl lg:text-5xl font-bold text-heading mb-7"
                data-aos="fade-up"
                data-aos-delay="100">
                {heroContent.text.heading}
              </h1>
            )}
            {heroContent.text.description && (
              <p
                className="leading-relaxed text-body mb-10"
                data-aos="fade-up"
                data-aos-delay="200">
                {heroContent.text.description}
              </p>
            )}

            <div
              className="flex space-x-3"
              data-aos="fade-up"
              data-aos-delay="300">
              <Link
                href="#"
                className="py-4 px-5 bg-primary text-white rounded-lg duration-300 transition-all ease-in-out relative top-0 hover:bg-[#134761] hover:shadow-lg hover:-top-1">
                Get started
              </Link>
              <Link
                href="#"
                className="py-4 px-5 bg-secondary text-white rounded-lg duration-300 transition-all ease-in-out relative top-0 hover:bg-[#179792] hover:shadow-lg hover:-top-1">
                How it works?
              </Link>
            </div>
          </div>
          <div className="lg:w-6/12 space-y-2">
            <div className="flex space-x-2 items-stretch">
              <div className="w-8/12">
                {heroContent.images.img1 && (
                  <Image
                    src={heroContent.images.img1}
                    width={397}
                    height={406}
                    alt="joefreycodes.com"
                    className="object-cover h-full w-full rounded-2xl"
                    data-aos="fade-right"
                    data-aos-delay="100"
                  />
                )}
              </div>
              <div className="w-4/12 self-end space-y-2 ">
                <div className="grid grid-cols-2 gap-2">
                  {heroContent.images.img2 && (
                    <div>
                      <Image
                        src={heroContent.images.img2}
                        width={437}
                        height={437}
                        alt="joefreycodes.com"
                        className="object-cover h-full w-full rounded-2xl"
                        data-aos="fade-down"
                        data-aos-delay="200"
                      />
                    </div>
                  )}

                  <div
                    className="bg-yellowLight rounded-2xl rounded-tr-[200px]"
                    data-aos="fade-in"
                    data-aos-delay="400"></div>
                </div>
                {heroContent.images.img3 && (
                  <div>
                    <Image
                      src={heroContent.images.img3}
                      width={374}
                      height={392}
                      alt="joefreycodes.com"
                      className="object-cover h-full w-full rounded-2xl"
                      data-aos="fade-left"
                      data-aos-delay="300"
                    />
                  </div>
                )}
              </div>
            </div>

            <div className="flex space-x-2">
              <div className="w-4/12">
                <div className="grid grid-cols-2 gap-2">
                  <div
                    className="bg-greenLight rounded-2xl rounded-bl-[200px]"
                    data-aos="fade-ip"
                    data-aos-delay="500"></div>
                  {heroContent.images.img4 && (
                    <div>
                      <Image
                        src={heroContent.images.img4}
                        width={394}
                        height={394}
                        alt="joefreycodes.com"
                        className="object-cover h-full w-full rounded-2xl"
                        data-aos="fade-up"
                        data-aos-delay="100"
                      />
                    </div>
                  )}
                </div>
              </div>

              <div className="w-5/12">
                {heroContent.images.img5 && (
                  <Image
                    src={heroContent.images.img5}
                    width={446}
                    height={495}
                    alt="joefreycodes.com"
                    className="object-cover h-full w-full rounded-2xl"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
