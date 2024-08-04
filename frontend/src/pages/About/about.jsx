import React from "react";
import Navbar from "../../components/Navbar";
import Whyus from "./whyus";
import Team from "./team";

import Map from "./map";

const About = () => {
  return (
    <>
    <div className="footer w-full p-4 h-full rounded-xl bg-slate-900 bg-opacity-40 flex flex-col">
      <div className="w-full p-4 grid place-items-center">
       <Navbar/>
      </div>
      <div className="about bg-opacity-40 p-10 -my-20 w-full place-items-center bg-slate-900">
        <span className="text-4xl my-10 md:text-8xl font-bold text-red-100 font-serif">
          ABOUT
          <div className="h-[.2rem] bg-purple-400"></div>
        </span>
        <span className="text-xl md:text-2xl my-4 text-slate-200">
          Welcome to the{" "}
          <span className="text-2xl md:text-3xl font-semibold font-mono">FOODIE</span>
        </span>
      </div>

      <div className="details text-md font-semibold w-[90%] p-4 mx-auto md:mx-20 bg-slate-900 bg-opacity-40">
        <div className="text-lg md:text-xl text-slate-300">
          Our <i className="font-semibold text-purple-300">Management Team</i> is composed of seasoned professionals:
        </div>
        <span className="text-lg md:text-xl text-slate-50">
          Ms. Isha Rawat, CEO & Founder of Monami Hospitality (Foodie.in), is an alumnus of IIM Bangalore. With over 20 years of cross-functional experience in the hospitality, real estate, and technology industries, Ms. Aastha brings a wealth of knowledge and expertise to our organization.
          <br />
          <br />
          Ms. Aastha Singh, our Culinary Director, boasts 15 years of industry experience, having worked with various multinational catering companies, cruise liners, and cloud kitchens. Prior to joining Foodie, she successfully managed multiple cloud kitchens for Fresh Menu, an online food-ordering company. At Foodie, we stand out from the crowd. Our team's unwavering commitment to excellence in every aspect of our service is what sets us apart. From our dedication to crafting delectable, natural meals to our state-of-the-art kitchen facilities, we leave no stone unturned. Our rigorous quality control measures, on-time deliveries, and a team driven by passion, not just profession, are the cornerstones of our success. We take you on a culinary journey that goes beyond the ordinary.
        </span>
        <span className="text-md md:text-lg text-slate-200">
          We as a team try to give best of our services and provide best catering experience in the town. We provide fast ordering with hygienic and healthy environment.
        </span>
        <span className="text-md md:text-lg text-slate-200">
          We try to provide best of what we can, our customers are happy with the services we provide. It feels relieved when we hear positive feedback from our customers. Foodie always tries to give best to our customers so that they can enjoy their beautiful moments enjoying our food and services.
        </span>
        <span className="text-md md:text-lg text-slate-200">
          Customers can also reserve the catering services beforehand through our website:{" "}
          <a href="#" className="text-blue-500 hover:underline text-xl font-bold font-serif">www.Foodie.com</a>
        </span>
        <span className="text-md md:text-lg text-slate-200">
          We believe in providing best services and will do it till we reach our goal to reach crores of people.
        </span>
      </div>
    </div>
    <Team />
        <Whyus />
        <Map />
    </>
  );
};

export default About;
