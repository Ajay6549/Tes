import React, { useState } from "react";
import axios from "axios";
import UserIcon from "./UserIcon";
import IconEmail from "./IconEmail";
import IconPassword from "./IconPassword";

const SignIn = ({ onSignIn, onToggle }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async () => {
    try {
      await axios.post("http://localhost:3000/login", {
        email,
        password,
      });
      console.log(email)
      console.log(password)
      alert("Sign in successful!");
      onSignIn(); // Call the onSignIn callback
    } catch (error) {
      alert("Error during sign-in");
    }
  };

  return (
    <>
      <h1>Sign In</h1>
      <form action="">
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
        <p>
          Lost password? <a href="#">Click here!</a>
        </p>
        <div className="form-btn">
          <button type="button" onClick={handleSignIn}>
            Sign In
          </button>
          <button type="button" onClick={onToggle}>
            Create Account
          </button>
        </div>
      </form>
    </>
  );
};

export default SignIn;
