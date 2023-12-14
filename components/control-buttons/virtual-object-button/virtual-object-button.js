import classes from "./virtual-object-button.module.css";

function VirtualObjectButton() {
  return (
    <div className={classes.controlContainer}>
      <div className={classes.buttonContent}>
        <img src="/assets/images/control-buttons/virtual-object-icon.svg" />
      </div>
    </div>
  );
}

export default VirtualObjectButton;
