import React from "react";
import Link from "next/link";
import Image from "next/image";
import { IoIosArrowRoundForward } from "react-icons/io";

function GetStart() {
  return (
    <>
      <section className="relative py-[6.27rem] bg-[url('/assets/images/img-2.jpg')] bg-cover bg-no-repeat bg-center">
        <div className="absolute h-full w-full right-0 left-0 top-0 bottom-0 opacity-90 bg-gradient-to-r from-[rgb(81_45_168)] to-[rgb(113_30_114)] "></div>
        <div className="relative text-center">
          <h1 className="font-medium tracking-wide text-[1.75rem] text-white">
            Lets Get Started
          </h1>
          <div className="w-12 h-[0.125rem] mt-6 mx-auto bg-[#fb3e3e]"></div>
          <div className="section-title-border mt-4 bg-white"></div>
          <p className="pt-6 text-[#FFFFFF] w-[90%] max-w-[37.5rem] mx-auto text-base mb-4 text-center">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
          <Link href="#">
            <a>
              <button className="bg-white font-normal rounded-md border-solid border-[1px] text-[#212529] py-[0.625rem] px-5 mt-6 mb-12">
                Get Started
                <IoIosArrowRoundForward className="inline" />
              </button>
            </a>
          </Link>
        </div>

        <div className="h-6 w-full absolute right-0 bottom-0 left-0">
          <Image
            alt="pattern"
            src="/assets/images/bg-pattern-light.png"
            layout="fill"
          />
        </div>
      </section>
    </>
  );
}

export default GetStart;
