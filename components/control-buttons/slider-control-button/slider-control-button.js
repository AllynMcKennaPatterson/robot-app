import classes from "./slider-control-button.module.css";

function SliderControlButton(props) {
  function clickEvent(){
    props.setOpenSliders(true)
    props.setOpenCoordinateModal(false)
  }

  return (
    <div
      className={classes.controlContainer}
      onClick={() => clickEvent()}
    >
      <div className={classes.buttonContent}>
        <img src="/assets/images/control-buttons/slider-icon.svg" />
      </div>
    </div>
  );
}

export default SliderControlButton;
