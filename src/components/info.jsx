import { useState } from "react";

export default function ListInfo({ itemList, heading }) {
  return (
    <div className="info-container">
      <div className="header-container">
        <h3>{heading}</h3>
      </div>
      <InfoDisplay itemList={itemList} />
    </div>
  );
}

function InfoDisplay({ itemList }) {
  return itemList.map(
    (item) =>
      item.visible && (
        <ListItem item={item} key={item.name || item.School || item.Company} />
      )
  );
}

function ListItem({ item }) {
  return (
    <div className="grid-info">
      <p>{`${item["Start date"]} - ${item["End date"]}`} </p>
      <p>
        <b>{item.School || item.Company}</b>
      </p>
      <p>{item.Location}</p>
      <p>{item.Degree || item["Position Title"]}</p>
      {item.Description && (
        <>
          <span></span>
          <p className="job-description">{item.Description}</p>
        </>
      )}
    </div>
  );
}
