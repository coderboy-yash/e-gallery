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
    <div className="flex">
      <div className="h-screen w-[40rem] bg-gradient-to-b from-amber-100 to-yellow-50">
        <h1 className="p-10">Welcome to your e-gallery</h1>
      </div>
      <div>
        <img src={home} alt="" className="w-[80rem] h-screen" />
      </div>
    </div>
  );
};

export default Home;
