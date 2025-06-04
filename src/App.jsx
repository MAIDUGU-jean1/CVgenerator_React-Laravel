import { useState } from "react";
import "./styles/App.css";
import EditSide from "./components/editSide";
import CVside from "./components/CVside";
import html2pdf from "html2pdf.js";
import { Route, Routes } from 'react-router-dom';
import Register from "./components/Register";
import Login from "./components/Login";



export const schools = [
  {
    School: "University of Bamenda, Bambili",
    Degree: "Bachelor of technology",
    "Start date": "08/22/2017",
    "End date": "05/13/2021",
    Location: "Bambili, Cameroon",
    visible: true,
  },
  {
    School: "UCLA",
    Degree: "MS Statistics",
    "Start date": "08/22/2021",
    "End date": "05/13/2023",
    Location: "Los Angeles, CA",
    visible: true,
  },
];

export const workExperienceList = [
  {
    Company: "Tech Solutions Inc.",
    "Position Title": "Software Engineer",
    "Start date": "05/21/2023",
    "End date": "08/30/2024",
    Location: "BAMENDA CAMEROON",
    Description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam gravida tortor ac magna feugiat, sed dapibus ipsum ultricies. Proin nec massa ut magna luctus fermentum.",
    visible: true,
  },
];

export default function App() {
  // State for Personal Form
  const [curName, setCurName] = useState("MAIDUGU JEAN PERRIN");
  const [curEmail, setEmail] = useState("maidugu@gmail.com");
  const [curPhone, setPhone] = useState("682-090-879");
  const [curAddress, setAddress] = useState("Bamenda, Northwest Region");

  // State for the Array of Objects
  const [schoolList, setSchoolList] = useState(schools);
  const [workList, setWorkList] = useState(workExperienceList);
  // state for customize and content button
  const [contentActive, setContentActive] = useState(true);
  const [customizeActive, setCustomizeActive] = useState(false);

  function downloadCV() {
  const element = document.getElementById("cv");

  const opt = {
    margin: 0.3,
    filename: "My_CV.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
  };

  html2pdf().set(opt).from(element).save();
}



  return (
<>
<button
  onClick={downloadCV}
  style={{
    position: "absolute",
    top: "20px",
    right: "20px",
    padding: "10px 20px",
    backgroundColor: "#3498db",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    zIndex: 10,
  }}
>
  Download CV
</button>


    
    <div className="app">
      <EditSide
        curName={curName}
        onCurName={setCurName}
        curEmail={curEmail}
        onSetEmail={setEmail}
        curPhone={curPhone}
        onSetPhone={setPhone}
        curAddress={curAddress}
        onSetAddress={setAddress}
        schoolList={schoolList}
        onSchoolList={setSchoolList}
        workList={workList}
        onWorkList={setWorkList}
        contentActive={contentActive}
        setContentActive={setContentActive}
        customizeActive={customizeActive}
        setCustomizeActive={setCustomizeActive}
      />
      <CVside
        curName={curName}
        onCurName={setCurName}
        curEmail={curEmail}
        onSetEmail={setEmail}
        curPhone={curPhone}
        onSetPhone={setPhone}
        curAddress={curAddress}
        onSetAddress={setAddress}
        schoolList={schoolList}
        setSchoolList={setSchoolList}
        workList={workList}
        setWorkList={setWorkList}
      />
    </div>
    <Routes>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
    </Routes>
    </>
  );
}
