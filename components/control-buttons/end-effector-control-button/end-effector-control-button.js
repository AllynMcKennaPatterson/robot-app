import classes from "./end-effector-control-button.module.css";

function EndEffectorControlButton() {
  return (

    <div className={classes.controlContainer}>
      <div className={classes.buttonContent}>
        <img src="/assets/images/control-buttons/end-effector-icon.svg" />
      </div>
        
    </div>
  );
}

export default EndEffectorControlButton;
