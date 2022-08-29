import React from "react";
import Link from "next/link";
import Image from "next/image";
import BbPatternLight from "../../assets/images/bg-pattern-light.png";
import { IoIosArrowRoundForward } from "react-icons/io";

function GetStart() {
  return (
    <>
      <section className="section section-lg bg-get-start">
        <div className="bg-overlay">
          <h1 className="get-started-title text-white">Lets Get Started</h1>
          <div className="section-title-border mt-4 bg-white"></div>
          <p className="section-subtitle font-secondary text-white text-center pt-4">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
          <Link href="#">
            <a className="btn btn-white waves-effect mt-3 mb-4">
              Get Started
              <IoIosArrowRoundForward className="mdi mdi-arrow-right" />
            </a>
          </Link>
        </div>
        <div className="bg-pattern-effect">
          <Image alt="pattern" src={BbPatternLight} width={750} height={406} />
        </div>
      </section>
    </>
  );
}

export default GetStart;
