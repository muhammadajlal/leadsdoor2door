import React, {useContext} from "react";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import "./FAQ.scss";
import faq from "../../assets/lottie/fa";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import {illustration, FAQ} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import landingPerson2 from "../../assets/images/d2d.jpg";

export default function FAq() {
  const {isDark} = useContext(StyleContext);
  if (!FAQ.displayGreeting) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="faq-main" id="faq">
        <div className="faqing-main">
          <div className="faqing-text-div">
            <div>
              <h1
                className={isDark ? "dark-mode faqing-text" : "faqing-text"}
              >
                {" "}
                {FAQ.title}{" "}
                <span className="wave-emoji">{emoji("")}</span>
              </h1>
              <p
                className={
                  isDark
                    ? "dark-mode faqing-text-p"
                    : "faqing-text-p subTitle"
                }
              >
                {FAQ.subTitle}
              </p>
              <div className="button-greeting-div">
                {FAQ.showResumeButton && FAQ.resumeLink && (
                  <a
                    download="Resume.pdf"
                    className="download-link-button"
                  >
                    <Button text="Download my resume" />
                  </a>
                )}
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={faq} />
            ) : (
              <img
                alt="man sitting on table"
                src={require("../../assets/images/manOnTable.svg")}
              ></img>
            )}
          </div>
        </div>
      </div>
    </Fade>
  );
}
