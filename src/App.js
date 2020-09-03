import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [blurValue, setBlurValue] = useState("20px");

  const passwordHandler = (e) => {
    const inputLength = e.target.value.length;
    const blurVal = 20 - inputLength * 2 + "px";
    setBlurValue(blurVal);
  };

  return (
    <div className="app">
      <div
        className="background"
        style={{
          filter: `blur(${blurValue})`
        }}
      ></div>
      <div className="container">
        <h1 className="title">Image Password Strength</h1>
        <p className="text">Change the password to see the effect</p>
        <div className="content-container">
          <label>Email:</label>
          <input type="email" placeholder="Enter e-mail..." />
        </div>
        <div className="content-container">
          <label>Password:</label>
          <input
            onChange={passwordHandler}
            type="password"
            placeholder="Enter password..."
          />
        </div>
      </div>
    </div>
  );
}
