import { useContext } from "react";
import classes from "./delay-button.module.css"
import ModelContext from "@/pages/Store/modelContext";

function DelayButton(props) {

  const modelState = useContext(ModelContext);

  function clickHandler() {
    props.setOpenDelayModal(true)
    props.setOpenSliders(true)
    props.setOpenCoordinateModal(false)
    props.setOpenObjectModal(false)
    modelState.hideTargetBlock()
  }

  return (
    <div className={classes.controlContainer} onClick={clickHandler}>
      <div className={classes.buttonContent}>
        {/* <img src="/assets/images/control-buttons/virtual-object-icon.svg" /> */}
      </div>
    </div>
  );
}

export default DelayButton;
