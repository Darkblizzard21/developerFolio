import React, {createRef, useContext} from "react";
import {Fade, Slide} from "react-reveal";
import "./EducationCard.scss";
import StyleContext from "../../contexts/StyleContext";
import {educationInfo} from "../../portfolio";

function GetDescBullets({descBullets}) {
  const {isDark} = useContext(StyleContext);
  return descBullets
    ? descBullets.map((item, i) => (
      <li key={i} className={`${isDark ? "dark-mode" : ""} subtitle`}>
        {item}
      </li>
    ))
    : null;
}

function DateCodeToStr(code) {
  if(code === 0) return "Present"
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ]
  let year = Math.trunc(code/100)
  return months[code%100] + " " + year
}

function singleSection(section, isDark) {
  return (
    <div className="education-text-details">
      <h5
        className={
          isDark
            ? "dark-mode education-text-subHeader"
            : "education-text-subHeader"
        }
      >
        {section.subHeader}
      </h5>
      <p
        className={`${
          isDark ? "dark-mode" : ""
        } education-text-duration`}
      >
        {DateCodeToStr(section.start) + " - " + DateCodeToStr(section.end)}
      </p>
      <p className="education-text-desc">{section.desc}</p>
      <div className="education-text-bullets">
        <ul>
          <GetDescBullets descBullets={section.descBullets} />
        </ul>
      </div>
    </div>);
}

function multipleSections(sections, isDark) {
  return (
    <ul className="education-bar">
    {sections.map(section =>
      <li><div className="education-text-details">
        <h5
          className={
            isDark
              ? "dark-mode education-text-subHeader"
              : "education-text-subHeader"
          }
        >
          {section.subHeader}
        </h5>
        <p
          className={`${
            isDark ? "dark-mode" : ""
          } education-text-duration`}
        >
          {DateCodeToStr(section.start) + " - " + DateCodeToStr(section.end)}
        </p>
        <p className="education-text-desc">{section.desc}</p>
        <div className="education-text-bullets">
          <ul>
            <GetDescBullets descBullets={section.descBullets} />
          </ul>
        </div>
      </div></li>)}
    </ul>)
}

export default function EducationCard({school}) {
  const imgRef = createRef();
  const {isDark} = useContext(StyleContext);

  if (!school.logo)
    console.error(`Image of ${school.name} is missing in education section`);
  return (
    <div>
      <Fade left duration={1000}>
        <div className="education-card">
          {school.logo && (
            <div className="education-card-left">
              <img
                crossOrigin={"anonymous"}
                ref={imgRef}
                className="education-roundedimg"
                src={school.logo}
                alt={school.schoolName}
              />
            </div>
          )}
          <div className="education-card-right">
            <h5 className="education-text-school">{school.schoolName}</h5>
            {(school.items.length === 1) ? singleSection(school.items[0], isDark) : multipleSections(school.items, isDark)}
          </div>
        </div>
      </Fade>
      <Slide left duration={2000}>
        <div className="education-card-border"></div>
      </Slide>
    </div>
  );
}
