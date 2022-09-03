import React from "react";
import BlogBuilder from "./BlogBuilder";

const blogs = [
  {
    image: "/assets/images/blog/img-1.jpg",
    category: "UI & UX Design",
    title: "Doing a cross country road trip",
    desc: "She packed her seven versalia, put her initial into the belt and made herself on the way..",
  },
  {
    image: "/assets/images/blog/img-2.jpg",
    category: "Digital Marketing",
    title: "New exhibition at our Museum",
    desc: "Pityful a rethoric question ran over her cheek, then she continued her way.",
  },
  {
    image: "/assets/images/blog/img-3.jpg",
    category: "Travelling",
    title: "Why are so many people..",
    desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
  },
];

function Blog() {
  return (
    <>
      <section id="Blog" className="bg-[#f8fbff] py-20">
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
