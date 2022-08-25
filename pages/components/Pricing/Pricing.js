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
      <div>
        <h1>OUR PRICING</h1>
        <p>
          Call to action pricing table is really crucial to your for your
          business website. Make your bids stand-out with amazing options.
        </p>
        <div>
          <PricingBuilder pricings={pricings} />
        </div>
      </div>
    </>
  );
}

export default Pricing;
