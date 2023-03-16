import React from "react";
import home from "../assets/home.jpg";
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
    <div>
      <div>
        <h1>Welcome to your e-gallery</h1>
      </div>
      <div>
        <img src={home} alt="" />
      </div>
      <div>
        <button onClick={handleLogin}>login</button>
        <button onClick={handleRegister}>register</button>
      </div>
    </div>
  );
};

export default Home;
