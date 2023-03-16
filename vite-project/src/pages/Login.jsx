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
    <div className="login">
      <form onSubmit={(e) => handleSubmit(e)} className="login_form">
        <h1>Login Here</h1>
        <input
          type="name"
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />

        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Login;
