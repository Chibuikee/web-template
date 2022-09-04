import React from "react";
import { IoAirplaneOutline } from "react-icons/io";
function ServiceBuilder({ services }) {
  return (
    <>
      {(services || []).map((service, key) => (
        <div
          key={key}
          className="relative hover:top-[-8px] text-center pt-[14px] lg:px-9 basis-1/3"
        >
          <service.icon
            size="40"
            color="#fb3e3e"
            className="text-center mx-auto"
          />
          <h4 className="pt-4 mb-2 text-lg font-medium">{service.title}</h4>
          <p className="pt-4 mb-4 text-sm text-[#95a0ab] w-[70%] lg:w-full mx-auto">
            {service.desc}
          </p>
        </div>
      ))}
    </>
  );
}

export default ServiceBuilder;
