import { useContext } from "react";
import classes from "./end-effector-control-button.module.css";
import ModelContext from "@/pages/Store/modelContext";

function EndEffectorControlButton(props) {

  const modelState = useContext(ModelContext);

  function clickEvent() {
    props.setOpenCoordinateModal(true)
    props.setOpenSliders(false)
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
        <img src="/assets/images/control-buttons/end-effector-icon.svg" />
      </div>
    </div>
  );
}

export default EndEffectorControlButton;
