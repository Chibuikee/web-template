import React, { useState } from "react";
import Link from "next/link";
// import { FaBars } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";

function NavBar() {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <>
      <section className="sticky z-50 top-0 py-3 bg-[#212529]">
        <div className="overflow-hidden flex justify-between w-[90vw] px-1.5 mx-auto max-w-[960px] lg:max-w-[1010px] xl:max-w-[1280px] box-border font-sans text-white">
          <div className="flex justify-between max-w-5xl gap-10">
            <h1 className="basis-2/6  text-xl tracking-widest font-bold self-center">
              <Link href="https://www.linkedin.com/in/chibuike-ewenike-960599172/">
                PRUBICON
              </Link>
            </h1>
          </div>
          <ul
            className={` ${
              isMobile ? "" : "right-[900px] "
            } basis-3/6  text-base h-screen lg:h-[initial] absolute  lg:static text-center lg:w-[initial] w-screen  right-0 top-[50px] bg-[black] lg:bg-inherit lg:flex`}
          >
            {["Home", "Services", "Features", "Pricing", "Team", "Blog"].map(
              (item, key) => (
                <li
                  key={key}
                  onClick={() => setIsMobile(!isMobile)}
                  className="flex-1 mx-[10px] py-3.5 px-2 text-[#ffffff99] "
                >
                  <Link href={"#" + item}>{item}</Link>
                </li>
              )
            )}
          </ul>
          <div onClick={() => setIsMobile(!isMobile)} className="lg:hidden">
            {isMobile ? <HiX size="30px" /> : <HiMenu size="30px" />}
          </div>
          <div className=" hidden lg:flex">
            <button className="px-5 self-center py-2 inline font-medium tracking-wide text-sm rounded-full bg-[#fb3e3e]">
              <Link href="#Contact">
                <span>Get Started</span>
              </Link>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default NavBar;
