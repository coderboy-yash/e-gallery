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
    <div className="flex flex-wrap  border-red-200 border-8 p-6  bg-gradient-to-b from-orange-800 to-orange-300">
      <div className="h-[33rem]  bg-gradient-to-b from-amber-100 to-lime-50   items-center flex flex-col  p-4 ">
        <h1 className="p-5 text-5xl mb-16">Welcome to your e-gallery</h1>
        <h2 className="text-2xl">
          A place where you can store your all images online from insta,
          unsplash, pc or anywhere and get shareable links.
        </h2>
        <div className="flex ">
          <button className="p-3 m-3 bg-orange-300 px-5" onClick={handleLogin}>
            login
          </button>
          <button
            className="p-3 m-3 bg-orange-300 px-5"
            onClick={handleRegister}
          >
            register
          </button>
        </div>
      </div>
      <div className="w-1/2">
        <img
          src="http://res.cloudinary.com/yash-911-cloud/image/upload/v1679037703/zcz92jzbjmlzcpzczyrl.jpg"
          alt=""
          className="w-[80rem] h-[33rem] "
        />
      </div>
    </div>
  );
};

export default Home;
