import React, { useState } from 'react';
import "./signup.css";
import IconEmail from './IconEmail';
import IconPassword from './IconPassword';

const SignUp = ({ onSignUp, onToggle }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="container">
      <div className="form-box">
        <h1>Log In </h1>
        <form action="">
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
          <button type="button" onClick={() => onSignUp({ email, password })}>Submit</button>
          <div>
            Don't have an account?{" "}
            <a href="#" onClick={onToggle}>
              Sign in
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
