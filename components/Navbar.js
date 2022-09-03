import React from "react";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
function NavBar() {
  return (
    <>
      <section className="sticky z-50 top-0 py-2.5 bg-[#212529]">
        <div className="flex justify-around px-1.5 mx-auto max-w-[960px] box-border font-sans text-white">
          <h1 className="basis-1/6 text-xl tracking-widest font-bold self-center">
            DORSIN
          </h1>
          <div className="lg:hidden">
            <FaBars size="30px" />
          </div>
          <ul className="basis-4/6 text-base hidden lg:flex">
            {[
              "Home",
              "Services",
              "Features",
              "Pricing",
              "Team",
              "Blog",
              "Contact",
            ].map((item, key) => (
              <li key={key} className="flex-1 mx-[10px] py-3.5 px-2">
                <Link href={"#" + item}>{item}</Link>
              </li>
            ))}
          </ul>
          <div className=" hidden lg:flex">
            <button className="px-5 self-center py-2 inline font-medium tracking-wide text-sm rounded-full bg-[#fb3e3e]">
              <span>Try it Free</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default NavBar;
