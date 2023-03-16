import React, { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(import.meta.env.VITE_REACT_APP_BASE_URL);
    Axios.post(`${import.meta.env.VITE_REACT_APP_BASE_URL}/api/auth/register`, {
      username: name,
      email,
      password,
    })
      .then((response) => {
        console.log(response);
        if (response.status == 200) {
          navigate("/login");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div
      className="bg-center bg-cover bg-no-repeat h-screen ml-96 overflow-x-hidden  w-auto -mt-6"
      style={{
        backgroundImage:
          "url(https://pixabay.com/photos/smoke-background-abstract-whirl-2467437/)",
      }}
    >
      <div className="h-screen w-3/4  m-auto flex justify-center ">
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="flex flex-col justify-center items-center bg-white gap-10 m-8 "
        >
          <h1>register Here</h1>
          <input
            className="p-2 outline-orange-300"
            type="name"
            placeholder="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <input
            type="email"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
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
    </div>
  );
};

export default Register;
