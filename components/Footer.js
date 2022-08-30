import Image from "next/image";
import Link from "next/link";
import { IoPaperPlane } from "react-icons/io5";
import { useForm } from "react-hook-form";

function Footer() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  function onSubmit(data) {
    console.log(data);
  }
  const links = [
    {
      title: "DORSIN",
      child: [
        { link: "#", title: "Home" },
        { link: "#", title: "About us" },
        { link: "#", title: "Careers" },
        { link: "#", title: "Contact us" },
      ],
    },
    {
      title: "Information",
      child: [
        { link: "#", title: "Terms & Condition" },
        { link: "#", title: "About us" },
        { link: "#", title: "Jobs" },
        { link: "#", title: "Bookmarks" },
      ],
    },
    {
      title: "Support",
      child: [
        { link: "#", title: "FAQ" },
        { link: "#", title: "Contact" },
        { link: "#", title: "Disscusion" },
      ],
    },
  ];

  return (
    <>
      <section className="bg-[#212529] box-border">
        <div className="px-4 mx-auto sm:max-w-[600px] md:max-w-[760px] lg:max-w-[1010px] xl:max-w-[1280px] py-12 lg:flex">
          {links.map((item, key) => (
            <div key={key} className="basis-1/4 mt-6 px-3 ">
              <h2 className="text-white font-medium text-[1.126rem] mb-2">
                {item.title}
              </h2>
              <ul className="mt-6">
                {item.child.map((item) => (
                  <li className="pt-2 text-[#98A0AA] text-sm" key={key}>
                    {item.title}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="basis-1/4 px-3">
            <h4 className="text-white mb-2">Subscribe</h4>
            <p className="text-[#98A0AA] text-sm">
              In an ideal world this text wouldnt exist, a client would
              acknowledge the importance of having web copy before the design
              starts.
            </p>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="my-4 relative">
                <input
                  placeholder="Email"
                  className="py-1.5 pl-5 w-full pr-12 bg-[#2e313a]"
                  {...register("Email", { required: true })}
                />

                <a className="absolute right-4 top-2 ">
                  <IoPaperPlane size={20} color="#acacac" />
                </a>

                {errors.Email && (
                  <p className="text-red-500 text-xs italic">
                    Please input your Email
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
        <div className="bg-[#2e313a]">
          <div className="flex px-7 justify-between items-center font-sans py-4 text-white mx-auto max-w-[960px] lg:max-w-[1280px] ">
            <div className="">
              <p className="copy-rights text-muted">
                2022 © Chibs - Themesbrand
              </p>
            </div>
            <div className="float-end pull-none">
              <Image
                alt="payment"
                src="/assets/images/payment.png"
                width={150}
                height={36}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
