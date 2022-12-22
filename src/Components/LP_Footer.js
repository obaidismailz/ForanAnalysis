import "../Style/footer.css";
import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="row">
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

        <div className="row">
          <ul>
            <li>
              <a href="#">Our Features</a>
            </li>
            <li>
              <a href="#">Our Services</a>
            </li>
            <li>
              <a href="#">Register</a>
            </li>
            <li>
              <a href="#">Analysis</a>
            </li>
          </ul>
        </div>

        <div className="row">
          Foran Analysis Copyright © 2021 - All rights reserved
        </div>
      </div>
    </>
  );
}
