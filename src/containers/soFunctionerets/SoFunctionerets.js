import React, {useContext} from "react";
import "../photovoltaikLeads/PhotovoltaikLeads.scss";
import {illustration, educationInfo} from "../../portfolio";
import {Fade} from "react-reveal";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";
import codingPerson2 from "../../assets/images/d2d2.jpg";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import edu from "../../assets/lottie/g2";

export default function Skills() {
  const {isDark} = useContext(StyleContext);
  if (!educationInfo.display) {
    return null;
  }
  return (
    <div className={isDark ? "dark-mode main" : "main"} id="functioneret">
      <div className="skills-main-div">
        <Fade left duration={1000}>
          <div className="skills-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={edu}/>
            ) : (
              <img
                alt="Man Working"
                src={require("../../assets/images/developerActivity.svg")}
              ></img>
            )}
          </div>
        </Fade>
        <Fade right duration={1000}>
          <div className="skills-text-div">
            <h1
              className={isDark ? "dark-mode skills-heading" : "skills-heading"}
            >
              {educationInfo.title}{" "}
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode subTitle skills-text-subtitle"
                  : "subTitle skills-text-subtitle"
              }
            >
              {educationInfo.subTitle}
            </p>
            <SoftwareSkill />
            <div>
              {educationInfo.skills.map((skills, i) => {
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
      </div>
    </div>
  );
}
