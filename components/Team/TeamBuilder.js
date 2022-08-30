import React from "react";
import Image from "next/image";
function TeamBox({ teams }) {
  return (
    <>
      <div className="flex ">
        {(teams || []).map((team, key) => (
          <div className="basis-1/4" key={key}>
            <div className="team-member">
              <Image
                alt="team member image"
                src={team.image}
                className="img-fluid rounded"
                width={216}
                height={216}
              />
            </div>

            <h4 className="text-bold">{team.title}</h4>
            <p className="text-uppercase team-designation">{team.desc}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default TeamBox;
