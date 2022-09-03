import React from "react";
import Link from "next/link";
import Image from "next/image";
import { IoIosArrowRoundForward } from "react-icons/io";
const BlogBuilder = ({ blogs }) => {
  return (
    <>
      <section>
        <div className="lg:flex gap-5">
          {(blogs || []).map((blog, key) => (
            <div
              key={key}
              className="basis-1/3 mt-4 relative hover:top-[-8px] "
            >
              <Image
                src={blog.image}
                width={296}
                height={197}
                // className="max-w-full h-auto"
                alt="blog"
                layout="responsive"
              />
              <div>
                <h5 className="mt-6 mb-2 ">{blog.category}</h5>
                <h4 className="mt-4 text-lg font-medium text-[#212529]">
                  <Link href="#">
                    <a className="blog-title">{blog.title} </a>
                  </Link>
                </h4>
                <p className="text-[#95a0ab] text-[14.4px] mb-4">{blog.desc}</p>
                <div className="mt-3">
                  <Link href="#">
                    <a className="text-[#fb3e3e] text-sm">
                      Read More
                      <IoIosArrowRoundForward className="inline text-[15px] ml-1" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default BlogBuilder;
