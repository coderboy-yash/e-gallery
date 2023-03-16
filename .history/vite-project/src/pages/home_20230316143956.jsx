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
    <div className="flex bg-gradient-to-r from-green-400 to-red-200">
      <div>
        <h1>Welcome to your e-gallery</h1>
        <div>
          <button onClick={handleLogin}>login</button>
          <button onClick={handleRegister}>register</button>
        </div>
      </div>
      <div>
        <img src={home} alt="" />
      </div>
    </div>
  );
};

export default Home;
