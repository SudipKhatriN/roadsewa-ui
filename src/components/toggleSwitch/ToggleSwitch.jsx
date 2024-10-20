import "./ToggleSwitch.css";

function ToggleSwitch() {
  return (
    <label className="toggle-switch">
      <input type="checkbox" />
      <div className="toggle-switch-background">
        <div className="toggle-switch-handle"></div>
      </div>
    </label>
  );
}

export default ToggleSwitch;
