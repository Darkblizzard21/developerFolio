import React, {createRef, useContext} from "react";
import {Fade, Slide} from "react-reveal";
import "./ExperienceCard.scss";
import StyleContext from "../../contexts/StyleContext";
import {presentNum} from "../../portfolio";

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
  if(code === presentNum) return "Present"
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
  return months[(code%100)-1] + " " + year
}

function timeDiff(start, end){

  if(end < start)
    console.error(`Experience started after its end! start: ${start} end: ${end}`);

  if(end === presentNum){
    let date = new Date();
    end = date.getFullYear() * 100 + date.getMonth() + 1;
  }
  let startY = Math.trunc(start / 100)
  let endY = Math.trunc(end / 100)
  let yDiff = endY-startY;

  let startMonth = start % 100
  let endMonth = end % 100
  if(endMonth < startMonth){
    endMonth += 12
    yDiff -= 1
  }
  let mDiff = endMonth - startMonth + 1
  if(mDiff === 12){
    yDiff += 1
    mDiff = 0
  }
  let yText = `${yDiff} yr${yDiff===1 ? 's' : ''} `
  let mText = `${mDiff} ${yDiff===1 ? 'mon' : 'mos'}`
  return ` • ${yDiff>0 ? yText : ''}${mDiff>0 ? mText : ''}`;

}


function singleSection(section, isDark, showTime) {
  return (
    <div className="experience-single-wrapper">
    <div className="experience-text-details">
      <h5
        className={
          isDark
            ? "dark-mode experience-text-subHeader"
            : "experience-text-subHeader"
        }
      >
        {section.subHeader}
      </h5>
      <p
        className={`${
          isDark ? "dark-mode" : ""
        } experience-text-duration`}
      >
        {DateCodeToStr(section.start) + " - " + DateCodeToStr(section.end)}
        {showTime ? timeDiff(section.start, section.end) : ""}
      </p>
      <p className="experience-text-desc">{section.desc}</p>
      <div className="experience-text-bullets">
        <ul>
          <GetDescBullets descBullets={section.descBullets} />
        </ul>
      </div>
    </div>
    </div>);
}

function multipleSections(sections, isDark, showTime) {
  return (
    <ul className="experience-bar">
    {sections.map(section =>
      <li><div className="experience-text-details">
        <h5
          className={
            isDark
              ? "dark-mode experience-text-subHeader"
              : "experience-text-subHeader"
          }
        >
          {section.subHeader}
        </h5>
        <p
          className={`${
            isDark ? "dark-mode" : ""
          } experience-text-duration`}
        >
          {DateCodeToStr(section.start) + " - " + DateCodeToStr(section.end)}
          {showTime ? timeDiff(section.start, section.end) : ""}
        </p>
        <p className="experience-text-desc">{section.desc}</p>
        <div className="experience-text-bullets">
          <ul>
            <GetDescBullets descBullets={section.descBullets} />
          </ul>
        </div>
      </div></li>)}
    </ul>)
}

export default function ExperienceCard({place, showTime}) {
  const imgRef = createRef();
  const {isDark} = useContext(StyleContext);

  const showOverallTime = showTime && place.items.length > 1

  let startTime = place.items.map(section=>section.start).reduce((a, c) => Math.min(a,c), presentNum)
  let endTime = place.items.map(section=>section.end).reduce((a, c) => Math.max(a,c), 0)

  if (!place.logo)
    console.error(`Image of ${place.name} is missing in experience section`);
  return (
    <div>
      <Fade left duration={1000}>
        <div className="experience-card">
          {place.logo && (
            <div className="experience-card-left">
              <img
                crossOrigin={"anonymous"}
                ref={imgRef}
                className="experience-roundedimg"
                src={place.logo}
                alt={place.name}
              />
            </div>
          )}
          <div className="experience-card-right">
            <h5 className="experience-text-place">{place.name}</h5>
            {place.location && (<p
              className={`${
                isDark ? "dark-mode" : ""
              } experience-text-duration`}
            >
              {place.location}{showOverallTime ? timeDiff(startTime, endTime) : "" }
            </p>)}
            {(place.items.length === 1) ?
              singleSection(place.items[0], isDark, showTime)
              : multipleSections(place.items, isDark, showTime)}
          </div>
        </div>
      </Fade>
      <Slide left duration={2000}>
        <div className="experience-card-border"></div>
      </Slide>
    </div>
  );
}
