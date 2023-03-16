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
    <div className="flex border-t-red-300 border-8">
      <div className="h-screen w-[40rem] bg-gradient-to-b from-amber-100 to-lime-50 justify-center items-center">
        <h1 className="p-10">Welcome to your e-gallery</h1>
        <div className="flex ">
          <button onClick={handleLogin}>login</button>
          <button onClick={handleRegister}>register</button>
        </div>
      </div>
      <div>
        <img src={home} alt="" className="w-[80rem] h-screen" />
      </div>
    </div>
  );
};

export default Home;
