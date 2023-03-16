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
      <div className="h-screen">
        <h1>Welcome to your e-gallery</h1>
      </div>
      <div>
        <img src={home} alt="" className="w-auto" />
      </div>
    </div>
  );
};

export default Home;
