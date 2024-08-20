import React, { useState } from "react";
import "./page.css";

import SignUp from "./SignUp";
import SignIn from "./Signin";
import Success from "./Success";

const Page = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const handleToggle = () => setIsSignUp(!isSignUp);

  const handleSignIn = async () => {
    try {
      const response = await axios.post("http://localhost:3000/login", {
        email,
        password,
      });
      alert("Sign in successful!");
      console.log(response.data);
      localStorage.setItem("token", response.data.token);

      <Success/>
    } catch (error) {
      alert("Invalid credentials");
    }
  };

  const handleSignUp = () => {
    setIsSignUp(false);
  };

  return (
    <div className="container">
      <div className="form-box">
        {isSignUp ? (
          <SignUp onSignUp={handleSignUp} onToggle={handleToggle} />
        ) : (
          <SignIn onSignIn={handleSignIn} onToggle={handleToggle} />
        )}
      </div>
    </div>
  );
};

export default Page;
