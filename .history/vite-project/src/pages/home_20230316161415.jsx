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
    <div>
      <div>
        <h1></h1>
      </div>
      <div>
        <img src={home} alt="" />
      </div>
    </div>
  );
};

export default Home;
