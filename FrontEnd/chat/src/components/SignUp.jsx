import React, { useState } from "react";
import axios from "axios";
import UserIcon from "./UserIcon";
import IconEmail from "./IconEmail";
import IconPassword from "./IconPassword";

const SignUp = ({ onSignUp, onToggle }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async () => {
    try {
      await axios.post("http://localhost:3000/signup", {
        name,
        email,
        password,
      });
      alert("Sign up successful!");
      onSignUp(); // Call the onSignUp callback
  
    } catch (error) {
      alert("Error during sign-up");
    }
  };

  return (
    <>
      <h1>Sign Up</h1>
      <form action="">
        <div className="input-group">
          <UserIcon />
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="input-group">
          <IconEmail />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-group">
          <IconPassword />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-btn">
          <button type="button" onClick={handleSignUp}>
            Sign Up
          </button>
          <button type="button" onClick={onToggle}>
            Back to Sign In
          </button>
        </div>
      </form>
    </>
  );
};

export default SignUp;
