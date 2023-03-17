import React from "react";
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
      <button onClick={handleLogin}>login</button>
      <button onClick={handleRegister}>register</button>
    </div>
  );
};

export default Home;
