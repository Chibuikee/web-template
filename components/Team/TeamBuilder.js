import React from "react";
import Image from "next/image";
function TeamBox({ teams }) {
  return (
    <>
      <div className="md:grid md:grid-cols-2 lg:grid-cols-4 gap-5 ">
        {(teams || []).map((team, key) => (
          <div className="" key={key}>
            <div className="mx-auto relative md:w-[21rem] md:h-[21rem] lg:h-[13.5rem] lg:w-[13.5rem] rounded">
              <Image
                alt="team member image"
                src={team.image}
                width="216"
                height="216"
                layout="responsive"
              />
            </div>

            <h4 className="text-base pt-5 text-center mb-[7px]">
              {team.title}
            </h4>
            <p className="text-[#a8aeb4] text-center text-[13px] ">
              {team.desc}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

export default TeamBox;
