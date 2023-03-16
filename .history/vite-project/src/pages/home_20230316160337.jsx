import React from "react";
// import home from "../assets/home-com.jpg";
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
      <div className="bg-gradient-to-b from-green-100 to-emerald-300 h-screen">
        helo
        <div
          className="bg-center bg-cover bg-no-repeat h-screen ml-96 overflow-x-hidden  w-auto"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1541359927273-d76820fc43f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)",
          }}
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
      </div>
    </div>
  );
};

export default Home;
