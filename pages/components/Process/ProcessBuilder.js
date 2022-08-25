import React from "react";
import { BsBullseye } from "react-icons/bs";
function ProcessBuilder({ processes }) {
  const len = processes ? processes.length : 0;
  return (
    <>
      <div className="flex">
        {(processes || []).map((process, key) => (
          <div key={key} lg={4} className={key + 1 === len ? "" : "plan-line"}>
            <process.icon size="3em" color="#fb3e3e" />
            <h4 className="pt-3">{process.title}</h4>
            <p className="text-muted">{process.desc}</p>
            <process.nicon size="3em" color="#fb3e3e" />
          </div>
        ))}
      </div>
    </>
  );
}

export default ProcessBuilder;
