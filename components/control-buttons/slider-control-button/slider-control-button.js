import { useContext } from "react";
import classes from "./slider-control-button.module.css";
import ModelContext from "@/pages/Store/modelContext";


function SliderControlButton(props) {

const modelState = useContext(ModelContext);

  function clickEvent() {
    props.setOpenSliders(true)
    props.setOpenCoordinateModal(false)
    props.setOpenDelayModal(false)
    props.setOpenObjectModal(false)
    modelState.hideTargetBlock()

  }
  return (
    <div
      className={classes.controlContainer}
      onClick={clickEvent}
    >
      <div className={classes.buttonContent}>
        <img src="/assets/images/control-buttons/slider-icon.svg" />
      </div>
    </div>
  );
}

export default SliderControlButton;
