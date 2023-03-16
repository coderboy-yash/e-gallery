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
    <div className="flex border-red-200 border-8 p-6 h-screen bg-gradient-to-b from-orange-800 to-orange-300">
      <div className="h-[33rem] w-[40rem] bg-gradient-to-b from-amber-100 to-lime-50  items-center flex flex-col shadow-md shadow-red-500 p-4 ">
        <h1 className="p-10 text-5xl mb-8">Welcome to your e-gallery</h1>
        <h2 className="text-2xl">
          A place where you can store your all images online and get sharable
          links
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
      <div>
        <img src={home} alt="" className="w-[80rem] " />
      </div>
    </div>
  );
};

export default Home;
