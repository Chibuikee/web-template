import React from "react";
import Link from "next/link";
import Image from "next/image";
import { IoIosArrowRoundForward } from "react-icons/io";
const BlogBuilder = ({ blogs }) => {
  return (
    <>
      <div className="flex">
        {(blogs || []).map((blog, key) => (
          <div key={key} className="blog-box mt-4 hover-effect">
            <Image
              src={blog.image}
              width={296}
              height={197}
              className="img-fluid"
              alt="blog"
            />
            <div>
              <h5 className="mt-4 text-muted">{blog.category}</h5>
              <h4 className="mt-3 blog-title">
                <Link href="#">
                  <a className="blog-title">{blog.title} </a>
                </Link>
              </h4>
              <p className="text-muted">{blog.desc}</p>
              <div className="mt-3">
                <Link href="#">
                  <a className="read-btn">
                    Read More
                    <IoIosArrowRoundForward className="mdi mdi-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default BlogBuilder;
