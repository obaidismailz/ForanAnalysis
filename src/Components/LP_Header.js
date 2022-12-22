import "../Style/LP_Header.css";
import React from "react";
import Typewriter from "typewriter-effect";
import Lottie from "react-lottie-player";
import robotgif from "../Assests/robotgif.json";
import B1 from "../Assests/building1.svg";
import B2 from "../Assests/building2.svg";
import B3 from "../Assests/building3.svg";
import Jupiter from "../Assests/jupiter.svg";
import { NavLink } from "react-router-dom";

window.addEventListener("scroll", function () {
  var Bg1 = document.getElementsByClassName("Building")[0];
  var Bg2 = document.getElementsByClassName("Building")[1];
  var Bg3 = document.getElementsByClassName("Building")[2];
  var jupiter = document.getElementsByClassName("jupiter")[0];

  let Yvalue = window.scrollY;
  let Xvalue = window.scrollX;

  if (Bg1 && Bg2 && Bg3) {
    Bg1.style.left = "+" + Yvalue * 0.35 + "px";
    Bg2.style.right = "+" + Yvalue * 0.35 + "px";

    Bg1.style.bottom = "-" + Yvalue * 0.45 + "px";
    Bg2.style.bottom = "-" + Yvalue * 0.15 + "px";
    Bg3.style.bottom = "-" + Yvalue * 0.05 + "px";
  }
});

export default function Header() {
  return (
    <>
      <div className="bgB">
        <img src={B3} className="Building" alt="" id="B3" />
        <img src={B2} className="Building" alt="" id="B2" />
        <img src={B1} className="Building" alt="" id="B1" />
        <img src={Jupiter} className="jupiter" alt="" id="jupiter" />
      </div>

      <div className="Header">
        <div className="con">
          <div className="line"></div>
          {/* <h1>Sentiment Analysis</h1> */}
          <h1>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Forensic Analysis")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Sentiment Analysis")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Forensic Analysis")
                  .start();
              }}
            />
          </h1>
          <p>
            Helping Business, Organisations, and Individuals by Providing real
            time analysis of <br /> <b>Trends</b> and <b>Tweets</b> .
          </p>

          <NavLink to="/Home" end>
            <button className="cssbuttons-io">
              <span> Start Analysis</span>
            </button>
          </NavLink>
        </div>

        <div className="imgcon">
          <Lottie className="robotimg" loop animationData={robotgif} play />
        </div>

        <span className="HText">
          AI BOT <span></span>
        </span>
      </div>
    </>
  );
}
