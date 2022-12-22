import React from "react";
import $ from "jquery";
import Step1 from "../Assests/Step1.png";
import Step2 from "../Assests/Step2.png";
import Step3 from "../Assests/Step3.png";
import Epositive from "../Assests/smiling_face_with_halo.gif";
import Eneutral from "../Assests/face_with_rolling_eyes.gif";
import Enegative from "../Assests/pouting_face.gif";
import { NavLink } from "react-router-dom";

function isScrolledIntoView(elem) {
  var docViewTop = $(window).scrollTop();
  var docViewBottom = docViewTop + $(window).height();
  var elemOffset = 0;

  if (elem.data("offset") != undefined) {
    elemOffset = elem.data("offset");
  }
  var elemTop = $(elem).offset().top;
  var elemBottom = elemTop + $(elem).height();

  if (elemOffset != 0) {
    // custom offset is updated based on scrolling direction
    if (docViewTop - elemTop >= 0) {
      // scrolling up from bottom
      elemTop = $(elem).offset().top + elemOffset;
    } else {
      // scrolling down from top
      elemBottom = elemTop + $(elem).height() - elemOffset;
    }
  }

  if (elemBottom <= docViewBottom && elemTop >= docViewTop) {
    // once an element is visible exchange the classes
    $(elem).removeClass("notViewed").addClass("viewed");

    var animElemsLeft = $(".animBlock.notViewed").length;
    if (animElemsLeft == 0) {
      // with no animated elements left debind the scroll event
      $(window).off("scroll");
    }
  }
}

function FeatureCard(props) {
  return (
    <div data-position="left" className=" animBlock notViewed">
      <a className="card1 card2" href="#">
        <h3>{props.heading}</h3>
        <p className="small">{props.detail}</p>
        <div className="go-corner" href="#">
          <div className="go-arrow">→</div>
        </div>
      </a>
    </div>
  );
}

export default function Body() {
  React.useEffect(() => {
    var $blocks = $(".animBlock");
    var $window = $(window);

    $window.on("scroll", function (e) {
      $blocks.each(function (i, elem) {
        if ($(this).hasClass("viewed")) return;

        isScrolledIntoView($(this));
      });
    });
  });

  return (
    <div className="LPBMask">
      <div className="BG">
        <div className="leftCG"></div>
        <div className="leftCG" style={{ marginTop: "720px" }}></div>
        <div className="leftCG"></div>
        <div className="leftCG"></div>
      </div>
      <div className="LP_Body">
        <div className="featurescon">
          <div data-position="top" className="div1 animBlock notViewed">
            <h1>Our Key Features</h1>
            <p>
              we are providing following primary features in our website to ease the process of forensic analysis.
              these features include
            </p>
          </div>

          {/* Step 1 */}
          <div className=" div2 ">
            <FeatureCard
              heading="Forensic Analysis"
              detail=" Analysis persons or trends based on there social existence on internet. "
            />
            <FeatureCard
              heading="Sentiment Analysis"
              detail=" NLP Approach that identifies the emotional tone behind a body of text."
            />
            <FeatureCard
              heading="Social Accounts"
              detail=" Find out the social media accounts of a person based on specific username."
            />
            <FeatureCard
              heading="Fake Trends"
              detail=" Analyse fake trends by judging the sentiment of audience on that trend. "
            />
            <FeatureCard
              heading="Audience Feedback"
              detail=" Feedback of audience or specific posts or Hashtages."
            />
          </div>
        </div>

        <div className="carouselcon">
          <div className="Text">
            <h1>Sentiment Classification</h1>
            <p>
              Divide dataset in positive, negative or neutral sentiments on the basis of
              which you can make decisions or check fake trends.
            </p>
          </div>

          <div className="emojicon">
            <div className="emoji">
              <p>Positive</p>
              <img src={Epositive} alt="" />
            </div>
            <div className="emoji">
              <p>Neutral</p>
              <img src={Eneutral} alt="" />
            </div>
            <div className="emoji">
              <p>Negative</p>
              <img src={Enegative} alt="" />
            </div>
          </div>
        </div>

        <div className="flowcon">
          <div data-position="top" className="div1 animBlock notViewed">
            <h1>Forensic Analysis Steps</h1>
            <p>
              Forensic Analysis is performed in number of steps that are following.
            </p>
          </div>

          {/* Step 1 */}
          <div data-position="left" className=" div2 animBlock notViewed">
            <img src={Step1} alt="" />
          </div>
          <div
            data-position="right"
            className="div3 WFData animBlock notViewed"
          >
            <small>STEP 1</small>
            <h1>Enter Details</h1>
            <p>
              Enter the username or Hashtage name to gather information related to that specific entity.
              Choose a timespan to filter down the posts to a specific timeline for improved results.
            </p>
          </div>

          {/* Step 2 */}
          <div data-position="left" className="div4 WFData animBlock notViewed">
            <small>STEP 2</small>
            <h1>NLP Model Working</h1>
            <p>
              After gathering data a number of pre processing techniques are performed and a labeled dataset is generated. Then this dataset is given to sentiment analysis model and classification is performed on it.
            </p>
          </div>

          <div data-position="right" className="div5 animBlock notViewed">
            <img src={Step2} alt="" />
          </div>

          {/* Step 3 */}
          <div data-position="left" className="div6 animBlock notViewed">
            <img src={Step3} alt="" />
          </div>
          <div
            data-position="right"
            className="div7 WFData animBlock notViewed"
          >
            <small>STEP 3</small>
            <h1>View Result</h1>
            <p>
              the report of your analysis is now out in the form of visual representations like graphs, lists etc to better understand the result of analysis.
            </p>
          </div>
        </div>

        <div className="lastcon animBlock notViewed" data-position="top">
          <div className="Text">
            <div className="line"></div>
            <h1>Forensic Analysis</h1>
            <p>
              Forensic Analysis using NLP and Machine Learning to better understand the sentiment of a person or trend.
            </p>
          </div>
          <div className="Btn">
            <NavLink to="/Home" end>
              <button className="cssbuttons-io">
                <span> Start Analysis</span>
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
