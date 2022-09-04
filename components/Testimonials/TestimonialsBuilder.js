import React from "react";
import Image from "next/image";

const TestimonialsBox = ({ clients }) => {
  return (
    <>
      {(clients || []).map((client, key) => (
        <div key={key} className="relative hover:top-[-8px] mt-[80px]">
          <div
            className="border border-solid border-[#ecf0f5] rounded-lg shadow-lg"
            key={key}
          >
            <div className="w-[58px] mx-auto mt-[-30px] h-[58px] border border-solid rounded-full border-[#ecf0f5] px-1 py-1 ">
              <Image
                src={client.image}
                alt="client"
                className="rounded-full"
                width={58}
                height={58}
                // layout="fill" // required
                // objectFit="cover"
              />
            </div>
            <p className="text-center px-6 italic text-sm text-[#95a0ab] pt-[60px] pb-[30px] ">
              “{client.desc}”
            </p>
          </div>
          <h5 className="text-center text-sm text-uppercase pt-3">
            {client.title}-
            <span className="inline font-medium text-[#95a0ab] text-capitalize">
              {client.subTitle}
            </span>
          </h5>
        </div>
      ))}
    </>
  );
};

export default TestimonialsBox;
