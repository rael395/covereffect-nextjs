"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiBars3 } from "react-icons/hi2";
import { GrClose } from "react-icons/gr";
import { BiChevronRight } from "react-icons/bi";
import logo from "../../../public/images/logo.svg";

const navigationMenu = [
  {
    href: "#",
    label: "Home",
  },
  {
    href: "#",
    label: "How we work",
  },
  {
    href: "#",
    label: "Our mission",
  },
  {
    href: "#",
    label: "About",
  },
  {
    href: "#",
    label: "Contact",
  },
];

const Navigation = () => {
  let wHeight = null;
  let wWidth = null;
  if (typeof window !== "undefined") {
    wHeight = window.innerHeight;
    wWidth = window.innerWidth;
  }
  const [navOpen, setNavOpen] = useState(false);

  const [dimensions, setDimensions] = useState({
    height: wHeight,
    width: wWidth,
  });

  const mobileMenuHandler = () => {
    setNavOpen(!navOpen);
  };

  useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });

      if (dimensions.width > 768 && navOpen) {
        setNavOpen(false);
      }
    }

    window.addEventListener("resize", handleResize);

    return (_) => {
      window.removeEventListener("resize", handleResize);
    };
  });
  return (
    <>
      <header className="py-7">
        <div className="container px-4 mx-auto">
          <div className="flex justify-between items-center">
            <div>
              <Link href="/">
                <Image src={logo} width={157} height={30} alt="Logo" />
              </Link>
            </div>

            <div className="hidden lg:block">
              <ul className="flex space-x-7">
                {navigationMenu.map((item, idx) => (
                  <li key={item.label}>
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center">
              <Link
                href="#"
                className="py-4 px-5 bg-primary hidden lg:inline-block text-white rounded-lg duration-300 transition-all ease-in-out relative top-0 hover:bg-[#134761] hover:shadow-lg hover:-top-1">
                Get started
              </Link>

              <button className="block lg:hidden" onClick={mobileMenuHandler}>
                <HiBars3 className="text-3xl" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div
        className={
          navOpen
            ? "py-0 block fixed w-screen z-[9999]"
            : "py-0 hidden fixed w-screen z-[9999]"
        }>
        <div
          className="h-screen w-screen z-[999] top-0 fixed bg-black bg-opacity-50"
          onClick={mobileMenuHandler}></div>

        <div className="bg-white w-[380px] top-0 right-0 z-[9999] h-screen fixed">
          <div className="h-14 px-10 border-b flex items-center">
            <button
              onClick={mobileMenuHandler}
              className="flex items-center space-x-3">
              <GrClose /> <span>Close</span>
            </button>
          </div>
          <div className="h-[calc(100%-0px)]  py-3 px-10 pb-20 overflow-y-scroll scroll-smooth">
            <ul className="block mb-7">
              {navigationMenu.map((item, idx) => (
                <li key={item.label}>
                  {/* <Link href={item.href} className="py-2 block">
                    {item.label}
                  </Link> */}
                  <Link
                    href={item.href}
                    className="group flex items-center py-2 duration-300 transition-all ease-in-out hover:text-primary">
                    <span>{item.label}</span>
                    <span className="left-2 relative duration-300 transition-all ease-in-out opacity-0 group-hover:opacity-100 group-hover:left-3">
                      <BiChevronRight className="text-xl" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              href="#"
              className="py-4 px-5 bg-primary inline-block text-white rounded-lg duration-300 transition-all ease-in-out relative top-0 hover:bg-[#134761] hover:shadow-lg hover:-top-1">
              Get started
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
