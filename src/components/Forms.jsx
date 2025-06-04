import { useState } from "react";
import Button from "./button";

export function Forms({
  formType,
  formPersonal,
  curName,
  onCurName,
  curEmail,
  onSetEmail,
  curPhone,
  onSetPhone,
  curAddress,
  onSetAddress,
  // for schoolForm
  itemList,
  onItemList,
  setShowForm,
  setShowAdd,
}) {
  const [formData, setFormData] = useState({});

  //testing education state
  const [curSchool, setCurSchool] = useState("");
  const [curDegree, setCurDegree] = useState("");
  const [curStartDate, setCurStartDate] = useState("");
  const [curEndDate, setCurEndDate] = useState("");
  const [curSchoolLocation, setCurSchoolLocation] = useState("");

  // experience state
  const [curCompany, setCurCompany] = useState("");
  const [curPosition, setCurPosition] = useState("");
  const [jobStartDate, setJobStartDate] = useState("");
  const [jobEndDate, setJobEndDate] = useState("");
  const [curJobLocation, setCurJobLocation] = useState("");
  const [curDescription, setCurDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const newItem = { ...formData, visible: true };
    onItemList((prevList) => [...prevList, newItem]);
    setShowForm(false);
    setShowAdd(true);
  }

  function handleInputChange(name, value) {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  return (
    <form
      className={`form ${formPersonal ? "form-personal" : ""}`}
      onSubmit={handleSubmit}
    >
      {formType === "education" ? (
        <>
          <FormItem
            label="School"
            placeHolder="enter school / university"
            curItem={curSchool}
            onCurItem={setCurSchool}
            onChange={handleInputChange}
            formType={formType}
          />
          <FormItem
            label="Degree"
            placeHolder="enter degree / field of study"
            curItem={curDegree}
            onCurItem={setCurDegree}
            onChange={handleInputChange}
            formType={formType}
          />
          <div className="startEnd">
            <FormItem
              label="Start date"
              placeHolder="enter start date"
              startEnd={true}
              curItem={curStartDate}
              onCurItem={setCurStartDate}
              onChange={handleInputChange}
              formType={formType}
            />
            <FormItem
              label="End date"
              placeHolder="enter end date"
              startEnd={true}
              curItem={curEndDate}
              onCurItem={setCurEndDate}
              onChange={handleInputChange}
              formType={formType}
            />
          </div>
          <FormItem
            label="Location"
            placeHolder="enter location"
            curItem={curSchoolLocation}
            onCurItem={setCurSchoolLocation}
            onChange={handleInputChange}
            formType={formType}
          />
          <Button className="save-cancel" />
        </>
      ) : formType === "workExperience" ? (
        <>
          <FormItem
            label="Company"
            placeHolder="enter company name"
            curItem={curCompany}
            onCurItem={setCurCompany}
            onChange={handleInputChange}
            formType={formType}
          />
          <FormItem
            label="Position Title"
            placeHolder="enter position title"
            curItem={curPosition}
            onCurItem={setCurPosition}
            onChange={handleInputChange}
            formType={formType}
          />
          <div className="startEnd">
            <FormItem
              label="Start date"
              startEnd={true}
              placeHolder="enter start date"
              curItem={jobStartDate}
              onCurItem={setJobStartDate}
              onChange={handleInputChange}
              formType={formType}
            />
            <FormItem
              label="End date"
              startEnd={true}
              placeHolder="enter end date"
              curItem={jobEndDate}
              onCurItem={setJobEndDate}
              onChange={handleInputChange}
              formType={formType}
            />
          </div>
          <FormItem
            label="Location"
            placeHolder="enter location"
            curItem={curJobLocation}
            onCurItem={setCurJobLocation}
            onChange={handleInputChange}
            formType={formType}
          />
          <FormItem
            label="Description"
            placeHolder="enter description"
            curItem={curDescription}
            onCurItem={setCurDescription}
            onChange={handleInputChange}
            formType={formType}
          />
          <Button className="save-cancel" />
        </>
      ) : (
        <>
          <h2>Personal Information</h2>
          <FormItem
            label="Full Name"
            placeHolder="first and last name"
            curItem={curName}
            onCurItem={onCurName}
            formType={formType}
          />
          <FormItem
            label="Email"
            placeHolder="enter email address"
            curItem={curEmail}
            onCurItem={onSetEmail}
            formType={formType}
          />
          <FormItem
            label="Phone Number"
            placeHolder="enter phone number"
            curItem={curPhone}
            onCurItem={onSetPhone}
            formType={formType}
          />
          <FormItem
            label="Address"
            placeHolder="City, Country"
            curItem={curAddress}
            onCurItem={onSetAddress}
            formType={formType}
          />
        </>
      )}
    </form>
  );
}
function FormItem({
  label,
  startEnd,
  placeHolder,
  curItem,
  onCurItem,
  onChange,
  formType,
}) {
  return (
    <div className={`form-item ${startEnd ? "start-date" : ""}`}>
      <label>{label}</label>
      {label === "Description" ? (
        <textarea
          className="form-input form-description"
          placeholder={placeHolder}
          onChange={(e) => {
            onChange(label, e.target.value);
            onCurItem(e.target.value);
          }}
        ></textarea>
      ) : (
        <input
          type="text"
          className="form-input"
          placeholder={placeHolder}
          value={curItem}
          onChange={(e) => {
            onCurItem(e.target.value);
            formType !== "personal" && onChange(label, e.target.value);
          }}
          required={label === "Start date" || label === "End date"}
        ></input>
      )}
    </div>
  );
}
