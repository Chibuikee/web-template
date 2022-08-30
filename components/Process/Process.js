import React from "react";
import Link from "next/link";
import { GiArcheryTarget } from "react-icons/gi";
import { BsPen } from "react-icons/bs";
// import { ImProfile } from "react-icons/Im";
import { IoIosArrowDroprightCircle } from "react-icons/io";

import ProcessBuilder from "./ProcessBuilder";

const processes = [
  {
    icon: BsPen,
    title: "Tell us what you need",
    desc: "The Big Oxmox advised her not to do so.",
    nicon: IoIosArrowDroprightCircle,
  },
  {
    icon: BsPen,
    title: "Get free quotes",
    desc: "Little Blind Text didn't listen.",
    nicon: IoIosArrowDroprightCircle,
  },
  {
    icon: GiArcheryTarget,
    title: "Deliver high quality product",
    desc: "When she reached the first hills.",
    nicon: IoIosArrowDroprightCircle,
  },
];

function Process(props) {
  return (
    <>
      <section className="py-[80px] bg-[#f8fbff]">
        <div className="mx-auto sm:max-w-[600px] md:max-w-[760px] lg:max-w-[1010px] xl:max-w-[1280px]">
          <h1 className="text-center font-medium tracking-wide text-[1.75rem] pb-4">
            WORK PROCESS
          </h1>
          <div className="w-12 h-[0.125rem] mt-3 mx-auto bg-[#fb3e3e]"></div>
          <p className="pt-4 text-[#95a0ab] text-sm mb-4 text-center">
            In an ideal world this website wouldnt exist, a client would
            acknowledge the importance of having web copy before the design
            starts.
          </p>
          <div className="mt-5">
            <ProcessBuilder processes={processes} />
            <div className="text-center mx-auto">
              <Link href="#">
                <a className="mt-5">
                  <button className="bg-[#fb3e3e] text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Get Started
                  </button>
                  <i className="mdi mdi-arrow-right"></i>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Process;
