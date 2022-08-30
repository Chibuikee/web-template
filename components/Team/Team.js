import React from "react";
import TeamBuilder from "./TeamBuilder";

import img1 from "../../assets/images/team/img-1.jpeg";
import img2 from "../../assets/images/team/img-2.jpg";
import img3 from "../../assets/images/team/img-3.jpg";
import img4 from "../../assets/images/team/img-4.jpg";

const teams = [
  {
    image: img1,
    title: "Chibuike Ewenike",
    desc: "CEO",
  },
  {
    image: img2,
    title: "Elaine Stclair",
    desc: "DESIGNER",
  },
  {
    image: img3,
    title: "Wanda Arthur",
    desc: "DEVELOPER",
  },
  {
    image: img4,
    title: "Joshua Stemple",
    desc: "MANAGER",
  },
];

function Team() {
  return (
    <>
      <section className="section pt-4" id="team">
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
      </section>
    </>
  );
}

export default Team;
