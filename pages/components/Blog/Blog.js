import React from "react";
import BlogBuilder from "./BlogBuilder";
import img1 from "../../../assets/images/blog/img-1.jpg";
import img2 from "../../../assets/images/blog/img-2.jpg";
import img3 from "../../../assets/images/blog/img-3.jpg";

const blogs = [
  {
    image: img1,
    category: "UI & UX Design",
    title: "Doing a cross country road trip",
    desc: "She packed her seven versalia, put her initial into the belt and made herself on the way..",
  },
  {
    image: img2,
    category: "Digital Marketing",
    title: "New exhibition at our Museum",
    desc: "Pityful a rethoric question ran over her cheek, then she continued her way.",
  },
  {
    image: img3,
    category: "Travelling",
    title: "Why are so many people..",
    desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
  },
];

function Blog() {
  return (
    <>
      <section className="bg-[#f8fbff] py-20">
        <div className="sm:max-w-[600px] md:max-w-[760px] lg:max-w-[1010px] xl:max-w-[1280px] px-3 mx-auto">
          <h1 className="text-center font-medium tracking-wide text-[1.75rem] pb-4">
            BLOG
          </h1>
          <div className="w-12 h-[0.125rem] mt-3 mx-auto bg-[#fb3e3e]"></div>
          <p className="pt-4 text-[#95a0ab] text-sm mb-4 text-center">
            Separated they live in Bookmarksgrove right at the coast of the
            Semantics, a large language ocean class at a euismod mus luctus
            quam.
          </p>
          <div className="mt-4">
            <BlogBuilder blogs={blogs} />
          </div>
        </div>
      </section>
    </>
  );
}

export default Blog;
