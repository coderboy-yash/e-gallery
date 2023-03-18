import React from "react";
import home from "../assets/home-com.jpg";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/login");
  };
  const handleRegister = () => {
    navigate("/register");
  };
  return (
    <div className="flex flex-wrap  border-blue-300  p-6 bg-gradient-to-r from-green-300 to-amber-200">
      <div
        className="h-[33rem]   w-screen sm:w-1/2   items-center flex flex-col  p-4
        bg-center bg-cover bg-no-repeat
      
       "
        style={{
          backgroundImage:
            "url(https://img.freepik.com/free-vector/blue-curve-background_53876-113112.jpg?w=740&t=st=1679172674~exp=1679173274~hmac=b768a66ebfc89747a7dec2668a3c8200be8c41e59ebe59f1f87b4c97bd11d56d)",
        }}
      >
        <h1 className="p-5 text-4xl mb-16 bg-gradient-to-r from-green-300 to-amber-200 rounded-md text-white mt-10 ">
          Welcome to your e-gallery
        </h1>
        <h2 className="text-xl text-gray-700 mb-16">
          A place where you can store your all images online from insta,
          unsplash, pc or anywhere and get shareable links.
        </h2>
        <div className="flex ">
          <button
            className="p-3 m-3 bg-blue-500 text-white px-5"
            onClick={handleLogin}
          >
            login
          </button>
          <button
            className="p-3 m-3 bg-blue-500 text-white px-5"
            onClick={handleRegister}
          >
            register
          </button>
        </div>
      </div>
      <div className="w-screem sm:w-1/2">
        <img
          src="https://img.freepik.com/free-vector/watercolor-photo-collage-design_52683-82542.jpg?size=626&ext=jpg&uid=R96739404&ga=GA1.1.1153320190.1678966122&semt=sph"
          alt=""
          className="w-[80rem] h-[33rem] "
        />
      </div>
    </div>
  );
};

export default Home;
