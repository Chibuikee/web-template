import React from "react";
import Link from "next/link";
import { GiArcheryTarget } from "react-icons/gi";
import { BsPen } from "react-icons/bs";
import { ImProfile } from "react-icons/Im";
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
    icon: ImProfile,
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
      <section className="section bg-light">
        <h1>WORK PROCESS</h1>
        <p>
          In an ideal world this website wouldn't exist, a client would
          acknowledge the importance of having web copy before the design
          starts.
        </p>

        <div>
          <div lg={6} className="text-center process-left-icon-1">
            <i className="pe-7s-angle-right"></i>
          </div>
          <div lg={6} className="text-center process-left-icon-2">
            <i className="pe-7s-angle-right"></i>
          </div>
        </div>
        <div className="mt-5">
          <ProcessBuilder processes={processes} />
          <div className="text-center mx-auto">
            <Link href="#">
              <a className="btn btn-primary waves-light waves-effect mt-5">
                <button>Get Started </button>{" "}
                <i className="mdi mdi-arrow-right"></i>
              </a>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Process;
