import React from "react";
import Link from "next/link";
const PricingBox = ({ pricings }) => {
  return (
    <>
      <div className="flex gap-6">
        {(pricings || []).map((pricing, key) => (
          <div
            className="text-center py-[50px] px-[40px] bg-white basis-1/3  border border-solid border-[#ecf0f5] rounded-lg shadow-lg"
            key={key}
          >
            <h4 className="text-uppercase">{pricing.title}</h4>
            <h1 className="pt-1 font-medium text-[36px] ">${pricing.price}0</h1>
            <h6 className="text-uppercase text-muted">
              Billing Per {pricing.duration}
            </h6>
            <hr />

            <div className="flex flex-col mt-[1.5rem]">
              {pricing.features.map((feature, key) => (
                <p key={key} className="mb-4 pt-1">
                  {feature.title}
                  <b className="text-primary">{feature.value}</b>
                </p>
              ))}
            </div>
            <Link href="#">
              <a className="mt-6">
                <button className="bg-[#fb3e3e] text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                  Join Now
                </button>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default PricingBox;
