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
    <div className="flex flex-wrap  border-red-200 border-8 p-6  bg-gradient-to-b from-orange-800 to-orange-300">
      <div className="h-[33rem]  bg-gradient-to-br from-green-200 to-teal-100 w-screen sm:w-1/2   items-center flex flex-col  p-4 ">
        <h1 className="p-5 text-5xl mb-16">Welcome to your e-gallery</h1>
        <h2 className="text-2xl">
          A place where you can store your all images online from insta,
          unsplash, pc or anywhere and get shareable links.
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
      <div className="w-screem sm:w-1/2">
        <img
          src="https://img.freepik.com/free-vector/watercolor-photo-collage-design_52683-82542.jpg?size=626&ext=jpg&uid=R96739404&ga=GA1.1.1153320190.1678966122&semt=sph"
          alt=""
          className="w-[80rem] h-[33rem] "
        />
      </div>
    </div>
  );
};

export default Home;
