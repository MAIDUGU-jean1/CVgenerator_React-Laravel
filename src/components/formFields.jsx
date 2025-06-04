import { useState } from "react";
import { Tab } from "./tabs";
import { Forms } from "./Forms";
import Button from "./button";
import { schools } from "../App";
import { workExperienceList } from "../App";

export default function FormFields({
  curName,
  onCurName,
  curEmail,
  onSetEmail,
  curPhone,
  onSetPhone,
  curAddress,
  onSetAddress,
  schoolList,
  onSchoolList,
  workList,
  onWorkList,
  contentActive,
  setContentActive,
  customizeActive,
  setCustomizeActive,
}) {
  const [activeTab, setActiveTab] = useState("");
  const [activeButton, setActiveButton] = useState("Sans");
  // state for color input
  const [headerBgColor, setHeaderBgColor] = useState("#e1e8ff");
  const [textColor, setTextColor] = useState("#000");

  function handleHeaderColorChange(event) {
    const headerContainer = document.querySelector(".personal-info-holder");
    const newHeaderColor = event.target.value;
    setHeaderBgColor(newHeaderColor);
    const luminance = calculateLuminance(newHeaderColor);
    setTextColor(luminance > 0.5 ? "#000" : "#fff");
    headerContainer.style.backgroundColor = headerBgColor;
    headerContainer.style.color = textColor;
  }

  function calculateLuminance(color) {
    const hex = color.slice(1);
    const rgb = parseInt(hex, 16);
    const r = (rgb >> 16) & 0xff;
    const g = (rgb >> 8) & 0xff;
    const b = (rgb >> 0) & 0xff;
    return (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255; // calculate luminance
  }

  function handleClearResume() {
    onCurName("");
    onSetEmail("");
    onSetPhone("");
    onSetAddress("");
    onSchoolList([]);
    onWorkList([]);
  }

  function handleLoadExample() {
    onCurName("MAIDUGU JEAN PERRIN");
    onSetEmail("maidugu@gmail.com");
    onSetPhone("682-090-879");
    onSetAddress("Bamenda, Northwest Region");
    onSchoolList(schools);
    onWorkList(workExperienceList);
    setHeaderBgColor("#e1e8ff");
    setTextColor("#000");
    const headerContainer = document.querySelector(".personal-info-holder");
    headerContainer.style.backgroundColor = headerBgColor;
    headerContainer.style.color = textColor;
  }
  function handleSansClick() {
    const cvSide = document.querySelector(".cvSide");
    cvSide.style.fontFamily = "Sans";
    setActiveButton("Sans");
  }
  function handleSerifClick() {
    const cvSide = document.querySelector(".cvSide");
    cvSide.style.fontFamily = "Serif";
    setActiveButton("Serif");
  }
  function handleInterClick() {
    const cvSide = document.querySelector(".cvSide");
    cvSide.style.fontFamily = "Inter";
    setActiveButton("Inter");
  }
  return (
    <div className="form-fields">
      <div className="form-edits">
        <Button
          className="form-edits-btn clear-resume"
          buttonFunction={handleClearResume}
        >
          <p>Clear CV</p>
        </Button>
        <Button
          className="form-edits-btn load-example"
          buttonFunction={handleLoadExample}
        >
          <p>Load Example</p>
        </Button>
      </div>
      {/* THIS IS WHERE THE UI WILL RENDER DEPENDING ON CUSTOMIZE */}
      {customizeActive ? (
        <>
          <div className="customize-tabs">
            <p>Color</p>
            <span>
              <label>Accent Color</label>
              <input
                type="color"
                value={headerBgColor}
                onChange={handleHeaderColorChange}
              ></input>
            </span>
          </div>
          <div className="customize-tabs">
            <p>Fonts</p>
            <div className="font-btn-container">
              <button
                className={`font-btn sans-btn ${
                  activeButton === "Sans" ? "active" : ""
                }`}
                onClick={handleSansClick}
              >
                <span>Aa</span> Sans
              </button>
              <button
                className={`font-btn serif-btn ${
                  activeButton === "Serif" ? "active" : ""
                }`}
                onClick={handleSerifClick}
              >
                <span>Aa</span> Serif
              </button>
              <button
                className={`font-btn inter-btn ${
                  activeButton === "Inter" ? "active" : ""
                }`}
                onClick={handleInterClick}
              >
                <span>Aa</span> Inter
              </button>
            </div>
          </div>
        </>
      ) : (
        <>
          <Forms
            formType="personal"
            formPersonal="form-personal"
            curName={curName}
            onCurName={onCurName}
            curEmail={curEmail}
            onSetEmail={onSetEmail}
            curPhone={curPhone}
            onSetPhone={onSetPhone}
            curAddress={curAddress}
            onSetAddress={onSetAddress}
          />
          <Tab
            description="Education"
            icon="school"
            formType="education"
            activeTab={activeTab}
            onActiveTab={setActiveTab}
            itemList={schoolList}
            onItemList={onSchoolList}
          />
          <Tab
            description="Experience"
            icon="work"
            formType="workExperience"
            activeTab={activeTab}
            onActiveTab={setActiveTab}
            itemList={workList}
            onItemList={onWorkList}
          />
        </>
      )}
    </div>
  );
}
