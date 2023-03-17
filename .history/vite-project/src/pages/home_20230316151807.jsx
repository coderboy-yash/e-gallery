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
    <div
      className="bg-center bg-cover bg-no-repeat h-full w-full"
      style={{ backgroundImage: "url()" }}
    >
      <div>
        <h1>Welcome to your e-gallery</h1>
        <div>
          <button onClick={handleLogin}>login</button>
          <button onClick={handleRegister}>register</button>
        </div>
      </div>
      <div>
        {/* <img src={home} className="max-w-screen-sm p-6" alt="" /> */}
      </div>
    </div>
  );
};

export default Home;
