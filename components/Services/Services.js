import React from "react";
import ServiceBuilder from "./ServiceBuilder";
import { BsDisplay } from "react-icons/bs";
import { IoDiamondOutline } from "react-icons/io5";
import { FaPiggyBank } from "react-icons/fa";
import { GiMaterialsScience } from "react-icons/gi";
import { IoNewspaperOutline } from "react-icons/io5";
import { IoAirplaneOutline } from "react-icons/io5";
function Services() {
  const services1 = [
    {
      icon: IoDiamondOutline,
      title: "Digital Design",
      desc: "Some quick example text to build on the card title and make up the bulk of the card's content. Moltin gives you the platform.",
    },
    {
      icon: BsDisplay,
      title: "Unlimited Colors",
      desc: "Credibly brand standards compliant users without extensible services. Anibh euismod tincidunt ut laoreet.",
    },
    {
      icon: FaPiggyBank,
      title: "Strategy Solutions",
      desc: "Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean necessary regelialia.",
    },
  ];
  const services2 = [
    {
      icon: GiMaterialsScience,
      title: "Awesome Support",
      desc: "It is a paradisematic country, in which roasted parts of sentences fly into your mouth leave for the far World.",
    },
    {
      icon: IoNewspaperOutline,
      title: "Truly Multipurpose",
      desc: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
    },
    {
      icon: IoAirplaneOutline,
      title: "Easy to customize",
      desc: "Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia.",
    },
  ];

  return (
    <>
      <section id="Services" className="py-[80px]">
        <div className="mx-auto sm:max-w-[600px] md:max-w-[760px] lg:max-w-[1010px] xl:max-w-[1280px]">
          <h1 className="text-center font-medium tracking-wide text-[1.75rem] pb-4">
            OUR SERVICES
          </h1>
          <div className="w-12 h-[0.125rem] mt-3 mx-auto bg-[#fb3e3e]"></div>
          <p className="pt-4 text-[#95a0ab] text-sm mb-4 text-center">
            We craft digital, graphic and dimensional thinking, to create
            category leading brand experiences that have meaning and add a value
            for our clients.
          </p>
          <div className="lg:flex">
            <ServiceBuilder services={services1} />
          </div>
          <div className="lg:flex mt-6">
            <ServiceBuilder services={services2} />
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
