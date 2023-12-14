import classes from "./slider-control-button.module.css";

function SliderControlButton() {
  return (
    <div className={classes.controlContainer}>
      <div className={classes.buttonContent}>
        <img src="/assets/images/control-buttons/slider-icon.svg" />
      </div>
    </div>
  );
}

export default SliderControlButton;
