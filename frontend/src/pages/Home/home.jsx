import React from "react";
import { useState } from "react";
import Map from "../About/map";
import Menu from "../../components/Menu/menu";
import { FaCartArrowDown, FaBars } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";
import "./home.css";
const home = ({ setshowLogin }) => {
  const [category, setcategory] = useState("All");
  const { token, settoken } = useContext(StoreContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const Logout = () => {
    localStorage.removeItem("token");
    settoken("");
    navigate("/");
  };

  return (
    <>
      <nav className="flex fixed top-0 w-full home flex-wrap items-center justify-between p-4 bg-[#fac989]">
        <div className="text-4xl font-bold font-serif text-black">FOODIE</div>
        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none"
          >
            <FaBars className="w-8 h-8" />
          </button>
        </div>
        <div
          className={`w-full lg:flex lg:items-center lg:w-auto ${
            menuOpen ? "block" : "hidden"
          }`}
        >
          <div className="text-right text-bold mt-5 lg:mt-0 lg:border-none">
            <Link
              to="/"
              className="block text-black lg:inline-block text-xl hover:text-blue-500 px-3 py-3 lg:border-none"
            >
              Home
            </Link>
            <a
              href="#explore"
              className="block text-black lg:inline-block text-xl hover:text-blue-500 px-3 py-3 lg:border-none"
            >
              Menu
            </a>
            <Link
              to="/about"
              className="block text-black lg:inline-block text-xl hover:text-blue-500 px-3 py-3 lg:border-none"
            >
              About us
            </Link>
            <a
              href="#gallery"
              className="block text-black lg:inline-block text-xl hover:text-blue-500 px-3 py-3 lg:border-none"
            >
              Gallery
            </a>
            <a
              href="#contactUs"
              className="block text-black lg:inline-block text-xl hover:text-blue-500 px-3 py-3 lg:border-none"
            >
              Visit Us
            </a>
          </div>
          <div className="text-blue-700 w-full lg:flex lg:w-auto text-right text-bold mt-5 lg:mt-0 lg:border-none">
            <Link to="/cart">
              <FaCartArrowDown className="w-36 h-10 mr-10  sm:mr-0" />
            </Link>
            {!token ? (
              <button
                className="hover:bg-orange-500 rounded-full w-20 h-10 text-white bg-orange-400 transition ease-in-out"
                onClick={() => setshowLogin(true)}
              >
                Sign In
              </button>
            ) : (
              <div className="profile relative">
                <img
                  className="rounded-full h-12 w-12"
                  src="src/assets/profile.png"
                  alt="profile"
                />
                <ul className="dropdown hidden absolute">
                  <li onClick={() => navigate("/myorders")}>
                    <img
                      src="src/assets/order.png"
                      alt="order"
                      className="h-5 w-5"
                    />
                    <p>Orders</p>
                  </li>
                  <hr />
                  <li onClick={Logout}>
                    <img
                      src="src/assets/logout.jpg"
                      alt="logout"
                      className="rounded-full h-5 w-5"
                    />
                    <p>Logout</p>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>

      <div className="relative w-full h-[320px]" id="home">
        <div className="absolute inset-0 opacity-90">
          <img
            src="src/assets/cater.jpg"
            alt="Background Image"
            className="object-cover object-center w-full h-full"
          />
        </div>
        <div className="absolute inset-9 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-4 md:mb-0">
            <h1 className="text-grey-700 font-bold font-serif text-4xl md:text-5xl leading-tight mb-2 text-blue-600">
              FOODIE
            </h1>
            <p className="font-regular text-xl mb-8 mt-4 text-black">
              One step Ahead for Catering services
            </p>
            <a
              href="#contactUs"
              className="px-6 py-3  bg-[#c8a876] text-white font-medium rounded-full hover:bg-[#c09858]  transition duration-200"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
      <Menu category={category} setcategory={setcategory} />
      <FoodDisplay category={category} />
      <section className="py-10 bg-slate-800 bg-opacity-60" id="services">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold  mb-8 text-center font-serif text-red-300">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="src/assets/veg bir.jpg"
                alt="Veg Biryani"
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-medium text-gray-800 mb-2">
                  Veg Biryani
                </h3>
                <p className="text-gray-700 text-base">
                  Bored with the monotonous food😓! Don't worry we are here with
                  delicious,mouth watering VEG BIRYANI 🤤. Order now to enjoy
                  your happy moments with healthy and flavoury food.
                </p>
                <button className="text-blue-500 text-md hover:bg-red-300 hover:cursor-wait font-semibold bg-slate-400 my-4 rounded-full w-24 h-12">
                  Order Now
                </button>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="src/assets/samosa.jpg"
                alt="samosa"
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-medium text-gray-800 mb-2">
                  Samosa
                </h3>
                <p className="text-gray-700 text-base flex-col">
                  Our samosa is perfect.It's just what a person want to have on
                  snacks time. Dip it whithin the suaces and have fun of this
                  rainy season.
                </p>
                <button className="text-blue-500 text-md hover:bg-red-300 hover:cursor-wait font-semibold bg-slate-400 my-4 rounded-full w-24 h-12">
                  Order Now
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="src/assets/taco.jpg"
                alt="taco"
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-center" />
              <h3 className="text-xl font-medium text-gray-800 mb-2 text-center">
                Taco
              </h3>
              <p className="text-gray-700 text-base flex-col mx-2">
                Enjoy the best ever Taco you can have. Give it a try and immerse
                yourself into a delicious world where taco provide you eating
                heaven. Order our brand new taco filled with fillings and love
                we share among our customers.
              </p>
              <button className="text-blue-500 text-md hover:bg-red-300 hover:cursor-wait font-semibold bg-slate-400 my-4 rounded-full w-24 h-12 mx-2 ">
                Order Now
              </button>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden my-3">
            <img
              src="src/assets/veg.jpg"
              alt="Coffee"
              className="w-full h-64 object-cover"
            />
            <div className="p-6 text-center">
              <h3 className="text-xl font-medium text-gray-800 mb-2">
                Veg Thali
              </h3>
              <p className="text-gray-700 text-base">
                We are specialized in the production of Veg Thali😋. Our veg
                thali is made from the finest, freshest
                vegetables,grams,chapattis and rice we use traditional methods
                to cook the same. You can enjoy this with your family and
                friends.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg bg-gradient-to-tr from-slate-900 to-blue-300 p-0.5 shadow-lg overflow-hidden min-h-full">
            <div className="text-center text-white font-medium">
              Special product
            </div>
            <img
              src="src/assets/spag.jpg"
              alt="Coffee"
              className="w-full h-64 object-cover rounded-t-lg"
            />
            <div className="p-6 bg-white text-center rounded-b-lg md:min-h-full">
              <h3 className="text-xl font-medium text-gray-800 mb-2">
                Flavoured Spaghetti
              </h3>
              <p className="text-gray-700 text-base">
                <span className="font-medium underline">Our speciality is</span>
                We offer a variety of flavored spaghetti dishes that are sure to
                tantalize your taste buds. We use only the freshest ingredients
                Our flavors include: Mango, spinach
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden my-4">
            <img
              src="https://media.istockphoto.com/id/1265641298/photo/fried-papad.jpg?s=612x612&w=0&k=20&c=e_iEy4CTvU6Thn02zGgKt_TiSYAheCKmgfTF5j52ovU="
              alt="papad"
              className="w-full h-64 object-cover"
            />
            <div className="p-6 text-center">
              <h3 className="text-xl font-medium text-gray-800 mb-2">
                Rice Papad
              </h3>
              <p className="text-gray-700 text-base">
                We produces high-quality rice papad that is made with the finest
                ingredients. We use traditional methods to make our papad, which
                gives it a unique flavor and texture. Our papad is also
                gluten-free and vegan.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 mx-20 rounded-xl" id="aboutus">
        <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8 p-4 md:mx-20">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div className="max-w-lg">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                About Us
              </h2>
              <p className="mt-4 text-gray-600 text-lg w-[90%] p-4 mx-auto md:mx-20">
                Foodie is your premier destination for exceptional catering
                services that turn any event into an unforgettable culinary
                experience. Whether you are planning a corporate gathering, a
                wedding, a birthday party, or any special occasion, Foodie is
                dedicated to providing delectable dishes, exquisite
                presentations, and unparalleled service to make your event truly
                remarkable. At Foodie, we believe that every event deserves a
                unique and personalized touch. At Foodie, we understand that the
                success of your event hinges on the quality of the catering.
                That's why we go above and beyond to ensure that every detail is
                perfect, from the first bite to the last. Our passion for food
                and dedication to service excellence make us the ideal choice
                for your next event.
              </p>
            </div>
            <div className="mt-12 md:mt-0">
              <img
                src="src/assets/catering.jpg"
                alt="About Us Image"
                className="object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="text-gray-700 body-font mt-10 bg-slate-800 bg-opacity-60">
        <div className="flex justify-center text-4xl font-bold text-red-300 text-center font-serif">
          Why Us?
        </div>
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-wrap text-center justify-center">
            <div className="p-4 md:w-1/4 sm:w-1/2">
              <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
                <div className="flex justify-center">
                  <img
                    src="https://image3.jdomni.in/banner/13062021/58/97/7C/E53960D1295621EFCB5B13F335_1623567851299.png?output-format=webp"
                    className="w-32 mb-3"
                  />
                </div>
                <h2 className="title-font font-regular text-2xl  font-mono font-semibold text-purple-200">
                  Quality Services
                </h2>
              </div>
            </div>

            <div className="p-4 md:w-1/4 sm:w-1/2">
              <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
                <div className="flex justify-center">
                  <img
                    src="https://image2.jdomni.in/banner/13062021/3E/57/E8/1D6E23DD7E12571705CAC761E7_1623567977295.png?output-format=webp"
                    className="w-32 mb-3"
                  />
                </div>
                <h2 className="title-font font-regular text-2xl  font-mono font-semibold text-purple-200">
                  Reasonable Rates
                </h2>
              </div>
            </div>

            <div className="p-4 md:w-1/4 sm:w-1/2">
              <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
                <div className="flex justify-center">
                  <img
                    src="https://image3.jdomni.in/banner/13062021/16/7E/7E/5A9920439E52EF309F27B43EEB_1623568010437.png?output-format=webp"
                    className="w-32 mb-3"
                  />
                </div>
                <h2 className="title-font font-regular text-2xl  font-mono font-semibold text-purple-200">
                  Fast Delivery
                </h2>
              </div>
            </div>

            <div className="p-4 md:w-1/4 sm:w-1/2">
              <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
                <div className="flex justify-center">
                  <img
                    src="https://image3.jdomni.in/banner/13062021/EB/99/EE/8B46027500E987A5142ECC1CE1_1623567959360.png?output-format=webp"
                    className="w-32 mb-3"
                  />
                </div>
                <h2 className="title-font font-regular text-2xl  font-mono font-semibold text-purple-200">
                  Professional
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="text-gray-700 bg-slate-800 bg-opacity-60 body-font">
        <div
          id="gallery"
          className="flex justify-center text-4xl font-bold text-red-300 text-center py-10 font-serif"
        >
          Gallery
        </div>

        <div className="grid grid-cols-1 place-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
          <div className="group relative">
            <img
              src="src/assets/noodles.jpg"
              alt="Image 1"
              className="aspect-[2/3] h-80 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
            />
          </div>

          <div className="group relative">
            <img
              src="src/assets/food2.jpg"
              alt="Image 1"
              className="aspect-[2/3] h-80 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
            />
          </div>

          <div className="group relative">
            <img
              src="src/assets/momo.jpg"
              alt="Image 1"
              className="aspect-[2/3] h-80 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
            />
          </div>

          <div className="group relative">
            <img
              src="src/assets/burger.jpg"
              alt="Image 1"
              className="aspect-[2/3] h-80 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
            />
          </div>
          <div className="group relative">
            <img
              src="src/assets/samosa.jpg"
              alt="Image 1"
              className="aspect-[2/3] h-80 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
            />
          </div>
          <div className="group relative">
            <img
              src="src/assets/pizza3.jpg"
              alt="Image 1"
              className="aspect-[2/3] h-80 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
            />
          </div>

          <div className="group relative">
            <img
              src="src/assets/food3.jpg"
              alt="Image 1"
              className="aspect-[2/3] h-80 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
            />
          </div>
          <div className="group relative">
            <img
              src="src/assets/food4.jpg"
              alt="Image 1"
              className="aspect-[2/3] h-80 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
            />
          </div>
        </div>
      </section>

      <section>
        <div id="contactUs" className="bg-slate-800 bg-opacity-60">
          <Map />
        </div>
      </section>
    </>
  );
};

export default home;
