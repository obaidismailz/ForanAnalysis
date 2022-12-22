// import logo from '';
import React, { useEffect , useState} from "react";
import "../Style/App.css";
import Step3 from "../Assests/Step3.png";
import $ from "jquery";

// import { BiAnalyse, AiOutlineHistory, MdOutlineSupervisorAccount, VscAccount } from "react-icons/di";

function Sentiment() {
  return (
    <>
    <h1>Sentiment Analysis</h1>
    <div className="inputsec">
    <p>Enter User name or Hashtag name</p>
    <div class="textInputWrapper">
                <input placeholder="enter" type="text" class="textInput" />
              </div>
    </div>

    <h1>Result</h1>
    <div className="resultsec">
      <img src={Step3} alt="" />
    </div>
    </>
  );
}

function Account() {
  return (
    <>
    <h1>Account Finder</h1>
    <div className="inputsec">
    <p>Enter User name</p>
    <div class="textInputWrapper">
                <input placeholder="enter" type="text" class="textInput" />
              </div>
    </div>

    <h1>Result</h1>
    <div className="accresultsec">
      <p className="resh2" >system have detect these accounts</p>
      <div>
        <p><small>instagram</small>sherryjutt42</p>
        <a href="">wwww/instagram/sherryjut42/</a>
      </div>

      <div>
        <p><small>facebook</small>sherryjutt42</p>
        <a href="">wwww/instagram/sherryjut42/</a>
      </div>

      <div>
        <p><small>twitter</small>sherryjutt42</p>
        <a href="">wwww/instagram/sherryjut42/</a>
      </div>
    </div>
    </>
  );
}

function History() {
  return (
    <>


    <h1>History</h1>
    <div className="accresultsec">
      <div>
        <p><small>10/12/2022 3pm</small>saynotocorruption</p>
      </div>

      <div>
        <p><small>10/12/2022 3pm</small>pti</p>
      </div>
    </div>
    </>
  );
}

function Profile() {
  return (
    <>
    <h1>Profile</h1>
    <div className="inputsec">
    <p>User name</p>
    <div class="textInputWrapper">
                <input placeholder="sherry jutt" type="text" class="textInput" />
              </div>
    <p>Email</p>
    <div class="textInputWrapper">
                <input placeholder="sherryjutt442@gmail.com" type="email" class="textInput" />
              </div>
    <p>Password</p>
    <div class="textInputWrapper">
                <input placeholder="123456789" type="password" class="textInput" />
              </div>
    </div>

    </>
  );
}

function App() {

  const [flag, setflag] = useState(1);

  return (


    <div className="App">
      <aside className="aside">
        <input type="checkbox" name="" className="toggle" id="toggle" />
        <label for="toggle" className="toggle-label">
          <i className="bi bi-arrow-right"></i>
        </label>
        <div className="aside-wrapper">
          <div className="aside-header">
            <div className="header-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
              <a onClick={() => setflag(4)}>
            <div className="header-log">
              <div className="header-logo-image">
                <img src="https://via.placeholder.com/36/27ae60/ffffff?text=X" alt="" />
              </div>
              <div className="header-logo-text">
                Sheharyar
              </div>
            </div>
              </a>

          </div>
          <div className="aside-body">
            <div className="aside-links-group">
              <ul>
                <li className="">
                  <a href="#" onClick={() => setflag(1)}>
                    <i > S</i>
                    <div>
                      Sentiment Analysis
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#" onClick={() => setflag(2)}>
                    <i > A</i>
                    <div>
                      Accounts Finder
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#" onClick={() => setflag(3)}>
                    <i > H</i>
                    <div>
                      History
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            {/* <div className="aside-links-group">
              <ul>
                <li>
                  <a href="#">
                    <i className="bi bi-image" data-fill="&#xF429"></i>
                    <div>
                      My gallery
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="bi bi-heart" data-fill="&#xF415"></i>
                    <div>
                      Favourites
                    </div>
                  </a>
                </li>
              </ul>
            </div> */}
          </div>
          {/* <div className="aside-footer">
            <div className="aside-links-group">
              <ul>
                <li>
                  <a href="#">
                    <i className="bi bi-gear" fill="&#xF3E2"></i>
                    <div>
                      Settings
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="bi bi-chat-square-text" fill="&#xF263"></i>
                    <div>
                      FAQ
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div> */}
        </div>
      </aside>

      <div className="AppSec">

          {flag == 1 ? <Sentiment /> : <></>}
          {flag == 2 ? <Account /> : <></>}
          {flag == 3 ? <History /> : <></>}
          {flag == 4 ? <Profile /> : <></>}

      </div>

    </div>

  );
}

export default App;
