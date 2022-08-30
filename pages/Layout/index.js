import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Services from "../../components/Services/Services";
import WebsiteDesc from "../../components/WebsiteDesc";
import Pricing from "../../components/Pricing/Pricing";
import Team from "../../components/Team/Team";
import Process from "../../components/Process/Process";
import Blog from "../../components/Blog/Blog";
import Testimonials from "../../components/Testimonials/Testimonials";
import GetStart from "../../components/GetStart";
import Contact from "../../components/Contact";
import Social from "../../components/Social";

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
