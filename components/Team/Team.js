import React from "react";
import TeamBuilder from "./TeamBuilder";
const teams = [
  {
    image: "/assets/images/team/img-1.jpeg",
    title: "Chibuike Ewenike",
    desc: "CEO",
  },
  {
    image: "/assets/images/team/img-2.jpg",
    title: "Elaine Stclair",
    desc: "DESIGNER",
  },
  {
    image: "/assets/images/team/img-3.jpg",
    title: "Wanda Arthur",
    desc: "DEVELOPER",
  },
  {
    image: "/assets/images/team/img-4.jpg",
    title: "Joshua Stemple",
    desc: "MANAGER",
  },
];

function Team() {
  return (
    <>
      <section id="Team" className="py-[80px] bg-[#f8fbff]">
        <div className="mx-auto px-10 sm:max-w-[600px] md:max-w-[760px] lg:max-w-[1010px] xl:max-w-[1280px]">
          <h1 className="text-center font-medium tracking-wide text-[1.75rem] pb-4">
            BEHIND THE PEOPLE
          </h1>
          <div className="w-12 h-[0.125rem] mt-3 mx-auto bg-[#fb3e3e]"></div>
          <p className="pt-4 text-[#95a0ab] text-sm mb-4 text-center">
            It is a long established fact that create category leading brand
            experiences a reader will be distracted by the readable content of a
            page when looking at its layout.
          </p>
          <TeamBuilder teams={teams} />
        </div>
      </section>
    </>
  );
}

export default Team;
