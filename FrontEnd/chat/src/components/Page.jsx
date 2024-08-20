import React, { useState } from "react";
import axios from 'axios';
import "./page.css";
import SignUp from "./SignUp";
import UserIcon from "./UserIcon";
import IconEmail from "./IconEmail";
import IconPassword from "./IconPassword";

const Page = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async () => {
    try {
      const response = await axios.post('http://localhost:3000/login', { email, password });
      alert('Sign in successful!');
      console.log(response.data);
      localStorage.setItem('token', response.data.token); // Store the JWT token
    } catch (error) {
      alert('Invalid credentials');
    }
  };

  const handleSignUp = async () => {
    try {
      await axios.post('http://localhost:3000/signup', { name, email, password });
      alert('Sign up successful!');
      setIsSignUp(false); // Switch to Sign-In form
    } catch (error) {
      alert('Error during sign-up');
    }
  };

  return (
    <div className="container">
      <div className="form-box">
        {isSignUp ? (
          <SignUp onSignUp={handleSignUp} onToggle={() => setIsSignUp(false)} />
        ) : (
          <>
            <h1>Sign In</h1>
            <form action="">
              <div className="input-group">
                <UserIcon />
                <input
                  type="text"
                  placeholder="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="input-group">
                <IconEmail />
                <input
                  type="email"
                  placeholder="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="input-group">
                <IconPassword />
                <input
                  type="password"
                  placeholder="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <p>
                Lost password? <a href="#">Click here!</a>
              </p>
              <div className="form-btn">
                <button type="button" onClick={handleSignIn}>
                  Sign in
                </button>
                <button type="button" onClick={() => setIsSignUp(true)}>Log in </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default Page;
