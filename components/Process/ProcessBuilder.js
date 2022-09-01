import React from "react";
import { BsBullseye } from "react-icons/bs";
function ProcessBuilder({ processes }) {
  return (
    <>
      <div className="flex mx-auto gap-10 md:max-w-[900px] ">
        {(processes || []).map((process, index, key) => (
          <div key={key} className="flex basis-1/3 relative">
            <div className="flex flex-col w-full p-[12px] items-center">
              <process.icon size="3em" color="#fb3e3e" />
              <h4 className="pt-3 text-lg text-center  font-medium">
                {process.title}
              </h4>
              <p className="text-sm text-center text-[#95a0ab]">
                {process.desc}
              </p>
            </div>
            {index == 2 ? (
              <></>
            ) : (
              <div className="flex nowrap items-center absolute top-[20px] right-[-100px] ">
                <span>.................</span>
                <process.nicon size="3em" color="#fb3e3e" />
                <span>.................</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default ProcessBuilder;
