import { useState } from "react";
import { Tab } from "./tabs";
import { Forms } from "./Forms";
import FormFields from "./formFields";
import { schools } from "../App";
import { workExperienceList } from "../App";
import { SideBar } from "./SideBar";

export default function EditSide({
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
  return (
    <div className="appChild edit-side">
      <SideBar
        contentActive={contentActive}
        setContentActive={setContentActive}
        customizeActive={customizeActive}
        setCustomizeActive={setCustomizeActive}
      />
      <FormFields
        curName={curName}
        onCurName={onCurName}
        curEmail={curEmail}
        onSetEmail={onSetEmail}
        curPhone={curPhone}
        onSetPhone={onSetPhone}
        curAddress={curAddress}
        onSetAddress={onSetAddress}
        schoolList={schoolList}
        onSchoolList={onSchoolList}
        workList={workList}
        onWorkList={onWorkList}
        contentActive={contentActive}
        setContentActive={setContentActive}
        customizeActive={customizeActive}
        setCustomizeActive={setCustomizeActive}
      />
    </div>
  );
}
