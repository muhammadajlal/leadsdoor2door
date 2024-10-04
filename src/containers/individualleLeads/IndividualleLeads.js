import React, {useContext} from "react";
import "./IndividualleLeads.scss";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import {illustration, NewPageSection} from "../../portfolio";
import {Fade} from "react-reveal";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";
import newp from "../../assets/lottie/g4";

export default function IndividualleLeads() {
  const {isDark} = useContext(StyleContext);
  if (!NewPageSection.display) {
    return null;
  }
  return (
    <div className={isDark ? "dark-mode main" : "main"} id="ind">
      <div className="skills-main-div">

        <Fade left duration={1000}>
          <div className="skills-text-div">
            <h1
              className={isDark ? "dark-mode skills-heading" : "skills-heading"}
            >
              {NewPageSection.title}{" "}
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode subTitle skills-text-subtitle"
                  : "subTitle skills-text-subtitle"
              }
            >
              {NewPageSection.subTitle}
            </p>
            <SoftwareSkill />
            <div>
              {NewPageSection.skills.map((skills, i) => {
                return (
                  <p
                    key={i}
                    className={
                      isDark
                        ? "dark-mode subTitle skills-text"
                        : "subTitle skills-text"
                    }
                  >
                    {skills}
                  </p>
                );
              })}
            </div>
          </div>
        </Fade>
        <Fade right duration={1000}>
          <div className="skills-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={newp} />
            ) : (
              <img
                alt="Man Working"
                src={require("../../assets/images/developerActivity.svg")}
              ></img>
            )}
          </div>
        </Fade>
      </div>
    </div>
  );
}
