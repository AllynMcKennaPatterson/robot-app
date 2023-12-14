import classes from "./camera-toggle-button.module.css#";

function CameraToggleButton() {
  return (

    <div className={classes.controlContainer}>
      <div className={classes.buttonContent}>
        <img src="/assets/images/control-buttons/camera-toggle-icon.svg" />
      </div>
        
    </div>
  );
}

export default CameraToggleButton;
