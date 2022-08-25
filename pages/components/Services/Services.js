import React from "react";
import ServiceBuilder from "./ServiceBuilder";
function Services() {
  const services1 = [
    {
      icon: "pe-7s-diamond",
      title: "Digital Design",
      desc: "Some quick example text to build on the card title and make up the bulk of the card's content. Moltin gives you the platform.",
    },
    {
      icon: "pe-7s-display2",
      title: "Unlimited Colors",
      desc: "Credibly brand standards compliant users without extensible services. Anibh euismod tincidunt ut laoreet.",
    },
    {
      icon: "pe-7s-piggy",
      title: "Strategy Solutions",
      desc: "Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean necessary regelialia.",
    },
  ];
  const services2 = [
    {
      icon: "pe-7s-science",
      title: "Awesome Support",
      desc: "It is a paradisematic country, in which roasted parts of sentences fly into your mouth leave for the far World.",
    },
    {
      icon: "pe-7s-news-paper",
      title: "Truly Multipurpose",
      desc: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
    },
    {
      icon: "pe-7s-plane",
      title: "Easy to customize",
      desc: "Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia.",
    },
  ];

  return (
    <>
      <div>
        <h2>OUR SERVICES</h2>
        <p>
          We craft digital, graphic and dimensional thinking, to create category
          leading brand experiences that have meaning and add a value for our
          clients.
        </p>
        <div className="flex">
          <ServiceBuilder services={services1} />
        </div>
        <div className="flex">
          <ServiceBuilder services={services2} />
        </div>
      </div>
    </>
  );
}

export default Services;
