import React from "react";
import TeamBuilder from "./TeamBuilder";

import img1 from "../../../assets/images/team/img-1.jpeg";
import img2 from "../../../assets/images/team/img-2.jpg";
import img3 from "../../../assets/images/team/img-3.jpg";
import img4 from "../../../assets/images/team/img-4.jpg";

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
        <h1>BEHIND THE PEOPLE</h1>
        <p>
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
