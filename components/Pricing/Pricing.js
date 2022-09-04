import React from "react";
import PricingBuilder from "./PricingBuilder";
function Pricing() {
  const pricings = [
    {
      title: "Economy",
      price: 9.9,
      duration: "MONTH",
      features: [
        { title: "Bandwidth", value: "1GB" },
        { title: "Onlinespace ", value: "50MB" },
        { title: "Support", value: "No" },
        { title: "Domain", value: "1" },
        { title: "Hidden Fees", value: "No" },
      ],
    },
    {
      title: "DELUXE",
      price: 19.9,
      duration: "Mo",
      isActive: true,
      features: [
        { title: "Bandwidth", value: "10GB" },
        { title: "Onlinespace ", value: "500MB" },
        { title: "Support", value: "No" },
        { title: "Domain", value: "10" },
        { title: "Hidden Fees", value: "No" },
      ],
    },
    {
      title: "ULTIMATE",
      price: 29.9,
      duration: "Mo",
      features: [
        { title: "Bandwidth", value: "100GB" },
        { title: "Onlinespace ", value: "2 GB" },
        { title: "Support", value: "Yes" },
        { title: "Domain", value: "Unlimited" },
        { title: "Hidden Fees", value: "No" },
      ],
    },
  ];
  return (
    <>
      <section id="Pricing" className="py-[80px]">
        <div className="w-[90%] mx-auto sm:max-w-[600px] md:max-w-[760px] lg:max-w-[1010px] xl:max-w-[1280px]">
          <h1 className="text-center font-medium tracking-wide text-[1.75rem] pb-4">
            OUR PRICING
          </h1>
          <div className="w-12 h-[0.125rem] mt-3 mx-auto bg-[#fb3e3e]"></div>
          <p className="pt-4 text-[#95a0ab] text-sm mb-4 text-center">
            Call to action pricing table is really crucial to your for your
            business website. Make your bids stand-out with amazing options.
          </p>
          <div className="mt-[3rem]">
            <PricingBuilder pricings={pricings} />
          </div>
        </div>
      </section>
    </>
  );
}

export default Pricing;
