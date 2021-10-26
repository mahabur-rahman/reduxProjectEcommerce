import React from "react";
import "./footer.scss";
import {
  FaFacebook,
  FaLinkedinIn,
  FaGooglePlusG,
  FaDribbble,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <section id="footer">
        <div className="container mx-auto">
          <div className="flex flex-wrap text-center">
            <div className="2xl:w-fll xl:w-full lg:w-full md:w-full sm:w-full w-full">
              <div className="footerContent">
                <div className="footer_logo">
                  <img src="" alt="" />
                  <p>Lorem ipsum dolor sit amet.</p>
                  <div className="social_link">
                    <ul className="flex justify-center mt-5">
                      <li className="mx-3">
                        <a href="www.facebook.com">
                          <FaFacebook className="text-2xl" />
                        </a>
                      </li>
                      <li className="mx-3">
                        <a href="www.facebook.com">
                          <FaLinkedinIn className="text-2xl" />
                        </a>
                      </li>
                      <li className="mx-3">
                        <a href="www.facebook.com">
                          <FaGooglePlusG className="text-2xl" />
                        </a>
                      </li>
                      <li className="mx-3">
                        <a href="www.facebook.com">
                          <FaDribbble className="text-2xl" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
