import React from "react";
import "./educationCard.scss";
import {educationInfo} from "../../portfolio";

export default function SoftwareSkill1() {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {educationInfo.educationInfo.map((skills, i) => {
            return (
              <li
                key={i}
                className="software-skill-inline"
                name={skills.skillName}
              >
                <i className={skills.fontAwesomeClassname}></i>
                <p>{skills.skillName}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
