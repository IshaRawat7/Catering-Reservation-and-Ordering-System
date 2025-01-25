import React from "react";

const Footer = () => {
  return (
    <>
      <div className="footer w-full h-full bg-slate-900 bg-opacity-40 rounded-sm py-10 md:shrink-0">
        <div className="w-full md:w-4/5 mx-auto flex flex-col px-5 md:px-0">
          <span className="text-xl text-slate-50 font-serif text-center md:text-left">
            End of the website
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-400 text-center md:text-left">
            Thanks for visiting
          </h1>
          <span className="text-xl text-white font-semibold font-serif my-10 text-center md:text-left">
            We appreciate your Thoughts
          </span>
          <div className="w-full h-1 bg-white"></div>
          <div className="logo my-18 flex flex-col items-center md:items-start">
            <img
              src="https://www.designevo.com/res/templates/thumb_small/cutlery-menu-logo.webp"
              alt=""
              className="rounded-full w-32 h-32 my-5"
            />
            <span className="font-mono text-slate-200 font-semibold text-lg text-center md:text-left">
              We respect the opinions of each of our customers. We hope that our
              customers will show the same amount of respect and trust as we
              have in them.
            </span>
            <span className="text-xl text-white font-bold my-4 text-center md:text-left">
              Contact us for Parties, Marriages, Farewells, etc.
            </span>
          </div>

          <div className="flex justify-center md:justify-start gap-2 my-4">
            <a href="#">
              <img
                src="src/assets/facebook.png"
                alt="facebook"
                className="w-12 h-12"
              />
            </a>
            <a href="https://github.com/IshaRawat7">
              <img
                src="src/assets/twitter.png"
                alt="Github"
                className="w-12 h-12"
              />
            </a>
            <a href="#">
              <img
                src="src/assets/email.png"
                alt="email"
                className="w-12 h-12"
              />
            </a>
            <a href="https://www.linkedin.com/in/isha-rawat-290717260/">
              <img
                src="src/assets/linkedin.jpg"
                alt="LinkedIn"
                className="w-12 h-12 bg-black"
              />
            </a>
          </div>
        </div>

        <div className="second flex flex-col items-center md:items-start space-y-10 px-5 md:px-0">
          <div className="w-full md:w-4/5 mx-auto mt-28 sm:mt-20">
            <h1 className="text-4xl md:text-6xl text-red-600 font-semibold text-center md:text-left">
              About
            </h1>
            <div className="h-1 bg-slate-400"></div>
            <span className="text-xl font-semibold text-center md:text-left text-slate-300">
              Foodie provides the best experience to each of our customers by
              providing top-notch services and high-quality food. We envision
              carrying forward the trust shown by our customers.
            </span>
          </div>
          <div className="w-full md:w-4/5 mx-auto">
            <h1 className="text-4xl md:text-6xl text-red-400 font-semibold text-center md:text-left">
              Vision
            </h1>
            <div className="h-1 bg-slate-400"></div>
            <span className="text-lg font-semibold text-center md:text-left text-slate-300">
              Our vision is to provide healthy, hygienic, and the best food in
              town. We strive to provide top-tier services and maintain
              comprehensive records of each customer.
            </span>
          </div>
          <div className="last h-1 w-full bg-white my-5"></div>
          <span className="my-10 text-xl text-center md:text-left text-slate-300">
            © 2024 Foodie. All rights reserved.
          </span>
        </div>
      </div>
    </>
  );
};

export default Footer;
