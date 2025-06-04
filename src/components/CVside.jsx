import ListInfo from "./info";
import Header from "./header";

export default function CVside({
  curName,
  onCurName,
  curEmail,
  onSetEmail,
  curPhone,
  onSetPhone,
  curAddress,
  onSetAddress,
  schoolList,
  workList,
}) {
  return (
    <div className="appChild cvSide"  id="cv">
      <Header
        curName={curName}
        curEmail={curEmail}
        curPhone={curPhone}
        curAddress={curAddress}
      />
      <ListInfo itemList={schoolList} heading="Education" />
      <ListInfo itemList={workList} heading="Experience" />
    </div>
  );
}
