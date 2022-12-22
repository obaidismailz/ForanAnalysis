// import logo from '';
import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useEffect } from "react";
import "../Style/RegisterPage.css";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

import ForgotPass from "../Components/ForgotPassword.js";

// function OtherComponent() {
// let location = useLocation();
// console.log(location.userProps);
// }

function RegisterPage() {
  const location = useLocation();
  const { state } = location;
  const [FP, setFP] = useState(false);

  React.useEffect(() => {
    const signUpButton = document.getElementById("signUp");
    const signInButton = document.getElementById("signIn");
    const container = document.getElementById("RegPanel");

    if (signInButton) {
      signInButton.addEventListener("click", () => {
        container.classList.remove("right-panel-active");
      });
    }

    if (signUpButton) {
      signUpButton.addEventListener("click", () => {
        container.classList.add("right-panel-active");
      });
    }

    if (state.name == "SignUp") {
      container.classList.add("right-panel-active");
    } else {
      container.classList.remove("right-panel-active");
    }
  });

  function RegisterPanel() {
    return (
      <div>
        <div className="form-container sign-up-container">
          <form action="#">
            <h1>Create Account</h1>

            <div className="inputs">
              <div class="textInputWrapper">
                <input placeholder="Username" type="text" class="textInput" />
              </div>

              <div class="textInputWrapper">
                <input placeholder="Email" type="email" class="textInput" />
              </div>

              <div class="textInputWrapper">
                <input
                  placeholder="Password"
                  type="password"
                  class="textInput"
                />
              </div>
            </div>

            <span className="OR">or</span>

            <div className="social-container">
              <ul className="wrapper iconscon">
                <li className="icon facebook">
                  <span className="tooltip">Facebook</span>
                  <span>
                    <a href="">
                      {" "}
                      <FaFacebookF className="Ricon" />{" "}
                    </a>
                  </span>
                </li>
                <li className="icon twitter">
                  <span className="tooltip">Twitter</span>
                  <span>
                    {" "}
                    <a href="#">
                      {" "}
                      <FaTwitter className="Ricon" />{" "}
                    </a>
                  </span>
                </li>
                <li className="icon instagram">
                  <span className="tooltip">Instagram</span>
                  <span>
                    {" "}
                    <a href="">
                      {" "}
                      <FaInstagram className="Ricon" />{" "}
                    </a>{" "}
                  </span>
                </li>
              </ul>
            </div>

            <NavLink to="/" end>
              <button className="cssbuttons-io">
                <span>Sign Up</span>
              </button>
            </NavLink>
          </form>
        </div>

        <div className="form-container sign-in-container">
          <form action="#">
            <h1>Sign in</h1>

            <div className="inputs">
              <div class="textInputWrapper">
                <input placeholder="Email" type="email" class="textInput" />
              </div>

              <div class="textInputWrapper">
                <input
                  placeholder="Password"
                  type="password"
                  class="textInput"
                />
              </div>
            </div>

            <a onClick={() => setFP(true)} id="fp">
              Forgot your password?
            </a>

            <div className="social-container">
              <ul className="wrapper iconscon">
                <li className="icon facebook">
                  <span className="tooltip">Facebook</span>
                  <span>
                    <a href="">
                      {" "}
                      <FaFacebookF className="Ricon" />{" "}
                    </a>
                  </span>
                </li>
                <li className="icon twitter">
                  <span className="tooltip">Twitter</span>
                  <span>
                    {" "}
                    <a href="#">
                      {" "}
                      <FaTwitter className="Ricon" />{" "}
                    </a>
                  </span>
                </li>
                <li className="icon instagram">
                  <span className="tooltip">Instagram</span>
                  <span>
                    {" "}
                    <a href="">
                      {" "}
                      <FaInstagram className="Ricon" />{" "}
                    </a>{" "}
                  </span>
                </li>
              </ul>
            </div>

            <NavLink to="/" end>
              <button className="cssbuttons-io">
                <span> Sign In</span>
              </button>
            </NavLink>
          </form>
        </div>

        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button className="ghost" id="signIn">
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button className="ghost" id="signUp">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="BGC">
        <div className="C"></div>
        <div className="C"></div>
      </div>

      <div className="RegisterPage">
        <div className="RegPanel" id="RegPanel">
          {FP == true ? <ForgotPass /> : <RegisterPanel />}
        </div>
      </div>
    </>
  );
}

export default RegisterPage;
