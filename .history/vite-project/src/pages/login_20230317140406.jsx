import React, { useState } from "react";
import Axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { login, selectUser } from "../features/userSlice";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const user = useSelector(selectUser);
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();

    Axios.post(`${import.meta.env.VITE_REACT_APP_BASE_URL}/api/auth/login`, {
      username: name,
      password,
    })
      .then((response) => {
        console.log(response);
        if (response.status == 200) navigate("/gallery");
      })
      .catch((error) => {
        console.log(error);
      });

    dispatch(
      login({
        name: name,

        password: password,
        loggedIn: true,
      })
    );
  };
  const moveToGallery = () => {
    user ? navigate("/gallery") : navigate("/register");
  };
  return (
    <div
      className="bg-center bg-cover bg-no-repeat h-screen  overflow-x-hidden  w-auto "
      style={{
        backgroundImage:
          "url(https://cdn.pixabay.com/photo/2018/08/31/18/17/fantasy-3645263_960_720.jpg)",
      }}
    >
      <div className="h-screen w-3/4  m-auto flex justify-center p-10 ">
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="flex flex-col justify-center items-center bg-white gap-10 m-8 p-10 rounded-lg "
        >
          <h1>Login Here</h1>
          <input
            className="p-2 outline-orange-300 border-orange-900 border-2 rounded-md"
            type="name"
            placeholder="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
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
            className="p-2 outline-orange-300 border-orange-900 border-2 w-60 bg-amber-900 text-white hover:bg-amber-600 active:bg-amber-800"
            type="submit"
          >
            new user! -->Register heree
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
