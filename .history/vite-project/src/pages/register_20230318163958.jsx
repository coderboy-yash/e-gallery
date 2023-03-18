import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const login = (e) => {
    e.preventDefault();
    navigate("/login");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(import.meta.env.VITE_REACT_APP_BASE_URL);
    if (name == "" && email == "" && password == "") {
      toast.error("please enter info then submit");
      // return;
    }
    if (name === "") toast.error("name cannot be empty! ");
    if (password.length < 4) {
      if (password == "") toast.error("password cannot be empty");
      else toast.error("password should contain atleast 4 characters");
    }
    if (email === "") toast.error("email cannot be empty! ");
    Axios.post(`${import.meta.env.VITE_REACT_APP_BASE_URL}/api/auth/register`, {
      username: name,
      email,
      password,
    })
      .then((response) => {
        console.log(response.status);
        if (response.status == 200) {
          navigate("/login");
        }
      })
      .catch((error) => {
        console.log(error.response.status);
      });
  };
  return (
    <div
      className="bg-center bg-cover bg-no-repeat h-screen  overflow-x-hidden  w-auto "
      style={{
        backgroundImage:
          "url(https://cdn.pixabay.com/photo/2018/08/31/18/17/fantasy-3645263_960_720.jpg)",
      }}
    >
      <Toaster></Toaster>
      <div className="h-screen w-3/4  m-auto flex justify-center p-10 ">
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="flex flex-col justify-center items-center bg-white gap-5 m-8 p-10 rounded-lg "
        >
          <h1>register Here</h1>
          <input
            className="p-2 outline-orange-300 border-orange-900 border-2 rounded-md"
            type="name"
            placeholder="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <input
            className="p-2 outline-orange-300 border-orange-900 border-2 rounded-md"
            type="email"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <input
            className="p-2 outline-orange-300 border-orange-900 border-2 rounded-md"
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="p-2 outline-orange-300 border-orange-900 border-2 w-60 bg-amber-900 text-white hover:bg-amber-600 active:bg-amber-800"
            type="submit"
          >
            submit
          </button>
          <button
            onClick={(e) => login(e)}
            className="p-2 outline-orange-300 border-orange-900 border-2 w-60 bg-amber-900 text-white hover:bg-amber-600 active:bg-amber-800"
          >
            registered user/login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
