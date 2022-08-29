import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [userInfo, setUserInfo] = useState();
  function onSubmit(data) {
    setUserInfo(data);
    console.log(data);
  }
  return (
    <>
      <section className="py-20">
        <div className="mt-4 px-4 mx-auto sm:max-w-[600px] md:max-w-[760px] lg:max-w-[1010px] xl:max-w-[1280px]">
          <div>
            <h1 className="text-center font-medium tracking-wide text-[1.75rem] pb-4">
              GET IN TOUCH
            </h1>
            <div className="w-12 h-[0.125rem] mt-3 mx-auto bg-[#fb3e3e]"></div>
            <p className="pt-4 text-[#95a0ab] text-sm mb-4 text-center">
              We thrive when coming up with innovative ideas but also understand
              that a smart concept should be supported with measurable results.
            </p>
          </div>
          <div className="lg:flex justify-between">
            <div className="mt-4 pt-4 basis-1/3">
              <p className="mt-4">
                <span className="text-[#212529]">Office Address 1:</span>
                <br />
                <span className=" text-[#95a0ab] mt-2">
                  4461 Cedar Street Moro, AR 72368
                </span>
              </p>
              <p className="mt-4">
                <span className="text-[#212529]">Office Address 2:</span>
                <br />
                <span className="text-[#95a0ab] mt-2">
                  2467 Swick Hill Street <br />
                  New Orleans, LA 70171
                </span>
              </p>
              <p className="mt-4">
                <span className="text-[#212529]">Working Hours:</span>
                <br />
                <span className="text-[#95a0ab] mt-2">9:00AM To 6:00PM</span>
              </p>
            </div>

            <div className="basis-2/3 px-3">
              <pre> {JSON.stringify(userInfo, undefined, 2)} </pre>
              <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                <div className="md:flex space-y-4 md:space-y-0 md:gap-4 w-full">
                  <div className="basis-1/2">
                    {/* <label className="reg-label-name">NAME</label> */}
                    <input
                      className="appearance-none w-full block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                      placeholder="Your name*"
                      {...register("Name", { required: true })}
                    ></input>
                    {errors.Name && (
                      <p className="text-red-500 text-xs italic">
                        Please input your Name
                      </p>
                    )}
                  </div>
                  <div className="basis-1/2">
                    {/* <label className="reg-label-email">EMAIL</label> */}
                    <input
                      className="appearance-none w-full block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                      type="email"
                      name="Email"
                      placeholder="Your email*"
                      {...register("Email", {
                        required: true,
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
                          message: "this is not a valid email",
                        },
                      })}
                    ></input>
                    {errors.Email && (
                      <p className="text-red-500 text-xs italic">
                        Please input your Email
                      </p>
                    )}
                  </div>{" "}
                </div>

                <div className="">
                  {/* <label className="reg-label-SUBJECT">SUBJECT</label> */}

                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                    type="text"
                    name="Subject"
                    placeholder="Your Subject..."
                    {...register("Subject", {
                      required: false,
                    })}
                  ></input>
                  {/* {errors.Subject && <p>Please input your Subject</p>} */}
                </div>

                <div className="reg-field-Message">
                  {/* <label className="reg-label-Message">Message</label> */}
                  <textarea
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                    name="Message"
                    placeholder="Your Message..."
                    {...register("Message", {
                      required: false,
                    })}
                  ></textarea>
                  {/* {errors.Message && <p>Please input your message</p>} */}
                </div>
                <div className="flex justify-end">
                  <button className="bg-[#fb3e3e] text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
