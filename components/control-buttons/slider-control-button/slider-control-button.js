import classes from "./slider-control-button.module.css";

function SliderControlButton(props) {
  return (
    <div
      className={classes.controlContainer}
      onClick={() => props.setOpenSliders(true)}
    >
      <div className={classes.buttonContent}>
        <img src="/assets/images/control-buttons/slider-icon.svg" />
      </div>
    </div>
  );
}

export default SliderControlButton;
