import React from "react";
import Link from "next/link";
import Image from "next/image";
function WebsiteDesc() {
  return (
    <>
      <section className="relative py-[6.27rem] bg-[url('/assets/images/img-1.jpg')] bg-cover bg-no-repeat bg-center">
        <div className="absolute h-full w-full right-0 left-0 top-0 bottom-0 opacity-90 bg-gradient-to-r from-[rgb(81_45_168)] to-[rgb(113_30_114)] "></div>
        <div className="mx-auto sm:max-w-[600px] md:max-w-[760px] lg:max-w-[1010px] xl:max-w-[1280px]">
          <div className="relative text-center">
            <h1 className="text-3xl text-[#ffffff] ">
              Build your dream website today
            </h1>
            <p className="pt-3 w-[90%] max-w-[37.5rem] mx-auto text-base text-[rgba(255,255,255,0.7)] ">
              But nothing the copy said could convince her and so it didn`t take
              long until a few insidious Copy Writers ambushed her.
            </p>
            <button className="bg-white font-normal rounded-md border-solid border-[1px] text-[#212529] py-[0.625rem] px-5 mt-6 mb-12">
              View Plan & pricing
            </button>
          </div>
          <div className="h-6 w-full absolute right-0 bottom-0 left-0">
            <Image
              alt="dorsin"
              src="/assets/images/bg-pattern.png"
              layout="fill"
            />
          </div>
        </div>
      </section>
    </>
  );
}
// .home-desc {
//   color: rgba(255, 255, 255, 0.7);
//   font-size: 15px;
//   max-width: 600px;
//   margin: 0 auto;
// }
export default WebsiteDesc;
