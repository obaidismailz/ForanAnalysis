// import logo from '';
import React from "react";
import ReactDOM from "react-dom";
import { useEffect } from "react";
import "../Style/RegisterPage.css";
import { NavLink } from "react-router-dom";

function ForgotPass() {
  //   React.useEffect(() => {

  //     const signUpButton = document.getElementById("signUp");
  //     const signInButton = document.getElementById("signIn");
  //     const container = document.getElementById("RegPanel");

  //     signUpButton.addEventListener("click", () => {
  //       container.classList.add("right-panel-active");
  //     });

  //     signInButton.addEventListener("click", () => {
  //       container.classList.remove("right-panel-active");
  //     });

  //   });

  return (
    <>
      <div className="form-container Changepassword">
        <form action="#">
          <h1>Change Password</h1>

          <div className="inputs">
            <div class="textInputWrapper">
              <input placeholder="Email" type="email" class="textInput" />
            </div>

            <div class="textInputWrapper">
              <input
                placeholder="New Password"
                type="password"
                class="textInput"
              />
            </div>
          </div>

          <NavLink to="/" end>
            <button className="cssbuttons-io">
              <span> Change</span>
            </button>
          </NavLink>
        </form>
      </div>
    </>
  );
}

export default ForgotPass;
