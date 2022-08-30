import React from "react";
import TestimonialsBuilder from "./TestimonialsBuilder";
//import images
import img2 from "../../assets/images/testimonials/user-2.jpg";
import img1 from "../../assets/images/testimonials/user-1.jpg";
import img3 from "../../assets/images/testimonials/user-3.jpg";

const clients = [
  {
    image: img2,
    title: "RUBEN REED ",
    subTitle: "Charleston",
    desc: "I feel confident imposing change on myself. It's a lot more fun progressing than looking back. That's why I need to throw curve balls.",
  },
  {
    image: img1,
    title: "MICHAEL P. HOWLETT ",
    subTitle: "Worcester",
    desc: "Our task must be to free ourselves by widening our circle of compassion to embrace all living creatures and the whole of nature and its beauty.",
  },
  {
    image: img3,
    title: "THERESA D. SINCLAIR",
    subTitle: "Lynchburg",
    desc: "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
  },
];

function Testimonials(props) {
  return (
    <>
      <section className="py-[80px]">
        <div className="mx-auto sm:max-w-[600px] md:max-w-[760px] lg:max-w-[1010px] xl:max-w-[1280px]">
          <h1 className="text-center font-medium tracking-wide text-[1.75rem] pb-4">
            WHAT THEY`VE SAID
          </h1>
          <div className="w-12 h-[0.125rem] mt-3 mx-auto bg-[#fb3e3e]"></div>
          <p className="pt-4 text-[#95a0ab] text-sm mb-4 text-center">
            The Big Oxmox advised her not to do so, because there were thousands
            of bad Commas, wild Question Marks and devious Semikoli.
          </p>
          <div className="mt-10 gap-5 lg:flex">
            <TestimonialsBuilder clients={clients} />
          </div>
        </div>
      </section>
    </>
  );
}

export default Testimonials;
