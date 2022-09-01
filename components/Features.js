import Image from "next/image";
function Features() {
  return (
    <>
      <section className="bg-[#f8fbff] py-[80px]">
        <div className="lg:flex mx-auto sm:max-w-[600px] md:max-w-[760px] lg:max-w-[1010px] xl:max-w-[1280px]">
          <div className="text-[#95a0ab] lg:w-[41.66666667%]">
            <h1 className="mb-[25px] leading-9 text-2xl text-black">
              A digital web design studio creating modern & engaging online
              experiences
            </h1>
            <p className="mb-4 text-[0.9rem]">
              Separated they live in Bookmarksgrove right at the coast of the
              Semantics, a large language ocean. A small river named Duden flows
              by their place and supplies it with the necessary regelialia.
            </p>
            <ul className="mt-4 text-base">
              <li
                before=""
                className="py-2 pl-5 relative before:content-[attr(before)] before:w-[0.438rem] before:h-[0.438rem] before:absolute before:top-[16px] before:left-0 before:rounded-full before:bg-[#fb3e3e]"
              >
                We put a lot of effort in design.
              </li>
              <li
                before=""
                className="py-2 pl-5 relative before:content-[attr(before)] before:w-[0.438rem] before:h-[0.438rem] before:absolute before:top-[16px] before:left-0 before:rounded-full before:bg-[#fb3e3e]"
              >
                The most important ingredient of successful website.
              </li>
              <li
                before=""
                className="py-2 pl-5 relative before:content-[attr(before)] before:w-[0.438rem] before:h-[0.438rem] before:absolute before:top-[16px] before:left-0 before:rounded-full before:bg-[#fb3e3e]"
              >
                Sed ut perspiciatis unde omnis iste natus error sit.
              </li>
              <li
                before=""
                className="py-2 pl-5 relative before:content-[attr(before)] before:w-[0.438rem] before:h-[0.438rem] before:absolute before:top-[16px] before:left-0 before:rounded-full before:bg-[#fb3e3e]"
              >
                Submit Your Organization.
              </li>
            </ul>
            <button className="bg-[#fb3e3e] text-white py-2 px-4 rounded focus:outline-none mt-6">
              Learn More
            </button>
          </div>
          <div className="px-3 ">
            <div className="ml-9 ">
              <Image
                src="/assets/images/online-world.svg"
                width="500"
                height="393"
                alt="Phone"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Features;
