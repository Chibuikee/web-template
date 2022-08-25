import React from "react";
import Link from "next/link";
const PricingBox = ({ pricings }) => {
  return (
    <>
      <div className="flex">
        {(pricings || []).map((pricing, key) => (
          <div
            className={
              pricing.isActive
                ? "text-center  bg-white basis-1/3"
                : "text-center hover-effect basis-1/3"
            }
            key={key}
          >
            <h4 className="text-uppercase">{pricing.title}</h4>
            <h1>${pricing.price}0</h1>
            <h6 className="text-uppercase text-muted">
              Billing Per {pricing.duration}
            </h6>
            <hr />

            <div className="plan-features mt-4">
              {pricing.features.map((feature, key) => (
                <p key={key}>
                  {feature.title}
                  <b className="text-primary">{feature.value}</b>
                </p>
              ))}
            </div>
            <Link href="#">
              <a className="btn btn-primary waves-effect waves-light mt-4">
                Join Now
              </a>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default PricingBox;
