import React from "react";
import { assets } from "../assets/assets";
import logo from "../assets/logo.svg";

const Footer = () => {
  return (
    <footer className="bg-[#0b0b0d] px-6 pt-8 md:px-16 lg:px-36 mt-20 md:mt-24 w-full text-gray-300 relative z-10">
      <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-700 pb-14">
        <div className="md:max-w-96">
          <img src={logo} alt="Logo" className="w-32 h-auto" />
          <p className="mt-6 text-sm leading-relaxed text-gray-400">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
          <div className="flex items-center gap-2 mt-4">
            <img src={assets.googlePlay} alt="google play" className="h-9 w-auto" />
            <img src={assets.appStore} alt="app store" className="h-9 w-auto" />
          </div>
        </div>

        <div className="flex-1 flex items-start md:justify-end gap-20 md:gap-40">
          <div>
            <h2 className="font-semibold mb-5 text-white">Company</h2>
            <ul className="text-sm space-y-2">
              <li><a href="#">Home</a></li>
              <li><a href="#">About us</a></li>
              <li><a href="#">Contact us</a></li>
              <li><a href="#">Privacy policy</a></li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold mb-5 text-white">Get in touch</h2>
            <div className="text-sm space-y-2">
              <p>+1-234-567-890</p>
              <p>contact@example.com</p>
            </div>
          </div>
        </div>
      </div>

      <p className="pt-4 text-center text-sm pb-5 border-t border-gray-700 mt-6 text-gray-500">
        Copyright {new Date().getFullYear()} © GreatStack All Right Reserved
      </p>
    </footer>
  );
};

export default Footer;
