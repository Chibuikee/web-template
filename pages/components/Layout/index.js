import React from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import Services from "../Services/Services";
import WebsiteDesc from "../WebsiteDesc";
import Pricing from "../Pricing/Pricing";
import Team from "../Team/Team";
import Process from "../Process/Process";
import Blog from "../Blog/Blog";
import Testimonials from "../Testimonials/Testimonials";
import GetStart from "../GetStart";
import Contact from "../Contact";
import Social from "../Social";

function Layout(props) {
  return (
    <>
      {/* import Header */}
      <Navbar />

      {/* import Services */}
      <Services />

      {/* import WebsiteDesc */}
      <WebsiteDesc />

      {/* import Pricing */}
      <Pricing />

      {/* import Team */}
      <Team />

      {/* import Process */}
      <Process />

      {/* imort Testimonials */}
      <Testimonials />

      {/* import GetStart */}
      <GetStart />

      {/* import Blog */}
      <Blog />

      {/* import Contact */}
      <Contact />

      {/* import Social Icon */}
      <Social />

      {/* import Footer */}
      <Footer />
    </>
  );
}
export default Layout;
