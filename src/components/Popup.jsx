
export default function Popup({ RobotTurn }) {
  return (
    <div
      className="popup-container"
      style={RobotTurn.setPopup ? { display: "flex" } : {}}
    >
      <div className="popup ">robot trun</div>
    </div>
  );
}
