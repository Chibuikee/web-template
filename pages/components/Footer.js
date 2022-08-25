import Image from "next/image";
import Link from "next/link";
import Payment from "../../assets/images/payment.png";
import Paperplane from "../../assets/images/paper-plane.svg";
function Footer() {
  return (
    <>
      <section className=" ">
        <div className=" flex">
          <div>
            <h2>DORSIN</h2>
            <ul>
              <li>Home</li>
              <li>About us</li>
              <li>Careers</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div>
            <h2>Information</h2>
            <ul>
              <li>Terms & Condition</li>
              <li>About us</li>
              <li>Jobs</li>
              <li>Bookmarks</li>
            </ul>
          </div>
          <div>
            <h2>Support</h2>
            <ul>
              <li>FAQ</li>
              <li>Contact</li>
              <li>Disscusion</li>
              <li></li>
            </ul>
          </div>
          <div>
            <h4>Subscribe</h4>
            <p>
              In an ideal world this text wouldn't exist, a client would
              acknowledge the importance of having web copy before the design
              starts.
            </p>
            <form className="subscribe">
              <input placeholder="Email" className="form-control" required />
              <Link href="#">
                <a className="submit">
                  <img src={Paperplane} alt="hi" />
                  <i className="pe-7s-paper-plane"></i>
                </a>
              </Link>
            </form>
          </div>
        </div>
        <div className="bg-[#2e313a] text-white">
          <div className="flex px-1.5 justify-between mx-auto max-w-[960px] box-border font-sans">
            <div className="">
              <p className="copy-rights text-muted">
                2022 © Dorsin - Themesbrand
              </p>
            </div>
            <div className="float-end pull-none">
              <Image alt="payment" src={Payment} width={150} height={36} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
