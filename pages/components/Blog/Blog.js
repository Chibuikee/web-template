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
      <section className="section bg-light pt-5" id="blog">
        <h1>BLOG</h1>
        <p>
          Separated they live in Bookmarksgrove right at the coast of the
          Semantics, a large language ocean class at a euismod mus luctus quam.
        </p>
        <div className="mt-4">
          <BlogBuilder blogs={blogs} />
        </div>
      </section>
    </>
  );
}

export default Blog;
