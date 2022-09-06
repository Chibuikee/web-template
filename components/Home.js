import React, { useState } from "react";
import Link from "next/link";
// import ModalVideo from "react-modal-video";
// @import 'node_modules/react-modal-video/scss/modal-video.scss';

function Hero() {
  const styling1 = {
    backgroundImage: "URL(/assets/images/wave-shape/wave1.png)",
    height: "150px",
  };
  const styling2 = {
    backgroundImage: "URL(/assets/images/wave-shape/wave2.png)",
    height: "150px",
  };
  const styling3 = {
    backgroundImage: "URL(/assets/images/wave-shape/wave3.png)",
    height: "150px",
  };

  const [isOpen, setOpen] = useState(false);

  const opentoggle = () => {
    setOpen(!isOpen);
  };
  return (
    <>
      <section
        className="relative pt-[80px] h-[90vh] pb-[80px] lg:pt-[13.75rem] lg:pb-[9.375rem] "
        id="Home"
        style={{
          backgroundImage: "URL(/assets/images/bg-home.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        data-image-src="images/wave-shape/wave1.png"
      >
        <div className="absolute h-full w-full right-0 left-0 top-0 bottom-0 opacity-90 bg-gradient-to-r from-[rgb(81_45_168)] to-[rgb(113_30_114)] "></div>
        <div className="h-full relative">
          <div className="text-white text-center">
            <h1 className="text-[2rem] lg:text-[2.875rem] leading-[4rem] font-medium mb-2">
              We help startups launch their products
            </h1>
            <p className="pt-4 max-w-[90%] md:max-w-[600px] mx-auto text-xs md:text-[15px] leading-6">
              Etiam sed.Interdum consequat proin vestibulum class at.
            </p>
            <p className="play-shadow mt-4">
              <Link href="/layout2">
                <a
                  onClick={() => {
                    opentoggle();
                  }}
                  className="play-btn video-play-icon"
                >
                  <i className="mdi mdi-play text-center"></i>
                </a>
              </Link>
            </p>
          </div>
        </div>
        <div className="absolute h-[150px] z-[15] opacity-50 overflow-hidden left-0 right-0 bottom-0 m-auto">
          <div className="w-full h-full z-[15] overflow-hidden absolute opacity-50 bottom-[-1px]">
            <div
              className="absolute animate-[wavvy_3s] left-0 w-[200%] origin-[center_bottom] h-[100%] bg-[0_bottom] bg-[length:50%_100%] "
              style={styling1}
            ></div>
          </div>
          <div className="w-full h-full overflow-hidden z-10 absolute opacity-[0.75] bottom-[-1px]">
            <div
              className="absolute animate-[wavvy_10s_linear_infinite] left-0 w-[200%] origin-[center_bottom] h-[100%] bg-[0_bottom] bg-[length:50%_100%] "
              style={styling2}
            ></div>
          </div>
          <div className="w-full h-full z-[5] overflow-hidden absolute opacity-50 bottom-[-1px]">
            <div
              className="animate-[wavvy_15s_linear_infinite] absolute left-0 w-[200%] origin-[center_bottom] h-[100%] bg-[0_bottom] bg-[length:50%_100%] "
              style={styling3}
            ></div>
          </div>
        </div>

        {/* Render ModalSection Component for Modal */}
        {/* <ModalVideo
          channel="vimeo"
          isOpen={isOpen}
          videoId="287684225"
          onClose={() => setOpen(!isOpen)}
        /> */}
      </section>
    </>
  );
}

export default Hero;
