import { useState } from "react";

export default function Header({ curName, curEmail, curPhone, curAddress }) {
  return (
    <div className="personal-info-holder">
      <h1>{curName}</h1>
      <div className="details">
        {curEmail !== "" ? (
          <PersonalDetail icon="email" detail={curEmail} />
        ) : (
          ""
        )}

        {curPhone !== "" ? (
          <PersonalDetail icon="phone" detail={curPhone} />
        ) : (
          ""
        )}
        {curAddress !== "" ? (
          <PersonalDetail icon="location_on" detail={curAddress} />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

function PersonalDetail({ detail, icon }) {
  return (
    <div className="personal-detail">
      <span className="material-icons detail-icon">{icon}</span> {detail}
    </div>
  );
}
